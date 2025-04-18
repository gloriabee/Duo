<script setup>
defineProps({
  feature: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card-border p-8">
    <img :src="feature.icon" alt="" class="w-[42px]" />
    <h1 class="text-2xl font-bold">{{ feature.title }}</h1>
    <p>{{ feature.description }}</p>
  </div>
</template>
