<template>
  <div class="relative h-screen flex overflow-hidden bg-gray-100">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
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
              flex-1 flex flex-col
              max-w-xs
              w-full
              pt-5
              pb-4
              bg-cyan-700
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
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-white
                  "
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                alt="Easywire logo"
              />
            </div>
            <nav
              class="
                mt-5
                flex-shrink-0
                h-full
                divide-y divide-cyan-800
                overflow-y-auto
              "
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-cyan-800 text-white'
                      : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
            </nav>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="
            flex-1 flex flex-col
            min-h-0
            border-r border-gray-200
            bg-gray-100
          "
        >
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img class="h-8 w-auto" :src="logo" alt="Workflow" />
            </div>
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="px-2 space-y-1">
                <router-link
                  v-for="item in navigation"
                  tag="a"
                  :to="item.redirectTo"
                  :key="item.name"
                  @click="selectedParentMenu = item.selectedParentMenu"
                  :class="[
                    item.selectedParentMenu === selectedParentMenu
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </div>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" class="flex-shrink-0 w-full group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="
                      text-sm
                      font-medium
                      text-gray-700
                      group-hover:text-gray-900
                    "
                  >
                    Whitney Francis
                  </p>
                  <p
                    class="
                      text-xs
                      font-medium
                      text-gray-500
                      group-hover:text-gray-700
                    "
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  ClockIcon,
  DocumentReportIcon,
  HomeIcon,
  ScaleIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import Topbar from "./topBar.vue";
import Sidebar from "./sidebar.vue";
import Logo from "../../../assests/images/logo.png";

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
];

export default {
  components: {
    Topbar,
    Sidebar,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
    XIcon,
    HomeIcon,
  },
  data() {
    const sidebarOpen = ref(false);
    return {
      navigation,
      sidebarOpen,
      logo: Logo,
      selectedParentMenu: "",
    };
  },
  mounted() {
    // console.log(`this.loggedInUser`, this.loggedInUser);
    this.toggleSelectedParentMenu();
  },
  methods: {
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