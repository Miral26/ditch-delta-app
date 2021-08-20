<template>
  <div class="shadow-sm mt-6 rounded overflow-hidden bg-white">
    <div class="bg-gradient-to-r from-green-400 to-blue-500 px-6 pt-8 pb-20">
      <div class="flex -mx-4 flex-wrap">
        <div class="w-1/3 px-4">
          <h4 class="text-white text-xl">Users</h4>
        </div>
        <div class="w-1/3">
          <input
            id="search-field"
            name="search-field"
            class="
              block
              w-full
              py-2
              px-4
              border
              rounded-3xl
              bg-transparent
              placeholder-gray-500
              focus:outline-none
              focus:ring-0
              sm:text-sm
              text-white
            "
            placeholder="Search transactions"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="px-6 pb-6">
      <div class="flex flex-wrap -mx-3 -mt-10 relative z-10">
        <div class="px-3 w-3/12">
          <div class="bg-white p-5 rounded-lg shadow h-full">
            <button
              type="button"
              class="
                text-center
                px-4
                py-2
                border border-solid border-black
                text-xs
                w-full
                rounded
                shadow-sm
                text-black
                uppercase
                font-normal
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              Add User
            </button>
            <ul class="mt-6">
              <li class="px-4 py-3 border-t border-solid border-gray text-sm">
                Cras justo odio
              </li>
              <li class="px-4 py-3 border-t border-solid border-gray text-sm">
                Dapibus ac facilisis in
              </li>
              <li class="px-4 py-3 border-t border-solid border-gray text-sm">
                Morbi leo risus
              </li>
            </ul>
          </div>
        </div>
        <div class="w-9/12 px-3">
          <div class="bg-white p-5 rounded-lg shadow w-full h-full">Table</div>
        </div>
      </div>
    </div>
  </div>
</template>