<template>
    <section>
      <div class="container-fluid mt-5 mb-5 p-3">
        <h2>Product List</h2>
        <hr>
  
        <!-- Display the list of products -->
        <ul>
          <li v-for="(product) in products" :key="product.id">
            <div>
              <strong>{{ product.productName }}</strong> - {{ product.productDescription }} - ${{ product.price }}
            </div>
            <button @click="deleteProduct(product.id)">Delete</button>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  import db from '../firebase/firebaseInt';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    created() {
      // Fetch the list of products from Firestore
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const querySnapshot = await db.firestore().collection('product').get();
          const products = [];
          querySnapshot.forEach((doc) => {
            const product = doc.data();
            product.id = doc.id;
            products.push(product);
          });
          this.products = products;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      async deleteProduct(productId) {
        try {
          await db.firestore().collection('product').doc(productId).delete();
          // Remove the deleted product from the local list
          this.products = this.products.filter((product) => product.id !== productId);
          console.log('Product deleted:', productId);
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  