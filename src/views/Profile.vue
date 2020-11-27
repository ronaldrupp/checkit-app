<template>
  <div class="flex flex-col">
    <ProfilePageHeader />
    <ProfileSettings class="ml-4 mt-12 lg:w-1/3" />
  </div>
</template>

<script>
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfileSettings from "../components/ProfileSettings";
export default {
  components: {
    ProfilePageHeader,
    ProfileSettings
  },
};
</script>

<style scoped>

</style>
