<template>
  <div class="card text-center">
    <img :src="product.images[0]" alt="product" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`" >
      <p class="btn my-4 ">View details</p>
    </NuxtLink>

  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
.btn {
  transition: all 0.4s ease-in;
}
.btn:hover{
  background-color: #0e7490;
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