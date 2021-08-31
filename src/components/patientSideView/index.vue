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
  <TransitionRoot as="template" :show="showPatientModal">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden z-50"
      @close="() => setPatientModal(false)"
    >
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-2xl relative">
              <form
                class="
                  h-full
                  flex flex-col
                  bg-white
                  shadow-xl
                  overflow-y-scroll
                "
              >
                <div class="flex-1">
                  <!-- Header -->
                  <div class="px-4 pt-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <div class="h-7 flex items-center">
                        <button
                          type="button"
                          class="text-gray-400 hover:text-gray-500"
                          @click="() => setPatientModal(false)"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div class="space-y-1">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          Patient Information
                        </DialogTitle>
                      </div>
                    </div>
                  </div>

                  <div class="px-6 pt-6 pb-16">
                    <h5>Create New Patient</h5>
                    <form>
                      <div class="overflow-hidden sm:rounded-md">
                        <div class="py-5 bg-white">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="first_name"
                                class="block text-sm font-medium text-gray-700"
                                >First Name</label
                              >
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="last_name"
                                class="block text-sm font-medium text-gray-700"
                                >Last Name</label
                              >
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="email-address"
                                class="block text-sm font-medium text-gray-700"
                                >Email address</label
                              >
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autocomplete="email"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="dob"
                                class="block text-sm font-medium text-gray-700"
                                >Date of Birth (MM/DD/YYYY)</label
                              >
                              <input
                                type="text"
                                name="dob"
                                id="dob"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="phone"
                                class="block text-sm font-medium text-gray-700"
                                >Phone</label
                              >
                              <input
                                type="text"
                                name="phone"
                                id="phone"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="group"
                                class="block text-sm font-medium text-gray-700"
                                >Group #</label
                              >
                              <input
                                type="text"
                                name="group"
                                id="group"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="subscriber_name"
                                class="block text-sm font-medium text-gray-700"
                                >Subscriber Name</label
                              >
                              <input
                                type="text"
                                name="subscriber_name"
                                id="subscriber_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="subscriber_name"
                                class="block text-sm font-medium text-gray-700"
                                >Subscriber Id</label
                              >
                              <input
                                type="text"
                                name="subscriber_name"
                                id="subscriber_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="subscriber_dob"
                                class="block text-sm font-medium text-gray-700"
                                >Subscriber Date of Birth (MM/DD/YYYY)</label
                              >
                              <input
                                type="text"
                                name="subscriber_dob"
                                id="subscriber_dob"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="delta"
                                class="block text-sm font-medium text-gray-700"
                                >Delta</label
                              >
                              <select
                                id="delta"
                                name="delta"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              >
                                <option selected>Please select</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="delta_location"
                                class="block text-sm font-medium text-gray-700"
                                >Delta Location</label
                              >
                              <select
                                id="delta_location"
                                name="delta_location"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              >
                                <option selected>Please select</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            px-4
                            py-3
                            text-left
                            sm:px-6
                            absolute
                            bottom-0
                            right-0
                            left-0
                            bg-white
                          "
                        >
                          <button
                            type="submit"
                            class="
                              inline-flex
                              justify-center
                              py-2
                              px-4
                              border border-transparent
                              shadow-sm
                              text-sm
                              font-medium
                              rounded-md
                              text-white
                              dark-green-bg
                              hover-light-green-bg
                              focus:outline-none
                              focus:ring-0
                            "
                          >
                            Save
                          </button>
                          <button
                            class="
                              inline-flex
                              justify-center
                              py-2
                              px-4
                              border border-transparent
                              shadow-sm
                              text-sm
                              font-medium
                              rounded-md
                              text-green
                              ml-3
                              border-green-600
                              focus:outline-none
                              focus:ring-0
                            "
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { mapActions, mapGetters } from "vuex";

const team = [
  {
    name: "Tom Cook",
    email: "tomcook@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    email: "whitneyfrancis@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    email: "leonardkrasner@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    email: "floydmiles@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  computed: {
    ...mapGetters(["showPatientModal"]),
  },
  methods: {
    ...mapActions(["setPatientModal"]),
  },
  data() {
    return {
      team,
    };
  },
};
</script>