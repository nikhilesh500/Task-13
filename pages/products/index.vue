<template>
  <div class="products">
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in realProducts" :key="p.id">
        <!-- <NuxtLink :to="`/products/${p.id}`" >{{ p.title }}</NuxtLink> -->
        <ProductCard :product="p" class="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
let realProducts = ref([])
definePageMeta({
  layout: 'products'
})
// fetch the products from the API
const { data: products } = await useFetch('https://dummyjson.com/products')

realProducts = products.value.products

useHead({
  title: 'Story | Products',
    meta: [
      { name: 'description', content: 'Everything About Products'}
    ]
})

  
</script>

<style>
.product {
  transition: all 0.4s ease-in;
}
.product:hover{
  transform: scale(1.08);
  box-shadow: 0px 0px 7px #fb923c;
}
.products {
  padding: 1rem;
  background: url(https://img.freepik.com/free-photo/online-shopping-shopping-cart-placed-alongside-notebook-blue_1150-19158.jpg?w=1380&t=st=1709643551~exp=1709644151~hmac=b5d6baa2422f8c2f82183ac60f0a8f7266f0eb5f5d2c0bed584c1d9bbf142f14);
}
</style>