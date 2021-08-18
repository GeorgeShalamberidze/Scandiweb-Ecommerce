export const categoriesQuery = `
query {
	categories {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
      brand
    }
  }
}
`;

export const currenciesQuery = `
query {
  currencies
}
`;
