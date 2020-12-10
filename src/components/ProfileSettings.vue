<template>
  <div class="mt-12">
    <profile-item
      :title="$t('profile.info')"
      :description="$t('profile.info')"
      redirectTo="/profile/user"
    >
      <user-icon></user-icon>
    </profile-item>
    <profile-item
      :title="$t('profile.settings')"
      :description="$t('profile.settingsDescr')"
      redirectTo="/profile/settings"
    >
      <settings-icon></settings-icon>
    </profile-item>
  </div>
</template>

<script>
import { UserIcon, SettingsIcon } from "vue-feather-icons";
import ProfileItem from "./ProfileItem.vue";
export default {
  components: {
    UserIcon,
    SettingsIcon,
    ProfileItem,
  },
};
</script>

<style lang="scss" scoped></style>
