<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="relative h-screen flex overflow-hidden bg-gray-100">
    <NewSidebar />
    <div class="flex-1 overflow-auto focus:outline-none">
      <Topbar />
      <main class="flex-1 relative z-0 overflow-y-auto">
        <router-view class="light-green-bg" />
      </main>
    </div>
  </div>
</template>

<script>
import Topbar from "./topBar.vue";
import NewSidebar from "./new-sidebar.vue";

export default {
  components: {
    Topbar,
    NewSidebar,
  },
  setup() {},
};
</script>
