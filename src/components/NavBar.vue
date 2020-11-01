<template>
  <div class="container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/logo_blue.svg" class="logo" />
    </router-link>
    <div class="nav-container">
      <router-link to="/" class="nav-item">
        <message-circle-icon
          size="2x"
          class="custom-class"
        ></message-circle-icon>
        <p class="nav-title">Feedbacks</p>
      </router-link>
      <router-link to="/my-questions-and-answers" class="nav-item">
        <list-icon size="2x" class="custom-class"></list-icon>
        <p class="nav-title">Templates</p>
      </router-link>
      <router-link to="/profile" class="nav-item">
        <div class="profile-img">
          <img
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
            class="icon"
          />
        </div>
        <p class="nav-title" v-if="$store.state.user">{{ $store.state.user.userName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { MessageCircleIcon, ListIcon } from "vue-feather-icons";

export default {
  components: {
    MessageCircleIcon,
    ListIcon,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  z-index: 99;
  -webkit-user-select: none;
  align-items: flex-start;
  max-width: 275px;
}
.logo {
  width: 30px;
  margin: 0.5rem 1rem;
}
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
.nav-container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
  .container {
    position: fixed;
    flex-direction: row;
    bottom: 0px;
    height: 3.5rem;
    align-items: center;
    background-color: var(--background-color);
    width: inherit;
    max-width: inherit;
    box-shadow: 0px 2px 33px 5px #eaeaea;
  }
  .nav-container {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0px;
  }
  .nav-item {
    padding: 0.5rem;
  }
  .logo-link {
    display: none;
  }
}
@media (max-width: 800px) {
  .nav-title {
    display: none;
  }
}
</style>
