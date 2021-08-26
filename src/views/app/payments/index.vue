<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="font-semibold text-xl">Payments</h3>
            <!-- Tabs -->
            <div class="mt-3 sm:mt-2">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select
                  id="tabs"
                  name="tabs"
                  class="
                    block
                    w-full
                    pl-3
                    pr-10
                    py-2
                    text-base
                    border-gray-300
                    focus:outline-none
                    focus:ring-green-500
                    focus:border-green-500
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option
                    v-for="tab in tabs"
                    :key="tab.name"
                    :selected="tab.id === selectedTab.id"
                  >
                    {{ tab.name }}
                  </option>
                </select>
              </div>

              <div class="hidden sm:block">
                <div class="flex items-center">
                  <nav class="flex-1 -mb-px flex space-x-3" aria-label="Tabs">
                    <a
                      v-for="tab in tabs"
                      :key="tab.id"
                      :aria-current="tab.id ? 'page' : undefined"
                      @click="selectedTab = tab"
                      :class="[
                        selectedTab.id === tab.id
                          ? 'text-green-600'
                          : 'text-gray-500 hover:text-gray-700',
                        'whitespace-nowrap py-4 px-1 font-medium text-sm cursor-pointer',
                      ]"
                    >
                      {{ tab.name }}
                      <span
                        :class="[
                          selectedTab.id === tab.id
                            ? 'w-5 h-0.5 bg-green-500 table mx-auto mt-1.5'
                            : '',
                        ]"
                      ></span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <!-- Gallery -->
            <section class="mt-8 pb-16">
              <Table :selectedTab="selectedTab" />
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  PhotographIcon,
  UserGroupIcon,
} from "@heroicons/vue/outline";
import Table from "./table.vue";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  // { name: "All Files", href: "#", icon: ViewGridIconOutline, current: false },
  { name: "Photos", href: "#", icon: PhotographIcon, current: true },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: CollectionIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const tabs = [
  { name: "Pending", id: "pending" },
  { name: "Completed", id: "completed" },
  { name: "Refunded", id: "refunded" },
  { name: "Failed", id: "failed" },
];

export default {
  components: { Table },
  data() {
    const mobileMenuOpen = ref(false);

    return {
      navigation,
      userNavigation,
      tabs,
      mobileMenuOpen,
      selectedTab: { name: "Pending", id: "pending" },
    };
  },
};
</script>