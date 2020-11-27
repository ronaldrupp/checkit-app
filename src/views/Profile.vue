<template>
  <div>
    <Header title="Profile" BtnTitle="Logout" :BtnMethod="logout" />
    <div class="flex flex-col">
      <ProfilePageHeader />
      <ProfileSettings class="ml-4 mt-12 lg:w-1/3" />
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfileSettings from "../components/ProfileSettings";

export default {
  components: {
    Header,
    ProfilePageHeader,
    ProfileSettings,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped></style>
