import { Resolver } from "@zorse/adk/core";

describe("Dependency Resolver tests", () => {
	it("should throw trying to add circular dependencies", () => {
		const resolver = new Resolver();
		resolver.addDependency("1", "2");
		resolver.addDependency("2", "3");
		expect(() => resolver.addDependency("3", "1")).toThrow();
	});
	it("should resolve dependencies", () => {
		const resolver = new Resolver();

		const _1A = "1A";
		resolver.addIsolated("1A");
		const _1B = "1B";
		resolver.addIsolated("1B");
		const _1C = "1C";
		resolver.addIsolated("1C");
		const _1D = "1D";
		resolver.addIsolated("1D");
		const _1E = "1E";
		resolver.addIsolated("1E");
		const _1F = "1F";
		resolver.addIsolated("1F");
		const _1G = "1G";
		resolver.addIsolated("1G");
		const _1H = "1H";
		resolver.addIsolated("1H");
		const _1I = "1I";
		resolver.addIsolated("1I");
		const _1J = "1J";
		resolver.addIsolated("1J");

		const _2a = "2a";
		resolver.addIsolated("2a");
		const _2b = "2b";
		resolver.addIsolated("2b");
		const _2c = "2c";
		resolver.addIsolated("2c");
		const _2d = "2d";
		resolver.addIsolated("2d");
		const _2e = "2e";
		resolver.addIsolated("2e");
		const _2f = "2f";
		resolver.addIsolated("2f");
		const _2g = "2g";
		resolver.addIsolated("2g");
		const _2h = "2h";
		resolver.addIsolated("2h");
		const _2i = "2i";
		resolver.addIsolated("2i");
		const _2j = "2j";
		resolver.addIsolated("2j");

		const _30 = "30";
		resolver.addIsolated("30");
		const _31 = "31";
		resolver.addIsolated("31");
		const _32 = "32";
		resolver.addIsolated("32");
		const _33 = "33";
		resolver.addIsolated("33");
		const _34 = "34";
		resolver.addIsolated("34");
		const _35 = "35";
		resolver.addIsolated("35");
		const _36 = "36";
		resolver.addIsolated("36");
		const _37 = "37";
		resolver.addIsolated("37");
		const _38 = "38";
		resolver.addIsolated("38");
		const _39 = "39";
		resolver.addIsolated("39");

		// row 1: A-B-C D E-F-G-H-I J
		//          |       ^
		//          v       |
		// row 2: a b-c-d-e-f g h i j
		//        |                 |
		//        v                 v
		// row 3: 0-1-2 3 4 5 6 7-8-9

		resolver.addDependency(_1A, _1B);
		resolver.addDependency(_1B, _1C);
		resolver.addDependency(_1F, _1E);
		resolver.addDependency(_1F, _1G);
		resolver.addDependency(_1G, _1H);
		resolver.addDependency(_1H, _1I);

		resolver.addDependency(_2b, _2c);
		resolver.addDependency(_2c, _2d);
		resolver.addDependency(_2d, _2e);
		resolver.addDependency(_2e, _2f);

		resolver.addDependency(_30, _31);
		resolver.addDependency(_31, _32);
		resolver.addDependency(_39, _38);
		resolver.addDependency(_38, _37);

		resolver.addDependency(_1B, _2b);
		resolver.addDependency(_2a, _30);
		resolver.addDependency(_2f, _1F);
		resolver.addDependency(_2j, _39);

		const result = resolver.resolve();
		expect(result).toEqual([
			["1A", "1B", "1C", "2b", "2c", "2d", "2e", "2f", "1F", "1E", "1G", "1H", "1I"],
			["1D"],
			["1J"],
			["2a", "30", "31", "32"],
			["2g"],
			["2h"],
			["2i"],
			["2j", "39", "38", "37"],
			["33"],
			["34"],
			["35"],
			["36"],
		]);
	});
});
