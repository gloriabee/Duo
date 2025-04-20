<script setup>
import { pricing } from "../constants";
</script>
<template>
  <div class="padding mt-[150px]">
    <h1 class="section-heading mb-3 text-center">
      Choose the right Pricing Plan
    </h1>
    <p class="text-center w-[50%] mx-auto">
      Our pricing plans cater to diverse needs, offering flexible options to
      suit your budget and requirements.
    </p>
    <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
      <div
        v-for="(price, index) in pricing"
        :key="price.title"
        :class="['card-border p-8', index === 1 ? 'bg-black text-white' : '']"
      >
        <img :src="price.img" alt="" class="w-[80px]" />
        <h1 class="text-2xl font-semibold mt-2">{{ price.title }}</h1>
        <p class="mt-2">{{ price.description }}</p>
        <p class="text-gray-600 text-sm">
          <span class="mt-10 text-4xl text-primary font-bold"
            >${{ price.price }}<br /></span
          >/ Per Single License
        </p>
        <ul>
          <li
            v-for="(feature, index) in price.features"
            :key="index"
            class="flex items-center gap-1"
          >
            <span class="star">*</span> {{ feature }}
          </li>
        </ul>
        <button
          :class="[
            'border-padding w-max mt-10',
            index === 1 ? 'primary-btn' : 'outline',
          ]"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
