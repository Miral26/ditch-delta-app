<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center">
              <h3 class="font-semibold text-xl">Locations</h3>
              <button
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
                  dark-green-bg
                  hover-light-green-bg
                  focus:outline-none
                  focus:ring-0
                "
                @click="() => setLocationModal(true)"
              >
                Create
              </button>
            </div>
            <section class="mt-8 pb-16">
              <Table />
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Table from "./table.vue";
export default {
  components: { Table },
  data() {
    return {
      showClaimModal: false,
    };
  },
  methods: {
    ...mapActions(["setLocationModal"]),
  },
};
</script>