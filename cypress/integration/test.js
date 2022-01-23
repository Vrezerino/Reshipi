describe('Farm CSV database', () => {
	it('Front page can be opened', () => {
		cy.visit('http://localhost:3006');

		cy.contains('Retsipi');
		cy.contains('Find delicious recipes and filter with name and/or ingredients.');
	});
});