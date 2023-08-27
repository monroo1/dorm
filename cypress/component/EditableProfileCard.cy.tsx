import { EditableProfileCard } from "../../src/features/editableProfileCard";
import { TestProvider } from "../../src/shared/lib/tests/componentRender/componentRender";

describe("EditableProfileCard.cy.tsx", () => {
	it("playground", () => {
		cy.intercept("GET", "**/profile/*", { fixture: "profile.json" });
		cy.mount(
			<TestProvider
				options={{
					initialState: {
						user: {
							authData: {
								id: "3",
							},
						},
					},
				}}
			>
				<EditableProfileCard id="3" />
			</TestProvider>,
		);
	});
});
