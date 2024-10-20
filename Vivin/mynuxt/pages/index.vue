<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <header class="bg-stone-500 w-full py-4 shadow-md">
      <h1 class="text-3xl text-white text-center">Hoş Geldiniz</h1>
    </header>
    
    <main class="flex flex-col items-center mt-10">
      <h2 class="text-2xl mb-4">Kullanıcı Girişi Yapın</h2>
      <p class="mb-6 text-center">
        Hızlı ve güvenli bir şekilde giriş yapmak için aşağıdaki butona tıklayın.
      </p>
      <nuxt-link to="/login">
        <button class="px-6 py-3 bg-lime-800 text-white rounded-lg shadow-lg hover:bg-stone-600 transition duration-300 ease-in-out">
          Login Sayfasına Git
        </button>
      </nuxt-link>
    </main>
    
    <footer class="mt-auto py-4 text-center">
      <p class="text-gray-600">&copy; 2024 Tüm Hakları Saklıdır.</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>

