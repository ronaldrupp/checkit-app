<template>
  <div class="flex items-start">
    <ProfilePageHeader/>
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
import ProfilePageHeader from "../components/ProfilePageHeader"
export default {
  components: {
    ProfilePageHeader,
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
