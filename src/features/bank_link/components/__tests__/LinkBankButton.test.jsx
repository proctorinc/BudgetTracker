import LinkBankButton from "../LinkBankButton"

describe("Link bank button", () => {
    test("button renders on screen", () => {
        render(<LinkBankButton />)

        const linkBankButton = screen.getByRole("button")

        expect(linkBankButton).
    })
})