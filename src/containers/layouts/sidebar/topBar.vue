<template>
  <div
    class="
      relative
      z-10
      flex-shrink-0 flex
      h-16
      bg-white
      border-b border-gray-200
      lg:border-none
    "
  >
    <button
      class="
        px-4
        border-r border-gray-200
        text-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-inset focus:ring-cyan-500
        lg:hidden
      "
      @click="sidebarOpen = true"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <!-- Search bar -->
    <div
      class="
        flex-1
        px-4
        flex
        justify-between
        sm:px-6
        lg:max-w-6xl
        lg:mx-auto
        lg:px-8
      "
    >
      <div class="flex-1 flex">
        <form class="w-full flex md:ml-0" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pointer-events-none
              "
              aria-hidden="true"
            >
              <SearchIcon class="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search-field"
              name="search-field"
              class="
                block
                w-full
                h-full
                pl-8
                pr-3
                py-2
                border-transparent
                text-gray-900
                placeholder-gray-500
                focus:outline-none
                focus:ring-0
                focus:border-transparent
                sm:text-sm
              "
              placeholder="Search transactions"
              type="search"
            />
          </div>
        </form>
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="
                bg-gray-100
                rounded-full
                flex
                items-center
                text-gray-400
                hover:text-gray-600
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-100
                focus:ring-indigo-500
                mr-10
              "
            >
              <span class="sr-only">Open options</span>
              <HomeIcon class="h-5 w-5" aria-hidden="true" />
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
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Account settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Support</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >License</a
                  >
                </MenuItem>
                <form method="POST" action="#">
                  <MenuItem v-slot="{ active }">
                    <button
                      type="submit"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm',
                      ]"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
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
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Run daily job
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { HomeIcon, MenuAlt1Icon, SearchIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuAlt1Icon,
    SearchIcon,
    HomeIcon,
  },
  setup() {},
};
</script>
