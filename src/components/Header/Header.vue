<script setup lang="ts">
import { ref } from "vue";

import Hamburger from "./Hamburger.vue";
import NavMenu from "./NavMenu.vue";
import Search from "./Search.vue";

import SearchIcon from "@/assets/ui/Search.svg";
import Cart from "@/assets/ui/Cart.svg";
import User from "@/assets/ui/User.svg";

const isOpen = ref<boolean>(false);

const handleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="min-h-20 flex justify-around items-center relative">
    <div class="flex space-x-4">
      <Hamburger :isOpen="isOpen" @toggle="handleOpen" />
      <p class="font-bold text-2xl">SHOP.CO</p>
    </div>
    <NavMenu :isOpen="isOpen" />
    <Search />
    <div class="flex space-x-3">
      <SearchIcon class="lg:hidden" />
      <Cart />
      <User />
    </div>
  </header>
</template>
