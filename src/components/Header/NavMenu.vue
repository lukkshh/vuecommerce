<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

const MenuItems = ["Shop", "On Sale", "New Arrivals", "Brands"];
</script>

<template>
  <nav
    :class="{ hidden: !isOpen }"
    class="absolute top-20 bg-white transition-all w-full lg:w-auto lg:block lg:bg-inherit lg:static"
  >
    <ul
      class="flex flex-col p-4 space-y-6 lg:p-0 lg:space-y-0 lg:flex-row space-x-6"
    >
      <li
        v-for="(item, index) in MenuItems"
        :key="index"
        class="font-medium hover:underline cursor-pointer"
      >
        <a href="">
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
</template>
