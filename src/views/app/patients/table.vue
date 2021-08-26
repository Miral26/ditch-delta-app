<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="column in columns"
                  :key="column.id"
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  {{ column.title }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in people" :key="person.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="person.image"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ person.dob }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.phone }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.email }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.group }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" class="text-green-600 hover:text-green-900"
                    >View</a
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" class="text-green-600 hover:text-green-900"
                    >Add</a
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="javascript:void(0)"
                    @click="() => openModal('claim')"
                    class="text-green-600 hover:text-green-900"
                    >Create</a
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="javascript:void(0)"
                    @click="() => openModal('claim')"
                    class="text-green-600 hover:text-green-900 pr-3"
                    >Edit</a
                  >
                  <a
                    href="javascript:void(0)"
                    @click="() => openModal('confirmation')"
                    class="text-red-600 hover:text-red-900"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ClaimSideView
      :openModal="showClaimModal"
      :closeModal="() => closeModal('claim')"
    />
    <AlertModal
      :openModal="showConfirmationModal"
      :closeModal="() => closeModal('confirmation')"
    />
  </div>
</template>

<script>
import ClaimSideView from "../../../components/claimSideView";
import AlertModal from "../../../components/alertModal";

const columns = [
  {
    id: 1,
    title: "Name",
    name: "name",
  },
  {
    id: 2,
    title: "Date of Birth",
    name: "dob",
  },
  {
    id: 3,
    title: "Phone",
    name: "phone",
  },
  {
    id: 4,
    title: "Email",
    name: "email",
  },
  {
    id: 5,
    title: "Group #",
    name: "group",
  },
  {
    id: 6,
    title: "Subscriber Info",
    name: "subscriber_info",
  },
  {
    id: 7,
    title: "Customer Card",
    name: "customer_card",
  },
  {
    id: 8,
    title: "Claim",
    name: "claim",
  },
  {
    id: 9,
    title: "Action",
    name: "action",
  },
];

const people = [
  {
    id: 1,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default {
  components: { ClaimSideView, AlertModal },
  data() {
    return {
      people,
      columns,
      showClaimModal: false,
      showConfirmationModal: false,
    };
  },
  methods: {
    openModal(type) {
      switch (type) {
        case "claim":
          this.showClaimModal = true;
          break;
        case "confirmation":
          this.showConfirmationModal = true;
          break;
      }
    },
    closeModal(type) {
      switch (type) {
        case "claim":
          this.showClaimModal = false;
          break;
        case "confirmation":
          this.showConfirmationModal = false;
          break;
      }
    },
  },
};
</script>