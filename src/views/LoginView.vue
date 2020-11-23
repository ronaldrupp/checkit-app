<template>
  <div class="w-full flex items-center jusitfy-center">
    <header class="header">
      <img class="logo" src="@/assets/logo_white.svg" />
      <a href="https://check-it.at" target="_blank" class="btn-primary bg-black text-white hover:bg-opacity-75"
        >DA-Seite</a
      >
    </header>

    <div class="left-section pr-3">
      <h1 class="font-bold text-5xl text-white uppercase">Verbessere die Qualität deines Unterrichts</h1>
      <p class="text-white mt-20">
        Eine Diplomarbeit von <br>Josef Tungl, Pascal Rengelshausen, <br>Tom Kalchmann
        und Ronald Rupp
      </p>
    </div>
    <div class="right-section">
      <LoginForm v-if="mode == 'login'" @change-mode="mode = 'register'"/>
      <RegisterForm v-else />
    </div>
  </div>
</template>

<script>
import RegisterForm from "./../components/RegisterForm";
import LoginForm from "./../components/LoginForm";
export default {
  data() {
    return {
      mode: 'login'
    }
  },
  components: {
    RegisterForm,
    LoginForm,
  },
  
};
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  color: var(--background-color);
  margin-right: 1.5rem;
  max-width: 75%;
  text-transform: uppercase;
}
.subtitle {
  max-width: 70%;
  margin: 10rem 1.5rem 0rem 0rem;
  color: var(--background-color);
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-btn {
  background-color: var(--secondary-color);
  color: var(--background-color);
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
}
.left-section {
  width: 50%;
  height: 100%;
  background: var(--linear-gradient);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
}
.right-section {
  width: 50%;
  
  background: var(--background-color);
}
.logo {
  width: 2rem;
}
@media (max-width: 768px) {
  .box {
    width: 100%;
    height: 100%;
    justify-content: center;
    border-radius: 0px;
  }
  .left-section {
    display: none;
  }
  .right-section {
    width: 100%;
  }
}
</style>
