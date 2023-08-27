export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId("EditableProfileCardHeader.EditButton").click();
    cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
    cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
    cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: "PUT",
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: "asda" },
        body: {
            id: "3",
            first: "vanya",
            lastname: "vanya",
            age: 21,
            currency: "RUB",
            country: "Armenia",
            city: "dA",
            username: "users",
            avatar: "",
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
