<template>
  <div
    class="flex md:p-2 md:py-6  md:justify-between md:h-full md:static md:border-r-2 md:w-auto md:flex-col md:h-full items-center select-none h-16 fixed flex-row bottom-0 w-full justify-evenly"
  >
    <div class="flex justify-center items-center md:flex-col lg:items-start">
      <router-link to="/" class=" mb-5 hidden md:block md:w-8 ">
        <img src="@/assets/logo_blue.svg" class="" />
      </router-link>

      <router-link
        to="/"
        class="duration-100 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-blue-500 hover:text-white"
      >
        <message-circle-icon
          size="2x"
          class="custom-class"
        ></message-circle-icon>
        <p class="hidden lg:block lg:ml-3 text-xl">Feedbacks</p>
      </router-link>
      <router-link
        to="/class"
        class="duration-100 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-blue-500 hover:text-white"
      >
        <list-icon size="2x" class="custom-class"></list-icon>
        <p class="hidden lg:block lg:ml-3 text-xl">Classes</p>
      </router-link>
      <router-link
        to="/my-questions-and-answers"
        class="duration-100 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-blue-500 hover:text-white"
      >
        <list-icon size="2x" class="custom-class"></list-icon>
        <p class="hidden lg:block lg:ml-3 text-xl">Templates</p>
      </router-link>
    </div>
    <router-link
      to="/profile"
      class="duration-100 flex items-center p-2 lg:px-4 lg:py-2 rounded-full md:mt-4 hover:bg-blue-500 hover:text-white"
    >
      <div class="profile-img">
        <img
          src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          class="icon"
        />
      </div>
      <p class="hidden lg:block lg:ml-3 text-xl" v-if="$store.state.user">
        {{ $store.state.user.userName }}
      </p>
    </router-link>
  </div>
</template>

<script>
import { MessageCircleIcon, ListIcon } from "vue-feather-icons";
// import NavItem from "./NavItem";
export default {
  components: {
    MessageCircleIcon,
    ListIcon,
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
