
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
import { useUserStore } from './stores/user.js';
import firebase from "firebase/compat/app";
import "firebase/compat/auth" 
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
  created() {
    const userStore = useUserStore();
   
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Update user store with user information
        userStore.id = user.uid;
        userStore.email = user.email;
        userStore.isLoggedIn = true;
        // console.log(userStore.isLoggedIn)
      } else {
        // Clear user store if not logged in
        userStore.id = '';
        userStore.email = '';
        userStore.isLoggedIn = false;
      }
    });
  },
}
</script>


<style scoped>

</style>
