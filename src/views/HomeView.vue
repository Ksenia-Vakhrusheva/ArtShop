<template>
  <section>
    <appContant id="home"></appContant>
    <appShop id="shop"></appShop>
    <!-- <appContact id="contact"></appContact> -->
  </section>
</template>

<script>
// @ is an alias to /src

import appContant from '../components/Contants.vue'
import appShop from '../components/Shop.vue'
// import appContact from '../components/Contact.vue'


export default {
  name: 'HomeView',
  components: {
    appContant,
    appShop,
    
  }
}
</script>
