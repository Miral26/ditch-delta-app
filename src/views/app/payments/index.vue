<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option
                    v-for="tab in tabs"
                    :key="tab.name"
                    :selected="tab.id === selectedTab"
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
                      @click="selectedTab = tab.id"
                      :class="[
                        selectedTab === tab.id
                          ? 'text-indigo-600'
                          : 'text-gray-500 hover:text-gray-700',
                        'whitespace-nowrap py-4 px-1 font-medium text-sm cursor-pointer',
                      ]"
                    >
                      {{ tab.name }}
                      <span
                        :class="[
                          selectedTab === tab.id
                            ? 'w-5 h-0.5 bg-indigo-500 table mx-auto mt-1.5'
                            : '',
                        ]"
                      ></span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <!-- Gallery -->
            <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" class="sr-only">In Progress</h2>
              <ul
                role="list"
                class="
                  grid grid-cols-2
                  gap-x-4 gap-y-8
                  sm:grid-cols-3
                  sm:gap-x-6
                  md:grid-cols-4
                  lg:grid-cols-3
                  xl:grid-cols-4
                  xl:gap-x-8
                "
              >
                <li v-for="file in files" :key="file.name" class="relative">
                  <div
                    :class="[
                      file.current
                        ? 'ring-2 ring-offset-2 ring-indigo-500'
                        : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                      'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden',
                    ]"
                  >
                    <img
                      :src="file.source"
                      alt=""
                      :class="[
                        file.current ? '' : 'group-hover:opacity-75',
                        'object-cover pointer-events-none',
                      ]"
                    />
                    <button
                      type="button"
                      class="absolute inset-0 focus:outline-none"
                    >
                      <span class="sr-only"
                        >View details for {{ file.name }}</span
                      >
                    </button>
                  </div>
                  <p
                    class="
                      mt-2
                      block
                      text-sm
                      font-medium
                      text-gray-900
                      truncate
                      pointer-events-none
                    "
                  >
                    {{ file.name }}
                  </p>
                  <p
                    class="
                      block
                      text-sm
                      font-medium
                      text-gray-500
                      pointer-events-none
                    "
                  >
                    {{ file.size }}
                  </p>
                </li>
              </ul>
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
const files = [
  {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    current: true,
  },
  // More files...
];
const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    "Uploaded by": "Marie Culver",
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
    Resolution: "72 x 72",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

export default {
  data() {
    const mobileMenuOpen = ref(false);

    return {
      navigation,
      userNavigation,
      tabs,
      files,
      currentFile,
      mobileMenuOpen,
      selectedTab: "pending",
    };
  },
};
</script>