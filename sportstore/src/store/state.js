const datas = []
for (let i = 1; i <= 10; i++) {
  datas.push({ id: i, name: `Product: #${i}`, category: `Category: #${Math.floor(Math.random() * 10 + 1)}`, description: `Protective and fashionable`, price: i * 50 })
}
export const state = {
  products: datas,
  rowsPerPage: 5,
  currentPage: 1,
  currentCategory: 'all'
}
