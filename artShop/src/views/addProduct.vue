<template>
    <section>
      <div class="container-fluid mt-5 mb-5 p-3">
        <br>
        <h2>Add Products</h2>
        <hr>
  
        <form autocomplete="off" class="form-group p-2">
          <label for="productName">Product Name</label>
          <br>
          <input type="text" v-model="productName" class="form-control" required/>
          <br>
          <label for="productDescription">Product description</label>
          <br>
          <input type="text" v-model="productDescription" class="form-control" required/>
          <br>
          <label for="productPrice">Product Price</label>
          <br>
          <input type="Number" v-model="price" class="form-control" required/>
          <br>
          <label for="upload">Upload file</label>
          <br>
          <input type="file" @change="productImgHandler" required/>
          
          <!-- Disable the button when there are empty fields or image type is not correct -->
          <button @click.prevent="productToFirebase" class="btn btn-success btn-md" :disabled="!isFormValid">Add</button>
        </form>
        <div v-show="error" style="color: red" class="error">{{ errorMsg }}</div> <!-- Removed "this" from errorMsg -->
      </div>
    </section>
  </template>
  
  <script>
  import db from '../firebase/firebaseInt'
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

  const storage = getStorage(db);
  export default {
    data() {
      return {
        productName: '',
        productDescription: '',
        price: null,
        myimg: null,
        error: false, // Updated to use a boolean for error state
        errorMsg: "",
        types: ['image/png', 'image/jpeg']
      }
    },
    computed: {
      isFormValid() {
        return (
          this.productName &&
          this.productDescription &&
          this.price &&
          this.myimg &&
          this.types.includes(this.myimg.type)
        );
      },
    },
    methods: {
      productImgHandler(e) {
        let selectedFile = e.target.files[0];
        if (selectedFile && this.types.includes(selectedFile.type)) {
          this.myimg = selectedFile;
          this.setError(''); // Updated to use setError method
        } else {
          this.myimg = null;
          this.setError('Please select a valid image type (jpg or png)'); // Updated to use setError method
        }
      },
      async addProduct(productData) {
        try {
          // Create a reference to the Firebase Storage location
        const storageRef = ref(storage, `product-images/${this.myimg.name}`);

          // Upload the image to Firebase Storage
          await uploadBytes(storageRef, this.myimg);

          // Get the download URL of the uploaded image
          const imageUrl = await getDownloadURL(storageRef);
          // Assuming db.collection('products') is your Firestore collection
          const dataProdcut = await db.firestore().collection('product').doc()
          await dataProdcut.set({
            myimg: imageUrl,
            price: this.price,
            productDescription: this.productDescription,
            productName: this.productName
          });
          console.log('Product added with ID: ', dataProdcut.id, imageUrl);
        } catch (error) {
          throw new Error('Error adding product: ' + error.message);
        }
      },
      async productToFirebase() {
      if (this.isFormValid) {
        try {
          const productData = {
            myimg: this.myimg,
            price: this.price,
            productDescription: this.productDescription,
            productName: this.productName,
            
          };
          // Call your addProduct method using this
          await this.addProduct(productData); // Use "this" to call the addProduct method
          // Clear form fields and errors if successful
          this.productName = '';
          this.productDescription = '';
          this.price = null;
          this.myimg = null;
          this.setError('');
        } catch (error) {
          this.setError(error.message);
        }
      } else {
        this.setError('Please fill out all fields correctly.');
      }
},

      setError(message) {
        this.errorMsg = message;
        this.error = message.length > 0;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  