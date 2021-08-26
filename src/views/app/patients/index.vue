<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="font-semibold text-xl">Patients</h3>
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
                bg-green-600
                hover:bg-green-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
              "
              @click="() => setPatientModal(true)"
            >
              <PlusSmIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Create
            </button>
            <section class="mt-8 pb-16">
              <Table />
            </section>
          </div>
        </main>
      </div>
    </div>
    <PatientSideView />
  </div>
</template>

<script>
import Table from "./table.vue";
import PatientSideView from "../../../components/patientSideView";
import { PlusSmIcon } from "@heroicons/vue/outline";
import { mapActions } from "vuex";

export default {
  components: { Table, PatientSideView, PlusSmIcon },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setPatientModal"]),
  },
};
</script>