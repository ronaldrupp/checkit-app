<template>
  <div>
    <router-link :to="navigateTo">
      <div
        class="border-b transition duration-100 hover:bg-gray-100 min-w-0 flex dark:hover:bg-gray-800 dark:border-gray-800 items-center justify-between px-4 py-8 border-solid"
      >
        <div class="flex min-w-0 ">
          <div class="flex flex-col min-w-0 ">
            <!-- <p class="border">{{ feedback.grade }}</p> -->
            <h2 class="text-base font-semibold truncate">
              {{ feedback.name }}
            </h2>
            <p class="truncate text-sm">
              {{ feedback.createdAt | formatDate }} <span v-if="feedback.updatedAt" class="text-gray-500">Updated at {{feedback.updatedAt | formatDate}}</span>
            </p>
          </div>
        </div>
        <div class="flex items-center" v-if="feedback.answers">
          <UsersIcon size="1x" />
          <p class="ml-2 ">{{ feedback.answers.length }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en";
import { UsersIcon } from "vue-feather-icons";
export default {
  components: {
    UsersIcon,
  },
  props: {
    feedback: {
      type: Object,
    },
    courseId: String,
    navigateTo: String
  },
  filters: {
    formatDate: function(value) {
      return dayjs(value)
        .locale(navigator.language)
        .format("dd DD. MMMM YYYY HH:mm");
    },
  },
};
</script>

<style scoped>
.cardheader {
  font-weight: 500;
  margin: 0;
}
.router-a:hover {
  text-decoration: none;
}
.assignment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 5rem;
  padding: 5px 20px;
  border-radius: 12px;
  margin: 2vh auto;
  align-self: center;
  border: 1px solid #bcbcbc;
}
.assignment-item p {
  margin: 0;
  font-size: 14px;
}
.assignment-item p:nth-child(2) {
  font-size: 12px;
}
.left-sec {
  display: contents !important;
}
.users {
  display: flex;
  align-items: center;
}
</style>
