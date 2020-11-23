<template>
  <div>
    <Header
      title="Profile"
      BtnTitle="Logout"
      :BtnMethod="logout"
    />
  </div>
</template>

<script>
import Header from "./../components/Header";

export default {
  components: {
    Header,
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
