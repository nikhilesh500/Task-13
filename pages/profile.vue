<template>
  <div>
    Welcome {{ username }}
  </div>
</template>

<script setup>
const user = useProfiles(); 


definePageMeta({
  layout: 'user',
  middleware: ['auth'],
  /*
  Inline Middleware
  -----------------------------------------
  middleware: () => {
    console.log('I am from Middleware')
    const auth = useAuth();
    return auth.value.isAuthenticated;
  } 
  */
})
</script>

<style scoped>

</style>