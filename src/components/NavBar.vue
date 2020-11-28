<template>
  <div
    class="flex overflow-y-scroll lg:w-64 md:w-auto md:shadow-none md:p-2 md:py-6 dark:bg-gray-900 shadow-lg bg-white md:justify-start md:h-screen md:static md:border-r md:dark:border-gray-700 lg:items-start md:flex-col md:h-full items-center select-none h-16 fixed flex-row bottom-0 w-full justify-evenly"
    style="padding-bottom:env(safe-area-inset-bottom, 30px)"
  >
    <router-link
      to="/class"
      class=" mb-5 hidden md:block md:w-8 lg:ml-4 rounded-full dark:hover:bg-gray-800"
    >
      <img src="@/assets/logo_blue.svg" class="" />
    </router-link>
    <router-link
      to="/class"
      class="duration-100 hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-grey-100 dark:hover:bg-gray-800 "
    >
      <grid-icon size="2x" class="custom-class"></grid-icon>
      <p class="hidden lg:block lg:ml-3 text-xl font-semibold">Class</p>
    </router-link>
    <router-link
      to="/feedbacks"
      class="duration-100 hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 dark:hover:bg-gray-800"
    >
      <message-circle-icon size="2x" class="custom-class"></message-circle-icon>
      <p class="hidden lg:block lg:ml-3 text-xl font-semibold">Recent Feedbacks</p>
    </router-link>

    <!-- <router-link
      to="/my-questions-and-answers"
      class="duration-100 hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-grey-100 dark:hover:bg-gray-800 "
    >
      <list-icon size="2x" class="custom-class"></list-icon>
      <p class="hidden lg:block lg:ml-3 text-xl">Templates</p>
    </router-link> -->
    <router-link
      to="/create"
      class="duration-100 hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-grey-100 dark:hover:bg-gray-800 "
    >
      <plus-icon size="2x" class="custom-class"></plus-icon>
      <p class="hidden lg:block lg:ml-3 text-xl font-semibold">Create Feedback</p>
    </router-link>
    <router-link
      to="/profile"
      class="duration-100 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      <div class="profile-img">
        <img :src="$store.state.user.hK" class="icon" />
      </div>
      <p class="hidden lg:block lg:ml-3 text-xl font-semibold" v-if="$store.state.user">
        {{ $store.state.user.Ad }}
      </p>
    </router-link>
  </div>
</template>

<script>
import { MessageCircleIcon, GridIcon, PlusIcon } from "vue-feather-icons";
// import NavItem from "./NavItem";
export default {
  components: {
    MessageCircleIcon,
    GridIcon,
    PlusIcon,
    // NavItem,
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
