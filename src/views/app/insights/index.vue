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
                <div class="flex flex-wrap -mx-3 relative z-10">
                  <div class="px-3 w-7/12">
                    <div class="bg-white p-5 rounded-lg shadow h-full">
                      <h3 class="text-md">This Year Sales</h3>
                    </div>
                  </div>
                  <div class="w-5/12 px-3">
                    <div class="bg-white p-5 rounded-lg shadow h-full">
                      <h3 class="text-md">Sales by Countries</h3>
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

export default {
  name: "Insights",
};
</script>