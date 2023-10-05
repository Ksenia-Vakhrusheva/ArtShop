<template>
            <footer class="bg-dark text-light text-md-left " id="footer">
            <div class="container">
                <div class="row pt-4">
                    <div class="col-sm-6 col-md-3 ">
                        <h4 class="mb-4 text-left">
                            Services
                        </h4>
                        <p class="text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, veritatis? Adipisci nisi recusandae, dicta sit eos quam. Quos dolores nemo quo eveniet, quod
                        </p>
                    </div>
                    
                    <div class="col-md-6 text-center">
                        <h4 class="mb-4">
                            Hand Craft Shop
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt at? Est veniam ea deleniti ad recusandae
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <h4 class="mb-4">
                            About
                        </h4>
                        <ul class="list-inline d-flex justify-content-between align-items-end">
                            <li>
                                <a href="#shop" class="text-light list-inline-item">Shop</a>
                            </li>
                            <li>
                                <a href="#contact" class="text-light list-inline-item">Contact</a>
                            </li>
                            <li>
                                <a href="#cart" class="text-light list-inline-item">Cart</a>
                            </li>
                            <li class="list-inline-item ">
                            <router-link class="nav-link" :to="{ name: 'Login' }"><u>LogIn/Register</u></router-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>