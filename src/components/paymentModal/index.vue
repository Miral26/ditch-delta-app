<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="showPaymentModal">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="() => setPaymentModal(false)"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block
          sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8
              sm:align-middle
              sm:max-w-4xl
              sm:w-full
              sm:p-6
            "
          >
            <DialogTitle
              as="h3"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              Add Payment Details
              <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    text-gray-400
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-0
                  "
                  @click="() => setPaymentModal(false)"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </DialogTitle>
            <div class="flex flex-wrap -mx-4 items-center">
              <div class="w-5/12 px-4">
                <div class="dark-green-bg rounded-xl shadow-xl p-6">
                  <h4 class="text-right text-2xl font-semibold mb-12">VISA</h4>
                  <h5 class="text-2xl">1456 1298 6574 1287</h5>
                  <div class="flex justify-between mt-3 text-xl">
                    <h6>JACK SPARROW</h6>
                    <h6>02/25</h6>
                  </div>
                </div>
              </div>
              <div class="w-7/12 px-3">
                <div class="px-3">
                  <h4 class="mb-4">Payment Details</h4>
                  <div class="mb-3">
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                      >Name on Card</label
                    >
                    <input
                      type="text"
                      name="name"
                      id="name"
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
                  <div class="mb-3">
                    <label
                      for="number"
                      class="block text-sm font-medium text-gray-700"
                      >Card Number</label
                    >
                    <input
                      type="text"
                      name="number"
                      id="number"
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
                  <div class="mb-3">
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-1/3 px-3">
                        <div class="mb-3">
                          <label
                            for="valid_through"
                            class="block text-sm font-medium text-gray-700"
                            >Valid Through</label
                          >
                          <input
                            type="text"
                            name="valid_through"
                            id="valid_through"
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
                      </div>
                      <div class="w-1/3 px-3">
                        <div class="mb-3">
                          <label
                            for="cvv"
                            class="block text-sm font-medium text-gray-700"
                            >CVV</label
                          >
                          <input
                            type="text"
                            name="cvv"
                            id="cvv"
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
                      </div>
                      <div class="w-1/3 px-3">
                        <div class="mb-3">
                          <label
                            for="postal_code"
                            class="block text-sm font-medium text-gray-700"
                            >Postal Code</label
                          >
                          <input
                            type="text"
                            name="postal_code"
                            id="postal_code"
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
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-6 space-x-3">
                    <button
                      type="button"
                      class="
                        inline-flex
                        justify-center
                        rounded-md
                        border border-transparent
                        shadow-sm
                        px-4
                        py-2
                        text-base
                        font-medium
                        text-white
                        dark-green-bg
                        hover-light-green-bg
                        focus:outline-none
                        focus:ring-0
                        sm:col-start-2
                        sm:text-sm
                      "
                      @click="() => setPaymentModal(false)"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      class="
                        mt-3
                        inline-flex
                        justify-center
                        rounded-md
                        border border-gray-300
                        shadow-sm
                        px-4
                        py-2
                        bg-white
                        text-base
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-0
                        sm:mt-0
                        sm:col-start-1
                        sm:text-sm
                      "
                      @click="() => setPaymentModal(false)"
                      ref="cancelButtonRef"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
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
    ...mapGetters(["showPaymentModal"]),
  },
  methods: {
    ...mapActions(["setPaymentModal"]),
  },
};
</script>