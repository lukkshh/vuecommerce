<script setup lang="ts">
import People from "@/assets/images/main-people.svg?url";
</script>

<template>
  <section class="bg-[#F2F0F1]">
    <div class="flex flex-col justify-center items-center p-4">
      <h1 class="font-integral text-4xl">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p class="opacity-60 mt-5">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <button
        class="mt-6 cursor-pointer rounded-[62px] h-[52px] w-[95%] bg-black text-white"
      >
        Shop Now
      </button>
      <div
        class="mt-5 flex justify-center flex-wrap items-center gap-x-12 gap-y-3 relative"
      >
        <div class="flex flex-col">
          <span class="font-bold text-2xl">200+</span>
          <span class="opacity-60 text-xs">International Brand</span>
        </div>

        <div class="w-px h-10 bg-black opacity-10"></div>

        <div class="flex flex-col">
          <span class="font-bold text-2xl">2000+</span>
          <span class="opacity-60 text-xs">High-Quality Products</span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold text-2xl">30,000+</span>
          <span class="opacity-60 text-xs">Happy Customers</span>
        </div>
      </div>
    </div>
    <div class="w-full overflow-hidden flex justify-center items-center">
      <img class="w-full" :src="People" alt="People" />
    </div>
  </section>
</template>
