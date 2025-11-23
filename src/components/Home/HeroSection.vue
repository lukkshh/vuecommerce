<script setup lang="ts">
import People from "@/assets/images/main-people.svg?url";
import Star from "@/assets/images/star.svg";

import HeroStats from "@/components/Home/HeroStats.vue";
</script>

<template>
  <section class="bg-[#F2F0F1] flex flex-col md:flex-row">
    <div
      class="flex flex-col justify-center items-center lg:ml-5 2xl:ml-20 md:items-start p-4"
    >
      <h1
        class="font-integral font-bold text-4xl md:w-[640px] tracking-wide md:text-6xl"
      >
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p class="opacity-60 mt-5 md:max-w-[700px]">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <button
        class="mt-6 cursor-pointer rounded-[62px] h-[52px] w-[95%] md:w-[210px] bg-black text-white"
      >
        Shop Now
      </button>
      <HeroStats />
    </div>
    <div
      class="w-full relative overflow-hidden flex justify-center items-center"
    >
      <Star class="absolute scale-50 top-25 left-3 2xl:left-50" />
      <Star class="absolute scale-80 top-5 right-5 2xl:top-10 2xl:right-30" />
      <img class="w-full lg:w-[60%]" :src="People" alt="People" />
    </div>
  </section>
</template>
