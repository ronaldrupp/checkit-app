<template>
  <div>
    <router-link to="/testurlinfo">
      <div class="flex items-center justify-between mt-12 hover:bg-gray-100 min-w-0  dark:hover:bg-gray-800">
        <div class="flex items-center">
          <div class="flex">
            <UserIcon size="2x" />
          </div>
          <div class="flex ml-4">
            <div>
              <h1 class="text-base font-semibold">{{this.$t('profile.info')}}</h1>
              <p class="text-sm">{{this.$t('profile.infoDescr')}}</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <ChevronRightIcon size="2x" />
        </div>
      </div>
    </router-link>
    <router-link to="/testurlsettings">
      <div class="flex items-center justify-between mt-10 hover:bg-gray-100 min-w-0  dark:hover:bg-gray-800">
        <div class="flex">
          <SettingsIcon size="2x" />
          <div class="flex ml-4">
            <div>
              <h1 class="text-base font-semibold">{{this.$t('profile.settings')}}</h1>
              <p class="text-sm">{{this.$t('profile.settingsDescr')}}</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <ChevronRightIcon size="2x" />
        </div>
      </div>
    </router-link>
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
