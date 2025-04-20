<script setup></script>

<template>
  <div class="padding mt-[150px] bg-card pt-[100px] pb-[200px]">
    <h1 class="section-heading text-center text-white">
      Customer <span class="text-primary">Reviews</span>
    </h1>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
      <div
        class="border-[3px] border-black/20 rounded-3xl p-8 hover:border-primary transition-all"
      >
        <p class="text-white font-medium text-2xl">
          "I couldn't be happier with this Webflow template! As a small business
          owner with limited coding skills, I needed something that was easy to
          use but still looked professional - and it delivered."
        </p>
        <img
          class="mt-5 w=[80px] h-[80px] border-primary border-[3px] rounded-full"
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5434a9a1d841b12c9b_avatar-1.webp"
          alt=""
        />
        <p class="text-2xl mt-4 text-primary">John Doe</p>
        <p class="text-sm text-white">CEO / Flerp Studios</p>
      </div>

      <div
        class="border-[3px] border-black/20 rounded-3xl p-8 hover:border-primary transition-all"
      >
        <p class="text-white font-medium text-2xl">
          "This Webflow template has been a game-changer for my portfolio site.
          As a freelance designer, I needed a website that showcased my work
          beautifully and could be easily updated."
        </p>
        <img
          class="mt-5 w=[80px] h-[80px] border-primary border-[3px] rounded-full"
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff57a8c8e95a310bc29b_avatar-2.webp"
          alt=""
        />
        <p class="text-2xl mt-4 text-primary">Emma Frost</p>
        <p class="text-sm text-white">Freelance Designer</p>
      </div>

      <div
        class="border-[3px] border-black/20 rounded-3xl p-8 hover:border-primary transition-all"
      >
        <p class="text-white font-medium text-2xl">
          "I was initially hesitant to use a template, but this Webflow template
          exceeded my expectations. The level of customization available is
          impressive, and the template was easy to work with.
        </p>
        <img
          class="mt-5 w=[80px] h-[80px] border-primary border-[3px] rounded-full"
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5b17668f713e14de89_avatar-3.webp"
          alt=""
        />
        <p class="text-2xl mt-4 text-primary">Brian Choe</p>
        <p class="text-sm text-white">Creative Director / Trix Agency</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
