<template>
  <div class="signup">
    <div class="card w-4/12 mx-auto py-10 ">
      <h1 class="text-center text-4xl my-8">Join with us</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col px-8 ">
        <span v-if="registered" >
          <div class="text-amber-500 text-md flex">
            <!-- <i class="material-icons mr-1">no_accounts</i> -->
            <p>User got registered successfully</p>
          </div>
        </span>
        <span v-if="exists" >
          <div class="text-amber-500 text-md flex">
            <!-- <i class="material-icons mr-1">no_accounts</i> -->
            <p>User already exsists</p>
          </div>
        </span>
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="text" v-model="username" placeholder="Name">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="email" v-model="email" placeholder="Email">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="password" v-model="password" placeholder="Password">
        <button type="submit" class="btn w-6/12 mx-auto my-4 ">
          <span>Sign Up</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const username = ref('');
const email = ref('');
const password = ref('');

const { signup } = useNuxtApp(); // Use signup function directly
const registered = ref(null);
const exists = ref(null);
const tryRegister = ref(true);

const onSubmit = ()=> {
  
  const data = { name: username.value, email: email.value, password: password.value };
  const { exists: userExists } = signup(data, tryRegister);
  console.log(tryRegister);
  
  exists.value = userExists;
  registered.value = !userExists;

  username.value = '';
  email.value = '';
  password.value = '';
};
/*

The following used as a Plugin
-------------------------------------------
const onSubmit = () => {
  const data = {
    name: username.value,
    email: email.value,
    password: password.value
  }

  for (let user of users.value) {
    if (user.email === email.value) {
      exists.value = true;
      break;
    }
  }
  if (!exists.value) {
    users.value.push(data);
    exists.value = false;
  }
  
  username.value = '';
  email.value = '';
  password.value = '';
} 

*/
</script>

<style scoped>
.signup {
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