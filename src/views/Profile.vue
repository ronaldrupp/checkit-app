<template>
  <div class="md:border-r md:dark:border-gray-700">
    <Header :title="`${$store.state.user.name}`" :BtnMethod1="logout">
      <template v-slot:btn1> <LogOutIcon /></template
    ></Header>
    <div class="flex flex-col p-2">
      <ProfilePageHeader />
      <h5 class="text-right mt-6 p-4">App Version: {{packageJson.version}} </h5>
    </div>
  </div>
</template>

<script>
import { LogOutIcon } from "vue-feather-icons";
import Header from "./../components/Header";
import ProfilePageHeader from "../components/ProfilePageHeader";
import PackageJson from "./../../package.json";

export default {
  data() {
    return {
      packageJson: PackageJson
    }
  },
  components: {
    Header,
    ProfilePageHeader,
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
