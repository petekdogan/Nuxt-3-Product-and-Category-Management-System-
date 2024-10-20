<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 ">
    <div class="w-full max-w-96 p-8 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="handleSignIn">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const email = ref('');
const password = ref('');
const router = useRouter();

const users = [
  { email: 'a@a.com', password: 'a' },
  { email: 'b@b.com', password: 'b' },
  { email: 'c@c.com', password: 'c' },
];

async function handleSignIn() {
  const isValidUser = users.some(
    (user) => user.email === email.value && user.password === password.value
  );

  if (isValidUser) {
    useState('isAuthenticated').value = true; 
    await router.push('/categories_products'); 
  } else {
    alert('Geçersiz kullanıcı bilgileri.');
  }
}
</script>



