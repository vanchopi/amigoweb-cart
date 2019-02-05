/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "book", "price": 10.00, "inventory": 15},
  {"id": 2, "title": "T-Shirt", "price": 10.99, "inventory": 11},
  {"id": 3, "title": "Chair", "price": 19.99, "inventory": 5},
  {"id": 4, "title": "Pen", "price": 0.1, "inventory": 5}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 1000)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
