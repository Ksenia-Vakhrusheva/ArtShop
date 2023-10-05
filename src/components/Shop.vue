<template>
  <section class="mb-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- Navbar -->
          <h1 class="m-4">Товары</h1>
          <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div class="container-fluid">
              <!-- <a class="navbar-brand" href="#shop">Shop</a> -->
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#"
                      @click.prevent="setCategory('all')"
                      :class="{ active: activeCategory === 'all' }"
                    >
                    Все товары
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#"
                      @click.prevent="setCategory('paintings')"
                      :class="{ active: activeCategory === 'paintings' }"
                    >
                      Картины
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#"
                      @click.prevent="setCategory('furniture')"
                      :class="{ active: activeCategory === 'furniture' }"
                    >
                      Мебель
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- End Navbar -->

          
        </div>

        <!-- Cards Loop -->
        <div v-for="card in filteredProducts" :key="card.id" class="col-md-4 mt-4">
        <div class="card h-100">
        <div class="card-img-wrapper">
          <img :src="card.myimg" class="card-img-top img-fluid card-img-custom" alt="Card Photo">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ card.productName }}</h5>
          <p class="card-text">{{ card.productDescription }}</p>
        </div>
        <div class="card-footer">
          <p class="card-price text-center ">₽{{ card.price }}</p>
          <!-- <router-link :to="`/card-description/${card.id}`" target="_blank" class="btn btn-dark m-1">Read more</router-link>
          <button @click.prevent="addCart(card.id)" class="btn btn-dark m-1">Add to Cart</button> -->
        </div>
      </div>
    </div>

      
      </div>
    </div>
  </section>
</template>

<script>
import { useProductStore } from '../stores/product.js';
import { computed, onMounted, ref } from 'vue';

export default {
  setup() {
    const productStore = useProductStore();
    const activeCategory = ref('all');

    const setCategory = (category) => {
      activeCategory.value = category;
    };

    // Fetch products from Firestore when the component is mounted
    onMounted(async () => {
      await productStore.fetchProducts();
    });

    const filteredProducts = computed(() => {
      if (activeCategory.value === 'all') {
        return productStore.products;
      }
      return productStore.products.filter((product) => product.selectedCategory === activeCategory.value);
    });

    return {
      activeCategory,
      setCategory,
      filteredProducts,
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
.card-img-custom {
  height: 500px; /* Adjust the height as needed */
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}
/* Style for the image */
</style>
