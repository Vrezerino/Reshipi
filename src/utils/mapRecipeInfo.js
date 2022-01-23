export const mapRecipeInfo = (object, item) => {
	return Object.keys(object).flatMap((key) =>
		key.includes(item) && object[key] && object[key] !== ' ' // Denotation of empty item varies from meal to meal
			? object[key]
			: []);
};