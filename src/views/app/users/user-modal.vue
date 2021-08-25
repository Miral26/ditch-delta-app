<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      auto-reopen="true"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="onClose"
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
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8
              sm:align-middle
              sm:max-w-md
              sm:w-full
            "
          >
            <div>
              <DialogTitle
                as="h3"
                class="text-lg leading-6 font-medium text-gray-900 p-4 border-b border-solid border-gray"
              >
                Add User
                <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="onClose">
                    <span class="sr-only">Close</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </DialogTitle>
              <div class="p-4">
                <div class="mb-3">
                  <input
                    name="search-field"
                    class="
                      block
                      w-full
                      py-2
                      px-4
                      border
                      rounded
                      bg-transparent
                      placeholder-gray-500
                      focus:outline-none
                      focus:ring-0
                      sm:text-sm
                      text-white
                    "
                    placeholder="Enter your name..."
                    type="text"
                  />
                </div>
                <div class="mb-3">
                  <input
                    name="search-field"
                    class="
                      block
                      w-full
                      py-2
                      px-4
                      border
                      rounded
                      bg-transparent
                      placeholder-gray-500
                      focus:outline-none
                      focus:ring-0
                      sm:text-sm
                      text-white
                    "
                    placeholder="Enter email"
                    type="text"
                  />
                </div>
                <div class="mb-3">
                  <input
                    name="search-field"
                    class="
                      block
                      w-full
                      py-2
                      px-4
                      border
                      rounded
                      bg-transparent
                      placeholder-gray-500
                      focus:outline-none
                      focus:ring-0
                      sm:text-sm
                      text-white
                    "
                    placeholder="Permission Level..."
                    type="text"
                  />
                </div>
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
                    bg-green-600
                    text-base
                    font-medium
                    text-white
                    hover:bg-green-700
                    focus:outline-none
                    sm:text-sm
                  "
                  @click="onClose"
                >
                  Submit
                </button>
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
import { XIcon } from '@heroicons/vue/outline'


export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon
  },
  props: {
    open: Boolean,
    onClose: Function,
  },
};
</script>