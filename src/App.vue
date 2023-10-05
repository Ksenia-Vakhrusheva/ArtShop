
<template>
  <section>
    <appHead v-if="showHeader"></appHead>
    <RouterView />
    <appFoot v-if="showFooter"></appFoot>
  </section>
 
</template>



<script>
import appHead from './components/Header.vue';
import appFoot from './components/footer.vue';
export default{
  components: {
    appHead,
    appFoot,
  },
  computed: {
    showHeader() {
      return !this.isSpecialRoute();
    },
    showFooter() {
      return !this.isSpecialRoute();
    },
  },
  methods: {
    isSpecialRoute() {
      const specialRoutes = ['Login', 'Register', 'Not_Found'];
      return specialRoutes.includes(this.$route.name);
    },
  },
  watch: {
    $route() {
      this.showHeader = !this.isSpecialRoute();
      this.showFooter = !this.isSpecialRoute();
    },
  },
}
</script>


<style scoped>

</style>
