<template>
  <section>
    <div class="container-fluid mt-5 mb-5 p-3">
      <br>
      <h2>Add Products</h2>
      <hr>

      <form autocomplete="off" class="form-group p-2">
        <label for="category">Category</label>
        <br>
        <select v-model="selectedCategory" class="form-control" required>
          <option value="paintings">Paintings</option>
          <option value="furniture">Furniture</option>
        </select>
        <br>
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
        <input type="file" @change.prevent="productImgHandler" required/>
        
        <!-- Disable the button when there are empty fields or image type is not correct -->
        <button @click.prevent="productToFirebase" class="btn btn-success btn-md" :disabled="!isFormValid">Add</button>
      </form>
      <div v-show="error" style="color: red" class="error">{{ errorMsg }}</div> <!-- Removed "this" from errorMsg -->
    </div>
  </section>
</template>

<script>
import db from '../firebase/firebaseInt';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(db);

export default {
  data() {
    return {
      selectedCategory: '', // Default category value
      productName: '',
      productDescription: '',
      price: null,
      myimg: null,
      error: false,
      errorMsg: '',
      types: ['image/png', 'image/jpeg'],
    };
  },
  computed: {
    isFormValid() {
      return (
        this.selectedCategory &&
        this.productName &&
        this.productDescription &&
        this.price !== null && // Check if price is not null
        this.myimg !== null && // Check if myimg is not null
        this.types.includes(this.myimg.type)
      );
    },
  },
  methods: {
    async productImgHandler(e) {
      let selectedFile = e.target.files[0];
      if (selectedFile && this.types.includes(selectedFile.type)) {
        this.myimg = selectedFile;
        this.setError(''); // Clear error message
      } else {
        this.myimg = null;
        this.setError('Please select a valid image type (jpg or png)');
      }
    },

    async addProduct() {
      try {
        if (!this.myimg) {
          throw new Error('Image not selected');
        }
        const storageRef = ref(storage, `product-images/${this.myimg.name}`);
        await uploadBytes(storageRef, this.myimg);
        const imageUrl = await getDownloadURL(storageRef);

        const dataProduct = await db.firestore().collection('product').doc();
        await dataProduct.set({
          selectedCategory: this.selectedCategory,
          myimg: imageUrl,
          price: this.price,
          productDescription: this.productDescription,
          productName: this.productName,
        });
        console.log('Product added with ID: ', dataProduct.id, imageUrl);
      } catch (error) {
        throw new Error('Error adding product: ' + error.message);
      }
    },

    async productToFirebase() {
      if (this.isFormValid) {
        try {
          const productData = {
            selectedCategory: this.selectedCategory,
            myimg: this.myimg,
            price: this.price,
            productDescription: this.productDescription,
            productName: this.productName,
          };
          await this.addProduct(productData);
          this.productName = '';
          this.productDescription = '';
          this.price = null;
          this.myimg = null;
          this.selectedCategory = ''; // Reset the category after submission
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
  