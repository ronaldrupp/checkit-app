<template>
  <div>
      <div
        class="flex items-center justify-between sm:ml-12 lg:w-1/3 mt-12 ml-4 mr-4"
      >
        <div class="flex items-center">
          <div class="flex">
            <UserIcon size="2x" />
          </div>
          <div class="flex ml-4">
            <div>
              <h1 class="text-base font-bold">Edit profile information</h1>
              <p class="text-sm">Description</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <ChevronRightIcon size="2x" />
        </div>
      </div>
    <div
      class="flex items-center justify-between sm:ml-12 lg:w-1/3 mt-10 ml-4 mr-4"
    >
      <div class="flex">
        <SettingsIcon size="2x" />
        <div class="flex ml-4">
          <div>
            <h1 class="text-base font-bold">App Settings</h1>
            <p class="text-sm">Description</p>
          </div>
        </div>
      </div>
      <div class="flex">
        <ChevronRightIcon size="2x" />
      </div>
    </div>
  </div>
</template>

<script>
import { UserIcon, ChevronRightIcon, SettingsIcon } from "vue-feather-icons";
export default {
  components: {
    UserIcon,
    ChevronRightIcon,
    SettingsIcon,
  },
};
</script>

<style lang="scss" scoped></style>
