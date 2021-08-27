<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <UsersTable />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UsersTable from "./new-user-table.vue";

export default {
  name: "Users",
  computed: {
    ...mapGetters(["showUserModal"]),
  },
  data() {},
  components: { UsersTable },
  methods: {
    ...mapActions(["setUserModal"]),
  },
};
</script>