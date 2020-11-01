<template>
  <div class="container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/logo_blue.svg" class="logo" />
    </router-link>
    <div class="nav-container">
      <router-link to="/" class="nav-item">
        <img src="@/assets/logo_blue.svg" class="icon" />
        <p class="nav-title">My Feedbacks</p>
      </router-link>
      <router-link to="/my-questions-and-answers" class="nav-item">
        <img src="@/assets/logo_blue.svg" class="icon" />
        <p class="nav-title">My Questions & Answers</p>
      </router-link>
      <router-link to="/profile" class="nav-item">
        <img src="@/assets/logo_blue.svg" class="icon" />
        <p class="nav-title">{{ $store.state.user.userName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
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
.icon {
  width: 25px;
}
.nav-container {
  display: flex;
  margin-top: 2rem;
}
.nav-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 50px;
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
    height: 4rem;
    align-items: center;
    background-color: var(--background-color);
    width: inherit;
    max-width: inherit;
    box-shadow: 0px 2px 33px 5px #EAEAEA;
  }
  .nav-container {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0px;
  }
  .logo-link {
    display: none;
  }
}
@media (max-width: 1240px) {
  .nav-title {
    display: none;
  }
}
</style>
