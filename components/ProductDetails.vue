<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.images[0]" alt="product" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <div class="flex gap-5">
          <NuxtLink to="/products/cart" @click="addToCart" class="btn flex">
            <i class="material-icons mr-2">local_atm</i>
            <span>Buy Now</span>
          </NuxtLink>
          <button @click="addToCart" class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to cart</span>
          </button>
          <div v-if="showToast" class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white p-4 rounded shadow">
            Item added successfully
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
const cart = useCart();
const showToast = ref(false);


const addToCart = () => {
  const found = cart.value.find(c => c.id === product.id)
  if (found) {
    cart.value.find(c => {
      if (c.id === product.id) {
        c.quantity++
        // console.log(c.quantity);
      }
    })
  } 
  else {
    cart.value.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1
    })
  }
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
}
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>