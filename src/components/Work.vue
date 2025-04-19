<script setup>
import { works } from "../constants";
</script>

<template>
  <div class="padding">
    <h1 class="section-heading">How it works</h1>
    <p class="xl:w-[40%] lg:w-[60%] md:w-[70%] mt-5">
      Learn how we pinpoint issues in your product and get you to the finish
      line in no time.
    </p>

    <div
      class="mt-[60px] mb-[60px] grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
    >
      <div v-for="work in works" :key="work.id" class="md:w-full w-[70%]">
        <img :src="work.img" alt="" class="w-full h-[200px] mb-8" />

        <span class="bg-black px-2 py-1 text-white rounded-md"
          >Step {{ work.id }}</span
        >
        <h1 class="text-primary font-bold text-3xl mt-2 mb-4 text-left">
          {{ work.title }}
        </h1>
        <p>{{ work.description }}</p>
        <button class="mt-4 outline border-padding">Learn More</button>
      </div>
    </div>
  </div>
</template>
