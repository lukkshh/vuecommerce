<script setup lang="ts">
import SearchIcon from "@/assets/ui/Search.svg";
</script>

<template>
  <div class="relative hidden lg:block">
    <SearchIcon class="absolute top-1/2 left-6 -translate-1/2 opacity-40" />
    <input
      type="text"
      class="rounded-[62px] bg-[#F0F0F0] min-w-[500px] pl-12 h-12"
      placeholder="Search for products..."
    />
  </div>
</template>
