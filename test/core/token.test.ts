import { Token } from "@zorse/adk/core";

describe("Token-Tech tests", () => {
	describe("Token.IsToken tests", () => {
		it("should return true if not serialized", () => {
			const token = new Token();
			expect(Token.IsToken(token)).toBe(true);
		});
		it("should return true if serialized", () => {
			const token = new Token();
			expect(Token.IsToken(token.toString())).toBe(true);
			const hello = `${token}`;
			expect(Token.IsToken(`${token}`)).toBe(true);
		});
		it("should return false for non tokens", () => {
			expect(Token.IsToken({})).toBe(false);
			expect(Token.IsToken("")).toBe(false);
			expect(Token.IsToken(235)).toBe(false);
		});
	});

	describe("Token general tests", () => {
		it("should resolve to the same token if there is no resolver", async () => {
			const token = new Token({ name: "sample usage" });
			const resolved = await token.resolve();
			expect(resolved).toBe(token);
		});
		it("should resolve to the concrete value if resolver exists", async () => {
			const token = new Token({ name: "hello", resolver: () => "world" });
			const resolved = await token.resolve();
			expect(resolved).toBe("world");
		});
		it("should resolve recursively when a child token is resolved", async () => {
			type ComplexType = { nested: string };
			const token = new Token({ resolver: (): ComplexType => ({ nested: "value" }) });
			const nested = (token as unknown as ComplexType).nested;
			expect(nested).toBeInstanceOf(Token);
			const resolved = await (nested as unknown as Token).resolve();
			expect(resolved).toBe("value");
		});
	});

	describe("Token.Wrap tests", () => {
		it("should produce tokens when typed accesses are undefined", async () => {
			type ComplexType = { nested?: string; required: number; deep: { nested: string; arr: number[] } };
			const token = Token.Wrap({
				required: 235,
				deep: { nested: "example", arr: [1, 2, 3] },
			}) as any as ComplexType;
			expect(token.required).toBe(235);
			expect(token.deep.nested).toBe("example");
			expect(token.deep.arr[0]).toBe(1);
			expect(token.deep.arr[1]).toBe(2);
			expect(token.deep.arr[2]).toBe(3);
			const nested = token.nested;
			expect(nested).toBeInstanceOf(Token);
			const resolved = await (nested as unknown as Token).resolve();
			expect(resolved).toBe(nested);
		});
	});

	describe("Token.Registry resolve tests", () => {
		it("should resolve when the entire string is Token's serialized name", async () => {
			const registry = new Token.Registry();
			const expected = { some: "data" };
			const token = new Token({ registry: registry, resolver: () => expected });
			const resolved = await registry.resolve(`${token}`);
			expect(resolved).toBe(expected);
		});
		it("should resolve when nested in a string", async () => {
			const registry = new Token.Registry();
			const expected = { some: "data" };
			const token = new Token({ registry: registry, resolver: () => expected });
			const resolved = await registry.resolve(`some string: ${token}`);
			expect(resolved).toBe("some string: [object Object]");
		});
		it("should resolve Tokens it does not recognize as-is", async () => {
			const registry = new Token.Registry();
			const expected = { some: "data" };
			const token = new Token({ resolver: () => expected });
			const resolved = await registry.resolve(`${token}`);
			expect(resolved).toBe(token.serialize());
		});
		it("should be able to handle embedded tokens in strings", async () => {
			const registry = new Token.Registry();
			const token1 = new Token({ registry, resolver: () => "part1", name: "token1" });
			const token2 = new Token({ registry, resolver: () => "part2", name: "token2" });
			const combined = `${token1} ${token2}`;
			const tokens = registry.parse(combined);
			expect(tokens).toEqual([token1, token2]);
			const resolved = await registry.resolve(combined);
			expect(resolved).toBe("part1 part2");
		});
		it("should be root of itself at root level", () => {
			const token = new Token();
			expect(token.root).toBe(token);
		});
	});
});
