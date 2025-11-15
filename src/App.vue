<script setup lang="ts">
import GlobalNotification from "@/components/GlobalNotification.vue";
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <GlobalNotification />
  <Header></Header>
  <router-view />
</template>
