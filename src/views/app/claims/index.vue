
<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="font-semibold text-xl">Claims</h3>
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
                        tab.id === selectedTab.id
                          ? 'text-green-600'
                          : 'text-gray-500 hover:text-gray-700',
                        'whitespace-nowrap py-4 px-1 font-medium text-sm cursor-pointer',
                      ]"
                    >
                      {{ tab.name }}
                      <span
                        :class="[
                          tab.id === selectedTab.id
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
              <!-- <button
                type="button"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-full
                  text-white
                  bg-green-600
                  hover:bg-green-700
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                "
              >
                <PlusSmIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Create
              </button> -->
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
// import { PlusSmIcon } from "@heroicons/vue/solid";
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
  { name: "In Progress", id: "in-progress" },
  { name: "Pending", id: "pending" },
  { name: "Completed", id: "completed" },
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
  components: { Table },
  data() {
    const mobileMenuOpen = ref(false);
    return {
      navigation,
      userNavigation,
      tabs,
      files,
      currentFile,
      mobileMenuOpen,
      selectedTab: { name: "In Progress", id: "in-progress" },
    };
  },
};
</script>