<template>
  <div>
    <router-link :to="`/feedback/${myfeedbacks.id}`">
      <div
        class="border-b hover:bg-gray-200 divide-gray-500 flex items-center justify-between px-2 py-4 border-solid"
      >
        <div class="flex">
          <div>
            <p class="">
              {{ myfeedbacks.title }}
            </p>
            <p>{{ myfeedbacks.date }}</p>
          </div>
        </div>
        <div class="flex">
          <UsersIcon />
          <p class="ml-1">{{ myfeedbacks.attendees }}</p>
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
    myfeedbacks: {
      type: Array,
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
