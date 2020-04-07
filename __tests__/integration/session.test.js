// para executar o teste, basta digitar "yarn test" (no package.json foi criado um script "test" ao instalar o jest)

describe("Authentication", () => {
    it("should sum two numbes", () => {
        const x = 2;
        const y = 4;

        const sum = x + y;
        
        expect(sum).toBe(6);

    });
    // it('should receive JWT token when authenticated with valid credentials', () => {})
});
