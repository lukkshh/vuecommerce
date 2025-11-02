<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const toggle = () => {
  emit("toggle");
};

const topBarClasses = computed(() => ({
  "rotate-45 translate-y-2": props.isOpen,
  "h-1 w-8 bg-black rounded-full transition-transform duration-300": true,
}));

const middleBarClasses = computed(() => ({
  "opacity-0": props.isOpen,
  "h-1 w-8 bg-black rounded-full my-1 transition-opacity duration-300": true,
}));

const bottomBarClasses = computed(() => ({
  "-rotate-45 -translate-y-2": props.isOpen,
  "h-1 w-8 bg-black rounded-full transition-transform duration-300": true,
}));
</script>

<template>
  <button
    @click="toggle"
    class="flex flex-col justify-center lg:hidden items-center cursor-pointer"
  >
    <span :class="topBarClasses"></span>
    <span :class="middleBarClasses"></span>
    <span :class="bottomBarClasses"></span>
  </button>
</template>
