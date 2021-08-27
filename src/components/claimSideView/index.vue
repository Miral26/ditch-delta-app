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
  <TransitionRoot as="template" :show="showClaimModal">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden z-50"
      @close="() => setClaimModal(false)"
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
                          @click="() => setClaimModal(false)"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div class="space-y-1">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          Claim Information
                        </DialogTitle>
                      </div>
                    </div>
                  </div>

                  <div class="px-6 pt-6 pb-16">
                    <h5>Create New Claim</h5>
                    <form action="#" method="POST">
                      <div class="overflow-hidden sm:rounded-md">
                        <div class="py-5 bg-white">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="patient"
                                class="block text-sm font-medium text-gray-700"
                                >Patient*</label
                              >
                              <select
                                id="patient"
                                name="patient"
                                autocomplete="patient"
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="status"
                                class="block text-sm font-medium text-gray-700"
                                >Status*</label
                              >
                              <select
                                id="status"
                                name="status"
                                autocomplete="status"
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="appointment_date"
                                class="block text-sm font-medium text-gray-700"
                                >Appointment Date*</label
                              >
                              <input
                                type="text"
                                name="appointment_date"
                                id="appointment_date"
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
                                for="appointment_location"
                                class="block text-sm font-medium text-gray-700"
                                >Appointment Location</label
                              >
                              <select
                                id="appointment_location"
                                name="appointment_location"
                                autocomplete="appointment_location"
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="charge_date"
                                class="block text-sm font-medium text-gray-700"
                                >Charge Date</label
                              >
                              <input
                                type="text"
                                name="charge_date"
                                id="charge_date"
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
                                for="payment_amount"
                                class="block text-sm font-medium text-gray-700"
                                >Payment Amount</label
                              >
                              <select
                                id="payment_amount"
                                name="payment_amount"
                                autocomplete="payment_amount"
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="notes"
                                class="block text-sm font-medium text-gray-700"
                                >Notes</label
                              >
                              <textarea
                                id="notes"
                                name="notes"
                                rows="7"
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
                                placeholder="you@example.com"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <div class="col-span-3">
                                <label
                                  class="
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                  "
                                >
                                  File Attachments
                                </label>
                                <div
                                  class="
                                    mt-1
                                    border-2 border-gray-300 border-dashed
                                    rounded-md
                                    px-6
                                    pt-6
                                    pb-7
                                    flex
                                    justify-center
                                  "
                                >
                                  <div class="space-y-1 text-center">
                                    <svg
                                      class="mx-auto h-12 w-12 text-gray-400"
                                      stroke="currentColor"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                      <label
                                        for="file-upload"
                                        class="
                                          relative
                                          cursor-pointer
                                          bg-white
                                          rounded-md
                                          font-medium
                                          text-indigo-600
                                          hover:text-indigo-500
                                          focus-within:outline-none
                                          focus-within:ring-2
                                          focus-within:ring-offset-2
                                          focus-within:ring-indigo-500
                                        "
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          class="sr-only"
                                        />
                                      </label>
                                      <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            px-4
                            py-3
                            text-right
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
                              text-green
                              ml-3
                              border-green-600
                              hover:bg-green-700
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
  props: { openModal: Boolean, closeModal: Function },
  computed: {
    ...mapGetters(["showClaimModal"]),
  },
  methods: {
    ...mapActions(["setClaimModal"]),
  },
  data() {
    return {
      team,
    };
  },
};
</script>