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
            <div class="mt-3">
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
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option
                    v-for="tab in tabs"
                    :key="tab.name"
                    :selected="tab.current"
                  >
                    {{ tab.name }}
                  </option>
                </select>
              </div>
              <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                      v-for="tab in tabs"
                      :key="tab.id"
                      :aria-current="
                        tab.id === selectedTab.id ? 'page' : undefined
                      "
                      @click="selectedTab = tab"
                      :class="[
                        tab.id === selectedTab.id
                          ? 'border-green-500 dark-green-text'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                        'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
                      ]"
                    >
                      {{ tab.name }}
                      <span
                        v-if="tab.count"
                        :class="[
                          tab.id === selectedTab.id
                            ? 'dark-green-bg text-gray-900'
                            : 'bg-gray-100 text-gray-900',
                          'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                        ]"
                        >{{ tab.count }}</span
                      >
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
  { name: "Pending", id: "pending", count: 10 },
  { name: "Completed", id: "completed", count: 16 },
  { name: "Refunded", id: "refunded" },
  { name: "Failed", id: "failed", count: 1 },
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