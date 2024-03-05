<template>
  <nav class="container mx-auto p-4 flex justify-between">
    <NuxtLink to="/" class="font-bold text-xl">Store</NuxtLink>
    <ul class="flex gap-4">
      <!-- <p>{{ auth.isAuthenticated }}</p> -->
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <!-- <p>Total Route Changed: {{ pageVisitCount }}</p> -->
      <div class="flex gap-6" v-if="auth.isAuthenticated" >
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        <li><NuxtLink to="/products" class="btn">Cart ({{ cart.length }})</NuxtLink></li>
        <!-- <li><button @click="logout">Log Out</button></li> -->
        <li><NuxtLink to="/profile">Profile</NuxtLink></li>
      </div>
      <div class="flex gap-6" v-else>
        <li><NuxtLink to="/login" >Log In</NuxtLink></li>
        <li><NuxtLink to="/signup" >Sign Up</NuxtLink></li>
        <li><NuxtLink to="/products/abc">Error page</NuxtLink></li>
      </div>
    </ul>
  </nav>
</template>

<script setup>
const cart = useCart();
const auth = useAuth();

const pageVisitCount = usePageVisitCount();

// const logout = () => {
//   auth.value.isAuthenticated = false;
// }

</script>