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

	describe("Make constructor tests", () => {
		it("should resolve to the same token if there is no resolver", async () => {
			const token = new Token({ name: () => "sample usage" });
			const resolved = await token.resolver();
			expect(resolved).toBe(token);
		});
		it("should resolve to the concrete value if resolver exists", async () => {
			const token = new Token({ name: "hello", resolver: () => "world" });
			const resolved = await token.resolver();
			expect(resolved).toBe("world");
		});
		it("should resolve recursively when a child token is resolved", async () => {
			type ComplexType = { nested: string };
			const token = new Token({ resolver: (): ComplexType => ({ nested: "value" }) });
			const nested = (token as unknown as ComplexType).nested;
			expect(nested).toBeInstanceOf(Token);
			const resolved = await (nested as unknown as Token).resolver();
			expect(resolved).toBe("value");
		});
	});

	describe("Wrap constructor tests", () => {
		it("should produce tokens when typed accesses are undefined", async () => {
			type ComplexType = { nested?: string; required: number; deep: { nested: string; arr: number[] } };
			const token = new Token({
				wrap: { required: 235, deep: { nested: "example", arr: [1, 2, 3] } },
			}) as any as ComplexType;
			expect(token.required).toBe(235);
			expect(token.deep.nested).toBe("example");
			expect(token.deep.arr[0]).toBe(1);
			expect(token.deep.arr[1]).toBe(2);
			expect(token.deep.arr[2]).toBe(3);
			const nested = token.nested;
			expect(nested).toBeInstanceOf(Token);
			const resolved = await (nested as unknown as Token).resolver();
			expect(resolved).toBe(nested);
		});
	});

	describe("Token.PraseNames tests", () => {
		it("should parse if the whole string is the token itself", () => {
			const token = new Token({ name: "hello" });
			const parsed = Token.ParseNames(token.toString());
			expect(parsed.values().next().value).toBe(token.name());
		});
		it("should parse if tokens are embedded inside the string", () => {
			const token1 = new Token({ name: "token1" });
			const token2 = new Token({ name: () => "token2" });
			const token3 = new Token();
			const combined = `this is ${token1} combined with ${token2} and ${token3} in a string.`;
			const parsed = Token.ParseNames(combined);
			expect(parsed.size).toBe(3);
			expect(parsed.has(token1.name())).toBe(true);
			expect(parsed.has(token2.name())).toBe(true);
			expect(parsed.has(token3.name())).toBe(true);
		});
	});
});
