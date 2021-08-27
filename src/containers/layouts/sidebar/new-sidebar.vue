<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="h-screen bg-gray-50 flex overflow-hidden">
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-white overflow-y-auto md:block">
      <div class="w-full py-6 flex flex-col items-center">
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" :src="logo" alt="Workflow" />
        </div>
        <div class="flex-1 mt-6 w-full px-3 space-y-1">
          <router-link
            v-for="item in navigation"
            tag="a"
            :to="item.redirectTo"
            :key="item.name"
            @click="selectedParentMenu = item.selectedParentMenu"
            :class="[
              item.selectedParentMenu === selectedParentMenu
                ? 'dark-green-bg text-white'
                : 'text-gray-600 hover-dark-green-bg hover:text-white',
              'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium',
            ]"
            :aria-current="
              item.selectedParentMenu === selectedParentMenu
                ? 'page'
                : undefined
            "
          >
            <component
              :is="item.icon"
              :class="[
                item.selectedParentMenu === selectedParentMenu
                  ? 'text-gray-100'
                  : 'dark-green-text group-hover:text-gray-100',
                'h-6 w-6',
              ]"
              aria-hidden="true"
            />
            <span class="mt-2">{{ item.name }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="showSideMenu">
      <Dialog as="div" class="md:hidden" @close="toggleSideMenu">
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <div
              class="
                relative
                max-w-xs
                w-full
                bg-green-700
                pt-5
                pb-4
                flex-1 flex flex-col
              "
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    class="
                      h-12
                      w-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                      focus:outline-none
                      focus:ring-2 focus:ring-white
                    "
                    @click="toggleSideMenu"
                  >
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 px-4 flex items-center">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav class="h-full flex flex-col">
                  <div class="space-y-1">
                    <router-link
                      v-for="item in navigation"
                      tag="a"
                      :to="item.redirectTo"
                      :key="item.name"
                      @click="selectedParentMenu = item.selectedParentMenu"
                      :class="[
                        item.selectedParentMenu === selectedParentMenu
                          ? 'bg-green-800 text-white'
                          : 'text-green-100 hover:bg-green-800 hover:text-white',
                        'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
                      ]"
                      :aria-current="
                        item.selectedParentMenu === selectedParentMenu
                          ? 'page'
                          : undefined
                      "
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          item.selectedParentMenu === selectedParentMenu
                            ? 'text-white'
                            : 'text-green-300 group-hover:text-white',
                          'mr-3 h-6 w-6',
                        ]"
                        aria-hidden="true"
                      />
                      <span>{{ item.name }}</span>
                    </router-link>
                  </div>
                </nav>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  HomeIcon,
  MenuAlt2Icon,
  PlusIcon,
  UserGroupIcon,
  XIcon,
  ClockIcon,
  DocumentReportIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";
import { SearchIcon, LocationMarkerIcon } from "@heroicons/vue/solid";
import Logo from "../../../assests/images/logo.png";
import { mapActions, mapGetters } from "vuex";

const navigation = [
  {
    name: "Claims",
    redirectTo: "claims",
    icon: HomeIcon,
    selectedParentMenu: "claims",
  },
  {
    name: "Payments",
    redirectTo: "payments",
    icon: ClockIcon,
    selectedParentMenu: "payments",
  },
  {
    name: "Patients",
    redirectTo: "patients",
    icon: ScaleIcon,
    selectedParentMenu: "patients",
  },
  {
    name: "Users",
    redirectTo: "users",
    icon: UserGroupIcon,
    selectedParentMenu: "users",
  },
  {
    name: "Insights",
    redirectTo: "insights",
    icon: DocumentReportIcon,
    selectedParentMenu: "insights",
  },
  {
    name: "Locations",
    redirectTo: "locations",
    icon: LocationMarkerIcon,
    selectedParentMenu: "locations",
  },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    MenuAlt2Icon,
    PlusIcon,
    SearchIcon,
    XIcon,
  },
  data() {
    return {
      navigation,
      logo: Logo,
      selectedParentMenu: "",
    };
  },
  mounted() {
    // console.log(`this.loggedInUser`, this.loggedInUser);
    this.toggleSelectedParentMenu();
  },
  computed: {
    ...mapGetters(["showSideMenu"]),
  },
  methods: {
    ...mapActions(["toggleSideMenu"]),
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "claims";
      }
    },
  },
};
</script>