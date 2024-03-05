<template>
  <div class="login ">
    <div class="card w-4/12 mx-auto py-10 ">
      <h1 class="text-center text-4xl my-8">Welcome Back</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col px-8 ">
        <span v-if="err" >
          <div class="text-red-600 text-md flex">
            <i class="material-icons mr-1">no_accounts</i>
            <p>{{ err }}</p>
          </div>
        </span>
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="email" v-model="email" placeholder="Email">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="password" v-model="password" placeholder="Password">
        <button type="submit" class="btn w-6/12 mx-auto my-4 ">
          <span v-if="isLoading">Loading...</span>
          <span v-else>Log In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: 'user'
// })
const email = ref('nikhil@gmail.com')
const password = ref('password')

const isLoading = ref(false)
const err = ref('')
const auth = useAuth()
const users = useProfiles()
console.log(email.value)

const onSubmit = () => {
  const data = {
    email: email.value,
    password: password.value
  }

  isLoading.value = true
  if (data.email && data.password) {
    setTimeout(() =>{
      for (let user of users.value) {
        if (user.email === data.email) {
          console.log('Username Matched')
          if (user.password === data.password) {
            console.log('Password Matched')
            
            auth.value.isAuthenticated = true;
            navigateTo('/')
            
            isLoading.value = false
            data.email = ''
            data.password = ''
            break;
          }
          else {
            isLoading.value = false
            err.value = 'Incorrect Password, please try again'
            break;
          }
        }
      }
      if (isLoading.value) {
        isLoading.value = false
        err.value = 'User not found, Invalid Credentials'
      }
    }, 1000)
  }
  else {
    isLoading.value = false
    err.value = 'Please fill in all fields'
  }
}

/*
API login
-----------------------------------------------
const url = 'https://reqres.in/api/login'
const form = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
})
const err = ref(null);

const onSubmit = async() => {
  
  if (isLoading.value) return;
  isLoading.value = true;
  console.log(email.value, password.value);
  const { data, error } = await useFetch(url,{
    method: 'post',
    body: form,
  });

  isLoading.value = false;
  if (error.value){
    err.value = error.value.data.error;
    return;
  };

  const auth = useAuth()
  auth.value.isAuthenticated = true;

  navigateTo('/')
  
  console.log(data.value, error.value.data);
  email.value = ''
  password.value = ''

};

*/

</script>

<style scoped>
.login {
  background: url(https://img.freepik.com/free-psd/empty-room-wall-mockup-psd-modern-interior-design_53876-129121.jpg?w=1380&t=st=1709642213~exp=1709642813~hmac=14842109f641212e007ea3d0a75dc472f9775c98f5b256912e2ceb3f0f47fb51);
  background-size: cover;
  display: flex; /* Add flex display */
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  height: 90vh; /* Set height to viewport height */
}

.card {
  width: 50%; /* Adjust width as needed */
  max-width: 400px; /* Limit maximum width */
  height: auto; /* Let height adjust based on content */
}
</style>