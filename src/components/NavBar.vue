<template>
  <div
    class="flex overflow-hidden z-50 lg:w-64 md:w-auto md:shadow-none md:p-2 md:py-6 dark:bg-black shadow-lg bg-white md:justify-start md:h-screen md:static md:border-r md:dark:border-gray-700 lg:items-start md:flex-col md:h-full items-center select-none h-16 fixed flex-row bottom-0 w-full justify-evenly"
    style="padding-bottom:env(safe-area-inset-bottom);backdrop-filter: saturate(180%) blur(8px); -webkit-backdrop-filter: saturate(180%) blur(8px)"
  >
    <router-link
      to="/class"
      class=" mb-5 hidden md:block md:w-8 lg:ml-4 md:rounded-lg dark:hover:bg-gray-800 flex-grow md:flex-grow-0"
    >
      <img src="@/assets/logo_blue.svg" class="" />
    </router-link>
    <nav-item :title="$t('navbar.class')" redirectTo="/class">
      <grid-icon size="1.5x" class="custom-class"></grid-icon>
    </nav-item>
    <nav-item :title="$t('navbar.recentFeedbacks')" redirectTo="/feedbacks">
      <message-circle-icon
        size="1.5x"
        class="custom-class"
      ></message-circle-icon>
    </nav-item>
    <nav-item :title="$t('navbar.createFeedback')" redirectTo="/create">
      <plus-icon size="1.5x" class="custom-class"></plus-icon>
    </nav-item>
    <nav-item :title="`${$store.state.user.firstName} ${$store.state.user.lastName}`" redirectTo="/profile">
      <user-icon size="1.5x" class="custom-class"></user-icon>
    </nav-item>
  </div>
</template>

<script>
import {
  MessageCircleIcon,
  UserIcon,
  GridIcon,
  PlusIcon,
} from "vue-feather-icons";
import NavItem from "./NavItem";
export default {
  components: {
    MessageCircleIcon,
    GridIcon,
    PlusIcon,
    UserIcon,
    NavItem,
  },
};
</script>

<style scoped>
.profile-img {
  width: 2rem;
  height: 2rem;
}
.icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5rem;
}
.nav-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  transition: 0.2s;
  margin: 1rem 0rem;
  color: black;
}
.nav-item:hover {
  background-color: rgb(223, 246, 255);
  color: var(--primary-color);
}
.nav-title {
  margin: 0rem 0rem 0rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
@media (max-width: 768px) {
  .nav-container {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0px;
  }
  .nav-item {
    padding: 0.5rem;
  }
}
</style>
