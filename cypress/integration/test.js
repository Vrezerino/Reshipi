describe('Farm CSV database', () => {
	it('Front page can be opened', () => {
		cy.visit('http://localhost:3003');

		cy.contains('Retsipi');
		cy.contains('Find delicious recipes and filter with name and/or ingredients.');
	});

	it('Meals can be searched', () => {
		cy.get('input[id="mealNameSearch"]').type('apple fr');
		cy.contains('Apple Frangipan Tart');
	});

	it('Meals can be filtered by ingredient', () => {
		cy.get('input[id="ingSearch"]').type('lemon');
		cy.get('.ingredientBtn').click();
		cy.contains('Salmon Prawn Risotto');
	});
});