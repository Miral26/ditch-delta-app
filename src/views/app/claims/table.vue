<template>
  <div>
    <div class="main-content table-list">
      <div class="wrapper">
        <vue-good-table
          :columns="columns"
          :search-options="{
            enabled: true,
            placeholder: 'Search',
            selectionInfoClass: ' flex-column flex-sm-row',
          }"
          :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 50,
            perPageDropdown: [50, 100, 500],
          }"
          styleClass="tableOne vgt-table"
          :selectOptions="{
            enabled: false,
            selectionInfoClass: 'table-alert__box',
          }"
          :rows="[]"
        >
          <div slot="table-actions" class="mb-3">
            <b-button variant="primary" class="btn-rounded d-sm-block d-none"
              >Create</b-button
            >
          </div>

          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'action'">
              <!-- <a
                v-b-tooltip.hover
                class="o-hidden d-inline-block c-pointer"
                title="Charge Now"
                v-if="!props.row.charge && props.row.status === 'COMPLETED'"
              >
                <i
                  class="i-Start text-25 text-info mr-2"
                  @click="
                    () => {
                      charge(props.row);
                    }
                  "
                ></i>
              </a>-->
              <a
                v-b-tooltip.hover
                class="o-hidden d-inline-block c-pointer"
                title="Attachment Preview"
                v-if="props.row.attachments && props.row.attachments.length"
              >
                <i class="i-Files text-25 text-info mr-2"></i>
              </a>
              <a
                v-b-tooltip.hover
                class="o-hidden d-inline-block c-pointer"
                title="Edit"
              >
                <i class="i-Eraser-2 text-25 text-info mr-2"></i>
              </a>
              <a
                v-b-tooltip.hover
                class="o-hidden d-inline-block c-pointer"
                title="Delete"
              >
                <i class="i-Close-Window text-25 text-danger"></i>
              </a>
            </span>

            <span v-else-if="props.column.field == 'amount'">{{
              props.row.amount > 0 ? `$${props.row.amount}` : ""
            }}</span>

            <span v-else-if="props.column.field == 'status'">
              <a
                href="#"
                class="o-hidden d-inline-block"
                v-b-tooltip.hover
                title="Change to Pending"
              >
                <b-badge
                  variant="success"
                  class="text-white p-1"
                  v-if="props.row.status === 'COMPLETED'"
                  >{{ props.row.status }}</b-badge
                >
              </a>
              <a
                href="#"
                class="o-hidden d-inline-block"
                v-b-tooltip.hover
                title="Change to Completed"
              >
                <b-badge
                  variant="info"
                  class="text-white p-1"
                  v-if="props.row.status === 'PENDING'"
                  >{{ props.row.status }}</b-badge
                >
              </a>
            </span>

            <span v-else-if="props.column.field == 'notes'">
              <a class="o-hidden d-inline-block">
                <b-button size="sm" class="btn-radius" variant="primary"
                  >View</b-button
                >
              </a>
            </span>
            <!-- <span v-else-if="props.column.field == 'appointment_loc'">
              <a class="o-hidden d-inline-block">
                <b-button
                  size="sm"
                  class="btn-radius"
                  variant="primary"
                  @click="
                    () => {
                      setRecord(props.row);
                      $bvModal.show('appointment-location-view');
                    }
                  "
                >
                  View
                </b-button>
              </a>
            </span>-->
            <!-- <span v-else-if="props.column.field == 'customer_card'">
              <a class="o-hidden d-inline-block">
                <b-button
                  size="sm"
                  class="btn-radius mr-2"
                  variant="primary"
                  @click="
                    () => {
                      setRecord(props.row);
                      $bvModal.show('customer-card-add');
                    }
                  "
                >
                  Add
                </b-button>
              </a>
              <a
                class="o-hidden d-inline-block"
                v-if="props.row.cards && props.row.cards.length > 0"
              >
                <b-button
                  size="sm"
                  class="btn-radius"
                  variant="primary"
                  @click="
                    () => {
                      setRecord(props.row);
                      $bvModal.show('customer-card-view');
                    }
                  "
                >
                  View
                </b-button>
              </a>
            </span>-->
            <!-- <span
              v-else-if="props.column.field == 'charge'"
              class="d-block text-center"
            >
              <i
                class="fa fa-clock-o fa-2x text-light"
                aria-hidden="true"
                v-if="title === 'Pending'"
                title="Payment is Pending"
                v-b-tooltip.hover
              ></i>
              <i
                class="fa fa-check-circle-o fa-2x text-success"
                aria-hidden="true"
                v-if="title === 'Completed'"
                title="Card Charged"
                v-b-tooltip.hover
              ></i>
            </span>-->
          </template>
        </vue-good-table>
      </div>
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
        // {
        //   label: "Email",
        //   field: "email",
        // },
        // {
        //   label: "Customer Card",
        //   field: "customer_card",
        // },
        {
          label: "Notes",
          field: "notes",
        },
        {
          label: "Action",
          field: "action",
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