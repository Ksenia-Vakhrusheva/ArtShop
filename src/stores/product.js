// product.js
import { defineStore } from 'pinia';
import  db  from '../firebase/firebaseInt';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
  actions: {
    
    async fetchProducts() {
      try {
        const snapshot = await db.firestore().collection('product').get();
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        this.products = products;
        // console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
});
