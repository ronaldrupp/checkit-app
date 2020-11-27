<template>
  <div>
    <router-link :to="`/feedback/${feedback.id}`">
      <div
        class="border-b hover:bg-gray-100 min-w-0 flex dark:hover:bg-gray-800 md:dark:border-gray-700  items-center justify-between px-4 py-8 border-solid"
      >
        <div class="flex min-w-0 ">
          <div class="flex flex-col min-w-0 ">
            <!-- <p class="border">{{ feedback.grade }}</p> -->
            <p class="truncate">
              {{ feedback.title }}
            </p>
            <p class="truncate">{{ feedback.date }}</p>
          </div>
        </div>
        <div class="flex">
          <UsersIcon />
          <p class="ml-1 ">{{ feedback.attendees }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { UsersIcon } from "vue-feather-icons";
export default {
  components: {
    UsersIcon,
  },
  props: {
    feedback: {
      type: Object,
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
