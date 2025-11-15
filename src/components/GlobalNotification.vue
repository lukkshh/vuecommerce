<script setup lang="ts">
import XIcon from "@/assets/ui/X.svg";
import { useGlobalNotification } from "@/composables/useGlobalNotification";

const { notification, markAsViewed } = useGlobalNotification();
</script>

<template>
  <div
    v-if="!notification.viewed"
    class="w-full min-h-10 bg-black text-sm text-white flex items-center justify-between px-4 py-2 lg:justify-center relative"
  >
    <p class="max-w-[220px] md:max-w-none">
      {{ notification.message }}
    </p>

    <button @click="markAsViewed" class="absolute right-[5%] cursor-pointer">
      <XIcon />
    </button>
  </div>
</template>
