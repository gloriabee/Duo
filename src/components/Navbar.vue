<script setup>
import { navLinks } from "../constants";
</script>
<template>
  <nav class="padding py-6 border-border border-b-2">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="#">
        <img
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6628074b71d6e1e95593d310_Logo.svg"
          alt=""
          class="w-[80px]"
        />
      </a>

      <!-- navLinks -->
      <div class="hidden justify-between items-center gap-6 lg:flex">
        <ul class="flex gap-6">
          <li v-for="nav in navLinks" :key="nav.id">
            <a :href="nav.id">{{ nav.title }}</a>
          </li>
        </ul>
        <button class="primary-btn font-semi-bold">Buy Template</button>
      </div>

      <!--toggle button-->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        class="block lg:hidden"
      >
        <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
        <path
          fill="currentColor"
          d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
        />
      </svg>
    </div>
  </nav>
</template>
