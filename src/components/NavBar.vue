<template>
  <div
    class="flex z-50 lg:w-64 md:w-auto md:shadow-none md:p-2 md:py-6 shadow-lg md:justify-start md:static md:border-r md:dark:border-gray-700 lg:items-start md:flex-col md:h-full items-center select-none h-12 fixed flex-row bottom-0 w-full justify-evenly"
  >
    <router-link
      to="/class"
      class=" mb-5 hidden md:block md:w-8 lg:ml-4 md:rounded-lg dark:hover:bg-gray-800 flex-grow md:flex-grow-0"
    >
      <img src="@/assets/logo_blue.svg" class="" />
    </router-link>
    <nav-item :title="$t('navbar.class')" redirectTo="/class">
      <template v-slot:icon>
        <grid-icon size="1.5x" class="custom-class"></grid-icon>
      </template>
    </nav-item>
    <nav-item
      :title="$t('navbar.savedFeedbacks')"
      redirectTo="/savedfeedbacks"
      v-if="isTeacher"
    >
      <template v-slot:icon>
        <edit-3-icon size="1.5x" class="custom-class"></edit-3-icon>
      </template>
    </nav-item>

    <button
      @click="showActions = !showActions"
      v-if="isTeacher"
      class="md:flex-grow-0 relative w-full transition ease-in-out active:scale-50 md:w-full justify-center md:justify-start flex-grow duration-100 md:hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-3 rounded-full lg:rounded-lg md:mt-4 hover:bg-grey-100 md:dark:hover:bg-gray-800 "
    >
      <plus-icon size="1.5x" class="custom-class"></plus-icon>
      <p
        class="hidden lg:block lg:ml-3 text-l font-semibold overflow-hidden truncate"
      >
        {{ $t("navbar.createFeedback") }}
      </p>
      <div
        class="bottom-0 absolute md:top-0 z-50 left-0 border border-gray-900 dark:bg-gray-900 flex flex-col"
        v-if="showActions"
      >
        <router-link
          to="/create/swipe"
          class="p-4 md:hover:bg-gray-200 md:hover:text-black bg-white dark:bg-gray-900 "
          >SWIPE</router-link
        >
        <router-link
          to="/create/classic"
          class="p-4 md:hover:bg-gray-200 md:hover:text-black bg-white dark:bg-gray-900"
          >CLASSIC</router-link
        >
      </div>
    </button>
    <nav-item :title="`${$store.state.user.name}`" redirectTo="/profile">
      <template v-slot:icon>
        <user-icon size="1.5x" class="custom-class"></user-icon>
      </template>
    </nav-item>
  </div>
</template>

<script>
import {
  // MessageCircleIcon,
  UserIcon,
  GridIcon,
  PlusIcon,
  Edit3Icon,
} from "vue-feather-icons";
import NavItem from "./NavItem";
export default {
  components: {
    // MessageCircleIcon,
    GridIcon,
    PlusIcon,
    UserIcon,
    NavItem,
    Edit3Icon,
  },
  data() {
    return {
      showActions: false,
    };
  },
  computed: {
    isTeacher() {
      if (this.$store.state.user.isTeacher) return true;
      else return false;
    },
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
