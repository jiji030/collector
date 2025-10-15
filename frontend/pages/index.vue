<template>
  <div class="flex h-screen"> 
    <!-- Left side (Logo & Title) -->
    <div class="w-1/2 bg-green-800 flex flex-row justify-center items-center text-white p-8">
      <div class="flex flex-col justify-center items-start mr-8">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-extrabold mb-2 leading-tight drop-shadow-lg text-center">CHARMAFA</h1>
          <p class="text-lg tracking-widest font-medium mb-2 drop-shadow-md -mt-2 text-center">EVERY DROP COUNTS</p>
        </div>
      </div>
      <img src="/logo.png" alt="CHARMAFA Logo" class="w-72 h-72 object-contain" />
    </div>

    <!-- Right side (Login Form) -->
    <div class="w-1/2 bg-white flex flex-col justify-center items-center p-12">
      <div class="w-full max-w-md">
        <h2 class="text-2xl font-semibold text-gray-800">Hello Again!</h2>
        <p class="text-gray-500 mb-6">Welcome Back</p>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Username -->
          <div class="relative">
            <input 
              v-model="username"
              type="text"
              placeholder="Username"
              class="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <!-- Password -->
          <div class="relative">
            <input 
              v-model="password"
              type="password" 
              placeholder="Password"
              class="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <!-- Login Button -->
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <!-- Error Message -->
        <p v-if="errorMessage" class="mt-4 text-red-500 text-center font-semibold">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "#app"   //Nuxt way

const username = ref("")
const password = ref("")
const errorMessage = ref("")
const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await $fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: {
          username: username.value,
          password: password.value,
        },
      });

      if (response.success) {
        errorMessage.value = "";
        router.push("/dashboard");
      } else {
        errorMessage.value = response.message;
      }
    } catch (error) {
      errorMessage.value = "Cannot connect to server.";
    }
  };
</script>
