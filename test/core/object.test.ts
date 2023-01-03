import * as ECS from "@zorse/adk/core/object";

import { Token, errors } from "@zorse/adk/core";

class DebugScene extends ECS.Scene {
	filter(component: ECS.Component): boolean {
		return component instanceof DebugComponent;
	}
}
class DebugComponent extends ECS.Component {
	public someFictionalProperty?: string;
	public moreFictionalProperty?: string;
	constructor(parent: ECS.Entity, public readonly properties: any = {}) {
		super(parent);
	}
	[ECS.Symbols.ComponentRender](output: any) {
		if (!output.Components) {
			output.Components = [];
		}
		output.Components.push(this[ECS.Symbols.ComponentHandle].serialize());
	}
}

describe("Object model tests", () => {
	it("should be able to render basic components", async () => {
		const system = new ECS.System();
		const entity = new ECS.Entity(system, "OptionalName");
		new DebugComponent(entity, { hello: "world" });
		new DebugComponent(entity, { hello: "example" });
		const otherEntity = new ECS.Entity(system);
		new DebugComponent(otherEntity, { hello: "world" });
		new DebugComponent(otherEntity, { hello: "sample" });
		const scene = new DebugScene(system);
		await system.compose();
		expect(scene.gizmos()).toEqual({
			Components: [
				{ properties: { hello: "world" } },
				{ properties: { hello: "example" } },
				{ properties: { hello: "world" } },
				{ properties: { hello: "sample" } },
			],
		});
	});

	it("should be able to render components with tokens", async () => {
		const system = new ECS.System();
		const entity = new ECS.Entity(system);
		new DebugComponent(entity, { token: new Token({ name: "TokenName" }) });
		const scene = new DebugScene(system);
		await system.compose();
		expect(scene.gizmos()).toEqual({
			Components: [{ properties: { token: "@@{TokenName}@@" } }],
		});
	});

	it("should be able to resolve components with tokens", async () => {
		const system = new ECS.System();
		const entity = new ECS.Entity(system);
		new DebugComponent(entity, {
			token: new Token({
				name: "TokenWithResolver",
				resolver: () => "some value",
			}),
		});
		new DebugComponent(entity, {
			token: new Token({ name: "unresolved" }),
		});
		const scene = new DebugScene(system);
		await system.compose();
		expect(scene.gizmos()).toEqual({
			Components: [{ properties: { token: "some value" } }, { properties: { token: "@@{unresolved}@@" } }],
		});
	});

	it("should report path to a nested Entity", async () => {
		const system = new ECS.System();
		const entity = new ECS.Entity(system);
		const nested = new ECS.Entity(entity);
		new DebugScene(system);
		await system.compose();
		expect(nested.path()).toEqual("Entity/Entity");
	});

	it("should report path to a nested Custom Entity", async () => {
		class CustomEntity1 extends ECS.Entity {}
		class CustomEntity2 extends ECS.Entity {}
		const system = new ECS.System();
		const entity = new CustomEntity1(system);
		const nested = new CustomEntity2(entity);
		new DebugScene(system);
		await system.compose();
		expect(nested.path()).toEqual("CustomEntity1/CustomEntity2");
	});

	it("should return Tokens if Components accesses are undefined", async () => {
		const system = new ECS.System();
		const entity = new ECS.Entity(system);
		const component1 = new DebugComponent(entity, { existing: 235 });
		const value1 = (component1 as any).random;
		expect(value1).toBeInstanceOf(Token);
		expect(value1.name()).toBe('Entity/DebugComponent["random"]');
		const resolved1 = await (value1 as Token).resolve();
		expect(resolved1).toBe(value1);
		const component2 = new DebugComponent(entity, { other: { value: "example" } });
		const value2 = (component2 as any).other.random[0];
		expect(value2.name()).toBe('Entity/DebugComponent2["other"]["random"]["0"]');
		expect(value2).toBeInstanceOf(Token);
		const resolved2 = await (value2 as Token).resolve();
		expect(`${resolved2}`).toBe(`${value2}`);
		expect(component1.properties.existing).toBe(235);
	});

	it("should throw on cyclic scenes", async () => {
		class DebugComponent1 extends DebugComponent {}
		class DebugComponent2 extends DebugComponent {}
		class Scene1 extends ECS.Scene {
			filter(component: ECS.Component): boolean {
				return component instanceof DebugComponent1;
			}
		}
		class Scene2 extends ECS.Scene {
			filter(component: ECS.Component): boolean {
				return component instanceof DebugComponent2;
			}
		}
		const system = new ECS.System();
		const entity = new ECS.Entity(system);
		const component1 = new DebugComponent1(entity);
		const component2 = new DebugComponent2(entity, { hello: component1.someFictionalProperty });
		component1.properties.hello = component2.someFictionalProperty;
		new Scene1(system);
		new Scene2(system);
		expect(system.compose()).rejects.toThrow(errors.CyclicDependencyResolver);
	});

	it("should be able to compose Bidirectional scenes", async () => {
		class Scene1 extends ECS.Scene {
			filter(component: ECS.Component): boolean {
				return (
					component instanceof Component_A ||
					component instanceof Component_B ||
					component instanceof Component_C ||
					component instanceof Component_D ||
					component instanceof Component_E ||
					component instanceof Component_F ||
					component instanceof Component_G ||
					component instanceof Component_H ||
					component instanceof Component_I ||
					component instanceof Component_J
				);
			}
		}

		class Scene2 extends ECS.Scene {
			filter(component: ECS.Component): boolean {
				return (
					component instanceof Component_a ||
					component instanceof Component_b ||
					component instanceof Component_c ||
					component instanceof Component_d ||
					component instanceof Component_e ||
					component instanceof Component_f ||
					component instanceof Component_g ||
					component instanceof Component_h ||
					component instanceof Component_i ||
					component instanceof Component_j
				);
			}
		}

		class Scene3 extends ECS.Scene {
			filter(component: ECS.Component): boolean {
				return (
					component instanceof Component_0 ||
					component instanceof Component_1 ||
					component instanceof Component_2 ||
					component instanceof Component_3 ||
					component instanceof Component_4 ||
					component instanceof Component_5 ||
					component instanceof Component_6 ||
					component instanceof Component_7 ||
					component instanceof Component_8 ||
					component instanceof Component_9
				);
			}
		}

		class Entity_ABC extends ECS.Entity {}
		class Entity_EFGHI extends ECS.Entity {}
		class Entity_bcdef extends ECS.Entity {}
		class Entity_012 extends ECS.Entity {}
		class Entity_789 extends ECS.Entity {}

		class Component_A extends DebugComponent {}
		class Component_B extends DebugComponent {}
		class Component_C extends DebugComponent {}
		class Component_D extends DebugComponent {}
		class Component_E extends DebugComponent {}
		class Component_F extends DebugComponent {}
		class Component_G extends DebugComponent {}
		class Component_H extends DebugComponent {}
		class Component_I extends DebugComponent {}
		class Component_J extends DebugComponent {}

		class Component_a extends DebugComponent {}
		class Component_b extends DebugComponent {}
		class Component_c extends DebugComponent {}
		class Component_d extends DebugComponent {}
		class Component_e extends DebugComponent {}
		class Component_f extends DebugComponent {}
		class Component_g extends DebugComponent {}
		class Component_h extends DebugComponent {}
		class Component_i extends DebugComponent {}
		class Component_j extends DebugComponent {}

		class Component_0 extends DebugComponent {}
		class Component_1 extends DebugComponent {}
		class Component_2 extends DebugComponent {}
		class Component_3 extends DebugComponent {}
		class Component_4 extends DebugComponent {}
		class Component_5 extends DebugComponent {}
		class Component_6 extends DebugComponent {}
		class Component_7 extends DebugComponent {}
		class Component_8 extends DebugComponent {}
		class Component_9 extends DebugComponent {}

		const system = new ECS.System();
		const entity_ABC = new Entity_ABC(system);
		const c_A = new Component_A(entity_ABC);
		const c_C = new Component_C(entity_ABC);
		const c_B = new Component_B(entity_ABC, { hello: c_A.someFictionalProperty, world: c_C.someFictionalProperty });
		new Component_D(system.root);
		const entity_EFGHI = new Entity_EFGHI(system);
		const c_E = new Component_E(entity_EFGHI);
		const c_H = new Component_H(entity_EFGHI);
		const c_I = new Component_I(entity_EFGHI);
		const c_G = new Component_G(entity_EFGHI, { hello: c_I.someFictionalProperty, world: c_H.someFictionalProperty });
		const c_F = new Component_F(entity_EFGHI, { hello: c_E.someFictionalProperty, world: c_G.someFictionalProperty });
		new Component_J(system.root);
		const c_a = new Component_a(system.root);
		const entity_bcdef = new Entity_bcdef(system);
		const c_f = new Component_f(entity_bcdef);
		const c_e = new Component_e(entity_bcdef, { hello: c_f.someFictionalProperty });
		const c_d = new Component_d(entity_bcdef, { hello: c_e.someFictionalProperty });
		const c_c = new Component_c(entity_bcdef, { hello: c_d.someFictionalProperty });
		const c_b = new Component_b(entity_bcdef, { hello: c_c.someFictionalProperty });
		new Component_g(system.root);
		new Component_h(system.root);
		new Component_i(system.root);
		const c_j = new Component_j(system.root);
		const entity_012 = new Entity_012(system);
		const c_1 = new Component_1(entity_012);
		const c_2 = new Component_2(entity_012);
		const c_0 = new Component_0(entity_012, { hello: c_1.someFictionalProperty, world: c_2.someFictionalProperty });
		new Component_3(system.root);
		new Component_4(system.root);
		new Component_5(system.root);
		new Component_6(system.root);
		const entity_789 = new Entity_789(system);
		const c_7 = new Component_7(entity_789);
		const c_8 = new Component_8(entity_789, { hello: c_7.someFictionalProperty });
		const c_9 = new Component_9(entity_789, { hello: c_8.moreFictionalProperty });

		// row 1: A-B-C D E-F-G-H-I J
		//          |       ^
		//          v       |
		// row 2: a b-c-d-e-f g h i j
		//        |                 |
		//        v                 v
		// row 3: 0-1-2 3 4 5 6 7-8-9

		c_B.someFictionalProperty = c_b.moreFictionalProperty;
		c_a.someFictionalProperty = c_0.moreFictionalProperty;
		c_f.moreFictionalProperty = c_F.someFictionalProperty;
		c_j.moreFictionalProperty = c_9.someFictionalProperty;

		const scene1 = new Scene1(system);
		const scene2 = new Scene2(system);
		const scene3 = new Scene3(system);

		const composition = await system.compose();
		const expected = [
			{
				Components: [
					{ properties: { hello: '@@{Entity_789/Component_83["moreFictionalProperty"]}@@' } },
					{ properties: { hello: '@@{Entity_789/Component_73["someFictionalProperty"]}@@' } },
					{ properties: {} },
					{ properties: {} },
					{ properties: {} },
					{ properties: {} },
					{ properties: {} },
				],
			},
			{
				Components: [
					{ properties: {} },
					{ properties: {} },
					{ properties: {} },
					{ properties: {}, moreFictionalProperty: '@@{Entity_789/Component_93["someFictionalProperty"]}@@' },
				],
			},
			{
				Components: [
					{
						properties: {
							hello: '@@{Entity_012/Component_13["someFictionalProperty"]}@@',
							world: '@@{Entity_012/Component_23["someFictionalProperty"]}@@',
						},
					},
					{ properties: {} },
					{ properties: {} },
				],
			},
			{
				Components: [
					{ properties: {}, someFictionalProperty: '@@{Entity_012/Component_03["moreFictionalProperty"]}@@' },
				],
			},
			{
				Components: [
					{
						properties: {
							hello: '@@{Entity_EFGHI/Component_E5["someFictionalProperty"]}@@',
							world: '@@{Entity_EFGHI/Component_G5["someFictionalProperty"]}@@',
						},
					},
					{ properties: {} },
					{
						properties: {
							hello: '@@{Entity_EFGHI/Component_I5["someFictionalProperty"]}@@',
							world: '@@{Entity_EFGHI/Component_H5["someFictionalProperty"]}@@',
						},
					},
					{ properties: {} },
					{ properties: {} },
				],
			},
			{
				Components: [
					{ properties: { hello: '@@{Entity_bcdef/Component_c5["someFictionalProperty"]}@@' } },
					{ properties: { hello: '@@{Entity_bcdef/Component_d5["someFictionalProperty"]}@@' } },
					{ properties: { hello: '@@{Entity_bcdef/Component_e5["someFictionalProperty"]}@@' } },
					{ properties: { hello: '@@{Entity_bcdef/Component_f5["someFictionalProperty"]}@@' } },
					{ properties: {}, moreFictionalProperty: '@@{Entity_EFGHI/Component_F5["someFictionalProperty"]}@@' },
				],
			},
			{
				Components: [
					{ properties: {} },
					{ properties: {} },
					{ properties: {} },
					{ properties: {} },
					{
						properties: {
							hello: '@@{Entity_ABC/Component_A3["someFictionalProperty"]}@@',
							world: '@@{Entity_ABC/Component_C3["someFictionalProperty"]}@@',
						},
						someFictionalProperty: '@@{Entity_bcdef/Component_b5["moreFictionalProperty"]}@@',
					},
				],
			},
		];
		expect(composition.scenes).toEqual([scene3, scene2, scene1]);
		expect(composition.gizmos()).toEqual(expected);
	});
});
