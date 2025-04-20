<script setup>
import { integrations } from "../constants";
</script>

<template>
  <div class="padding mt-[150px]">
    <h1 class="section-heading">Integrations</h1>
    <p class="mt-5">
      The integrations section showcases how our software seamlessly connects
      with other tools, enhancing functionality and streamlining workflows for
      maximum efficiency.
    </p>
    <button class="mt-5 primary-btn">Request a Demo</button>

    <div
      class="mt-[60px] mb-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      <div
        v-for="integration in integrations"
        :key="integration.title"
        class="card-border bg-card"
      >
        <div class="bg-border rounded-t-xl p-8">
          <img :src="integration.img" alt="" />
          <p class="mt-3">{{ integration.description }}</p>
        </div>
        <div class="p-8">
          <button class="bg-white text-primary border-padding rounded-md">
            Connect Integration
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
