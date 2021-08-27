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
                    {{ person.address }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.poc }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.phone }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ person.bank }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="javascript:void(0)"
                    @click="() => setLocationModal(true)"
                    class="dark-green-text pr-3"
                    >Edit</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <LocationSideView />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LocationSideView from "../../../components/locationSideView";

const columns = [
  {
    id: 1,
    title: "Name",
    name: "name",
  },
  {
    id: 2,
    title: "Address",
    name: "address",
  },
  {
    id: 3,
    title: "POC",
    name: "poc",
  },
  {
    id: 4,
    title: "Phone",
    name: "phone",
  },
  {
    id: 5,
    title: "Bank",
    name: "bank",
  },
  {
    id: 6,
    title: "",
    name: "action",
  },
];

const people = [
  {
    id: 1,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default {
  components: { LocationSideView },
  data() {
    return {
      people,
      columns,
      showLocationModal: false,
    };
  },
  methods: {
    ...mapActions(["setLocationModal"]),
  },
};
</script>