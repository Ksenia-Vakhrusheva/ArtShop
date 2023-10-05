<template>
  <section>
    <div class="container-fluid p-5">
      <div class="row">
        <!-- Left Column -->
        <div class="col-md-7 col-12 mt-5">
          <h1 class="text-white">Title</h1>
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante at ex eleifend, id efficitur sapien facilisis. Vestibulum ut arcu a libero consequat dignissim. Fusce in arcu nec metus aliquam feugiat.
          </p>
        </div>

        <!-- Right Column -->
        <!-- <div class="col-5  mt-4 ">
          <img src="../assets/one.jpg" alt="Image" class="img-fluid"   />
        </div> -->
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  // Your component logic here
};
</script>

<style scoped>
.container-fluid {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('../assets/back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: brightness(80%);
  /* background-color: #3B5D50; */
  opacity: 90%;

 
  
}

/* Style for the content on the left-bottom corner */

/* Style for the title */
h1 {
  font-size: 45px;
}

/* Style for the paragraph */
p {
  font-size: 20px;
}

/* Style for the image */

</style>
