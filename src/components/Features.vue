<script setup>
import Card from "./Card.vue";
import { features } from "../constants";
</script>

<template>
  <div class="padding">
    <h1 class="section-heading">Including Custom-made Illustrations</h1>
    <p class="xl:w-[40%] lg:w-[60%] md:w-[70%] mt-5">
      Our unique illustrations will allow you to explain concepts relevant to
      SaaS industry in an engaging and fun way.
    </p>
    <div class="mt-[60px] mb-[60px] grid grid-cols-1 md:grid-cols-3 gap-5">
      <Card
        v-for="feature in features"
        :key="feature.title"
        :feature="feature"
      />
    </div>
  </div>
</template>
