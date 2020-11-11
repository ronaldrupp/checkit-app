<template>
  <div>
    <router-link class="router-a" to="/feedback">
      <div class="assignment-item">
        <div class="left-sec">
          <div>
            <h5 class="cardheader">
              {{myfeedbacks.title}}
            </h5>
            <p>{{myfeedbacks.date}}</p>
          </div>
        </div>
        <div class="users">
          <UsersIcon />
          <p class="nmbr">{{myfeedbacks.attendees}}</p>
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
      type: Array 
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
.nmbr {
  font-size: 14px !important;
  font-weight: 500;
  margin-left: .25vw !important;
}
</style>