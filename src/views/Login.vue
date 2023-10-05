<template>
    <section class="vh-100 bg-image">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card shadow-lg rounded-3">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-4">Login to Your Account</h2>
  
                  <form @submit.prevent="login">
                    <div class="mb-4">
                      <label for="email" class="form-label">Your Email</label>
                      <input type="email" id="email" class="form-control form-control-lg" placeholder="Your Email" v-model="email" required />
                    </div>
  
                    <div class="mb-4">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" id="password" class="form-control form-control-lg" placeholder="Password" v-model="password" required />
                    </div>
  
                    <div v-show="error" class="error">{{ errorMsg }}</div>
  
                    <div class="d-grid">
                      <button type="submit" class="btn btn-primary btn-lg btn-block gradient-custom-4">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  
  import firebase from "firebase/compat/app";
  import "firebase/compat/auth"
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        error: false,
        errorMsg: "",
      };
    },
    methods: {
          login(){
          firebase.auth()
          .signInWithEmailAndPassword(this.email,this.password)
          .then(()=>{
           
            this.$router.push({name:"home"});
            this.error = false;
            this.errorMsg="";
          

          })
          .catch((err)=>{
            this.error= true;
            this.errorMsg= err.message;
          });
        },
      },
    };
  </script>
  
  <style scoped>
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  