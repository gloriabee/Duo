<script setup>
import { objectives } from "../constants";
</script>

<template>
  <div class="padding mt-[150px]">
    <h1 class="section-heading mb-5 w-[45%]">
      Accelerate your business growth with Duo Template
    </h1>
    <div class="flex flex-col md:flex-row justify-between items-center gap-5">
      <div class="flex flex-col gap-5 lg:w-[35%] md:w-[50%] w-full">
        <div
          v-for="obj in objectives"
          :key="obj.title"
          class="card-border px-8 py-6"
        >
          <h1 class="font-bold text-lg flex justify-items-center gap-1">
            <span class="star">*</span>
            <p>{{ obj.title }}</p>
          </h1>
          <p>{{ obj.description }}</p>
          <div>
            <button class="outline p-2">Learn More</button>
          </div>
        </div>
      </div>
      <div class="lg:w-[60%] md:w-[50%] w-full">
        <img
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663a2d0080227473fe678ddd_growth-duo.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
