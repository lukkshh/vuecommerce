<script setup lang="ts">
import GlobalNotification from "./components/GlobalNotification.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <GlobalNotification />
  <Header></Header>
  <div class="h-screen bg-[#F2F0F1]"></div>
  <router-view />
</template>
