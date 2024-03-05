export default defineNuxtPlugin((nuxtApp) => {
  const users = useProfiles(); // Assuming the profiles are injected as $profiles
  const registered = ref(true);
  const exists = ref(null);
  const evaluate = ref();

  nuxtApp.signup = (data, tryRegister) => {
    if (tryRegister) {
      for (let user of users.value) {
        if (user.email === data.email) {
          exists.value = true;
          console.log('User already registered');
          return { exists: exists.value };
        }
      }
      exists.value = false;
    }
    if (!exists.value) {
      users.value.push(data);
      registered.value = true;
      console.log('User registered');
      console.log(users.value);
      return { exists: exists.value };
    }

    return { exists: exists.value };
  };
});