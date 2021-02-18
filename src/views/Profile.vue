<template>
  <div class="md:border-r md:dark:border-gray-700">
    <Header :title="`${$store.state.user.name}`" :BtnMethod1="logout">
      <template v-slot:btn1> <LogOutIcon /></template
    ></Header>
    <div class="flex flex-col p-2">
      <ProfilePageHeader />
      <ProfileSettings class="lg:w-1/3" />
    </div>
  </div>
</template>

<script>
import { LogOutIcon } from "vue-feather-icons";
import Header from "./../components/Header";
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfileSettings from "../components/ProfileSettings";

export default {
  components: {
    Header,
    ProfilePageHeader,
    ProfileSettings,
    LogOutIcon,
  },
  metaInfo() {
    return {
      title: "Profil",
    };
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
