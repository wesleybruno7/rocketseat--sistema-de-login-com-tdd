// para executar o teste, basta digitar "yarn test" (no package.json foi criado um script "test" ao instalar o jest)

const { User } = require('../../src/app/models')

describe("Authentication", () => {
    it("should sum two numbes", async () => {
        const user = await User.create({
            name: "Wesley B. Fernandes",
            email: "wbf@test.com.br",
            password_hash: "123123"
        })

        console.log(user)

        expect(user.email).toBe('wbf@test.com.br')

    })
    // it('should receive JWT token when authenticated with valid credentials', () => {})
})
