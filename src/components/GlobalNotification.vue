<script setup lang="ts">
import { ref } from "vue";

import XIcon from "@/assets/ui/X.svg";

interface Notification {
  message: string;
  viewed: boolean;
  date: string;
}

const stored = localStorage.getItem("globalNotification");

const parsed = stored ? JSON.parse(stored) : {};
const globalNotification = ref<Notification>({
  viewed: parsed.viewed ?? true,
  message: parsed.message ?? "",
  date: parsed.date ?? new Date().toISOString(),
});

const markAsViewed = () => {
  globalNotification.value.viewed = true;
  localStorage.setItem(
    "globalNotification",
    JSON.stringify(globalNotification.value)
  );
};
</script>

<template>
  <div
    v-if="!globalNotification.viewed"
    class="w-full min-h-10 bg-black text-sm text-white flex items-center justify-between px-4 py-2 lg:justify-center relative"
  >
    <p class="max-w-[220px] md:max-w-none">
      {{ globalNotification.message }}
    </p>
    <button @click="markAsViewed" class="absolute right-[5%] cursor-pointer">
      <XIcon />
    </button>
  </div>
</template>
