<template>
  <div class="relative h-screen bg-gray-50 flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="font-semibold text-xl">Insights</h3>
            <div class="mt-8">
              <div class="-mx-3 relative z-10">
                <div class="px-3">
                  <div class="bg-white p-5 rounded-lg shadow h-full">
                    <h3 class="text-md">This Year Sales</h3>
                    <v-chart
                      id="echartbar"
                      :options="echartBar"
                      :autoresize="true"
                    ></v-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { echartBar } from "../../../data/echarts";
export default {
  name: "Insights",
  data() {
    return {
      echartBar,
    };
  },
};
</script>


<style lang="scss" scoped>
.echarts {
  width: 100%;
}
</style>