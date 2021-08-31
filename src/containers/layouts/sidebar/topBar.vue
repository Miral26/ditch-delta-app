<template>
  <div
    class="
      relative
      z-10
      flex-shrink-0 flex
      h-16
      border-b border-gray-200
      lg:border-none
      light-green-bg
    "
  >
    <header class="w-full">
      <div class="relative z-10 flex-shrink-0 h-16 bg-transparent flex">
        <button
          type="button"
          class="
            border-r border-gray-200
            px-4
            text-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-inset focus:ring-indigo-500
            md:hidden
          "
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search all files</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                  "
                >
                  <SearchIcon
                    class="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                </div>
                <input
                  name="search-field"
                  id="search-field"
                  class="
                    h-full
                    w-full
                    border-transparent
                    py-2
                    pl-8
                    pr-3
                    bg-transparent
                    text-base text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-0
                  "
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="
                    bg-green-100
                    rounded-lg
                    flex
                    w-40
                    items-center
                    text-gray-400
                    hover:text-gray-600
                    focus:outline-none
                    mr-3
                    pl-2
                    pr-4
                    py-2
                  "
                >
                  <span class="sr-only">Open options</span>
                  <HomeIcon
                    class="h-5 w-5 light-green-text"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-56
                    rounded-md
                    shadow-lg
                    bg-white
                    focus:outline-none
                  "
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Account settings</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Support</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >License</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        type="submit"
                        @click="
                          () => {
                            signOut();
                            $router.push('/signIn');
                          }
                        "
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm',
                        ]"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button
              type="button"
              class="
                inline-flex
                items-center
                px-3
                py-1.5
                border border-transparent
                text-xs
                font-medium
                rounded-full
                shadow-sm
                text-white
                dark-green-bg
                hover-light-green-bg
                focus:outline-none
              "
              @click="showCronJobModal = true"
            >
              Run daily job
            </button>
          </div>
        </div>
      </div>
    </header>
    <CronJobModal
      :openModal="showCronJobModal"
      :closeModal="closeCronJobModal"
    />
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { HomeIcon, SearchIcon } from "@heroicons/vue/outline";
import { mapActions } from "vuex";
import CronJobModal from "../../../components/cronJobModal";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    SearchIcon,
    HomeIcon,
    CronJobModal,
  },
  data() {
    return {
      showCronJobModal: false,
    };
  },
  methods: {
    ...mapActions(["signOut", "toggleSideMenu"]),
    closeCronJobModal() {
      this.showCronJobModal = false;
    },
  },
};
</script>
