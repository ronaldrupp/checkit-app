<template>
  <div class="flex flex-col">
    <ProfilePageHeader />
    <ProfileSettings class="mt-12" />
    <!-- <button
      @click="
        $store.dispatch('logout');
        $router.replace('/login');
      "
    >
      Logout
    </button> -->
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
button {
  border: none;
  background-color: var(--primary-color);
  height: 2.5rem;
  border-radius: 20px;
  color: white;
  font-weight: 800;
  width: 90%;
}
</style>
