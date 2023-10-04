<template>
  <section>
    <div class="container-fluid p-5">
      <div class="row">
        <div class="col-12">
          <h1>Shop</h1>
        </div>

        <!-- Cards Loop -->
        <div v-for="card in productStore.products" :key="card.id" class="col-md-4 mt-4">
          <div class="card h-100">
            <img :src= card.myimg class="card-img-top img-fluid" alt="Card Photo">
            <div class="card-body">
              <h5 class="card-title">{{ card.productName }}</h5>
              <p class="card-text">{{ card.productDescription }}</p>
            </div>
            <!-- <div class="card-footer">
              <p class="card-price">${{ card.price }}</p>
              <router-link :to="`/card-description/${card.id}`" target="_blank" class="btn btn-dark m-1">Read more</router-link>
              <button @click.prevent="addCart(card.id)" class="btn btn-dark m-1">Add to Cart</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useProductStore } from '../stores/product.js';
// import { useCartStore } from '../store/cart.js';
import { onMounted } from 'vue';
export default {
  setup() {
    const productStore = useProductStore();
    // const cartStore = useCartStore();

    // const addCart = async (productID) => {
    //   try {
    //     await cartStore.addToCart(productID);
    //     console.log('added');
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // }

    // Product data will be populated after the component is mounted
    const productData = productStore.products;

    // Fetch products from Firestore when the component is mounted
    onMounted(async () => {
      await productStore.fetchProducts();
    });

    return {
      productStore,
      productData,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 45px;
}

/* Style for the paragraph */
p {
  font-size: 20px;
}

/* Style for the image */
</style>
