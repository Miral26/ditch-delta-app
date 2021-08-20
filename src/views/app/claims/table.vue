<template>
  <div>
    <div class="main-content table-list">
      <div class="wrapper"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: [],
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "full_name",
        },
        {
          label: "Charge Date",
          field: "charge_date",
        },
        {
          label: "Payment Amount",
          field: "amount",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Notes",
          field: "notes",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
      rows: [
        {
          full_name: "Monik",
          charge_date: new Date(),
          amount: "10",
          status: "Pending",
          notes: "Nothing",
        },
      ],
    };
  },

  computed: mapGetters([]),

  methods: {
    ...mapActions([]),
  },
};
</script>