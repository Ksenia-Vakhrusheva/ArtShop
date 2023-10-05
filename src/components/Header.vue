<template>
  
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <h1><a class="navbar-brand display-1" href="#home">Gussi Shop</a></h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav"> <!-- Keep this ul element separate for Contact us -->
            <li class="nav-item">
              <a class="nav-link " href="#shop"> Товары</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#footer">О нас</a>
            </li>
            <li class="nav-item" >
              <router-link class="nav-link " v-if="userStore.isLoggedIn == false" :to="{ name: 'Login' }">LogIn/Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " v-if ="userStore.email == 'magicaksu.f3@gmail.com'" :to="{ name: 'addProduct' }">AddProduct</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " v-if ="userStore.email == 'magicaksu.f3@gmail.com'" :to="{ name: 'deleteProduct' }">RemoveProduct</router-link>
            </li>

            <li class="nav-item text-white" v-show="userStore.isLoggedIn">
              <a class="nav-link" @click.prevent="logOut">Log out</a>
            </li>
              
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>

// import { useCartStore } from '../store/cart.js';
import { useUserStore } from '../stores/user.js';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
export default{
    setup(){
      const userStore = useUserStore();
      const logOut = ()=> firebase.auth().signOut();
       return{
        userStore,
        logOut
        
        
       }
    },
    
}
    
</script>

<style scoped>

/* Custom CSS to right-align Contact us */
.navbar-nav:last-child {
  margin-left: auto;
}
body {
  background: black;
}

.cart {
  position: relative;
  display: block;
  width: 28px;
  height: 28px;
  height: auto;
  overflow: hidden;
}
  .material-icons {
    position: relative;
    top: 4px;
    z-index: 1;
    font-size: 24px;
    color: white;
  }
  .count {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    font-size: 11px;
    border-radius: 50%;
    background: #d60b28;
    width: 16px;
    height: 16px;
    line-height:16px;
    display: block;
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

</style>
