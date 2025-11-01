<script setup lang="ts">
import { ref } from "vue";

import Search from "@/assets/ui/Search.svg";
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
      <button
        @click="handleOpen"
        class="flex flex-col justify-center lg:hidden items-center cursor-pointer"
      >
        <span
          :class="{ 'rotate-45 translate-y-2': isOpen }"
          class="h-1 w-8 bg-black rounded-full transition-transform duration-300"
        ></span>
        <span
          :class="{ 'opacity-0': isOpen }"
          class="h-1 w-8 bg-black rounded-full my-1 transition-opacity duration-300"
        ></span>
        <span
          :class="{ '-rotate-45 -translate-y-2': isOpen }"
          class="h-1 w-8 bg-black rounded-full transition-transform duration-300"
        ></span>
      </button>
      <p class="font-bold text-2xl">SHOP.CO</p>
    </div>
    <nav
      :class="{ hidden: !isOpen }"
      class="absolute top-20 bg-white transition-all w-full lg:w-auto lg:block lg:bg-inherit lg:static"
    >
      <ul
        class="flex flex-col p-4 space-y-6 lg:p-0 lg:space-y-0 lg:flex-row space-x-6"
      >
        <li><a href="">Shop</a></li>
        <li><a href="">On Sale</a></li>
        <li><a href="">New Arrivals</a></li>
        <li><a href="">Brands</a></li>
      </ul>
    </nav>
    <div class="relative hidden lg:block">
      <Search
        class="absolute top-1/2 left-6 -translate-1/2 opacity-40 fill-[#000000]"
      />
      <input
        type="text"
        class="rounded-[62px] bg-[#F0F0F0] min-w-[500px] pl-12 h-12"
        placeholder="Search for products..."
      />
    </div>
    <div class="flex space-x-3">
      <Search class="lg:hidden fill-black" />
      <Cart />
      <User />
    </div>
  </header>
</template>
