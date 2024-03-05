<template>
  <div class="home min-h-screen flex items-center justify-center">
    <div class="card max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center">
        Welcome to Our Store
      </h1>
      <p class="text-lg text-gray-600 mb-8 text-center">Explore our amazing products and services.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-500 text-white p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">
            <NuxtLink to="/login" >Shop with us</NuxtLink>
          </h2>
          <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="bg-green-500 text-white p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">
            <NuxtLink to="/signup" >Explore Our Products</NuxtLink></h2>
          <p class="text-lg">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.home {
  background: url(https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg?w=1480&t=st=1709641771~exp=1709642371~hmac=ae1aca3dbe2a0e3479de17d0d01c31e68a23167468ccc9d24168e82ec260211f);
}
.card {
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
