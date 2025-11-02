<script setup lang="ts">
import versace from "@/assets/images/versace.svg";
import zara from "@/assets/images/zara.svg";
import gucci from "@/assets/images/gucci.svg";
import prada from "@/assets/images/prada.svg";
import calvin_klein from "@/assets/images/calvin-klein.svg";
</script>

<template>
  <section
    class="bg-black h-[120px] flex flex-wrap gap-x-2 md:gap-x-30 items-center justify-center p-4"
  >
    <versace alt="Versace" class="scale-50 md:scale-100" />
    <zara alt="Zara" class="scale-50 md:scale-100" />
    <gucci alt="Gucci" class="scale-50 md:scale-100" />
    <prada alt="Prada" class="scale-50 md:scale-100" />
    <calvin_klein alt="Calvin Klein" class="scale-50 md:scale-100" />
  </section>
</template>
