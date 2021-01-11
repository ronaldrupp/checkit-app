<template>
  <div class="w-full h-full flex items-center justify-center dark:bg-gray-900 bg-gray-100">
    <!-- <header class="header">
      <img class="logo" src="@/assets/logo_white.svg" />
      <a
        href="https://check-it.at"
        target="_blank"
        class="btn-primary bg-black text-white hover:bg-opacity-75"
        >DA-Seite</a
      >
    </header>

    <div class="left-section pr-3">
      <h1 class="font-bold text-5xl text-white uppercase">
        {{ this.$t("login.slogan") }}
      </h1>
      <p class="text-white mt-20">
        {{ this.$t("login.subtxt") }} <br />Josef Tungl, Pascal Rengelshausen,
        <br />Tom Kalchmann und Ronald Rupp
      </p>
    </div>
    <div class="right-section">
      <LoginForm v-if="mode == 'login'" @change-mode="mode = 'register'" />
      <RegisterForm v-else />
    </div> -->
    <div
      class="flex flex-col p-5 justify-center items-center bg-white dark:bg-gray-800 w-96 rounded-md"
    >
      <img class="w-12 my-12" src="@/assets/logo_black.svg" />
      <h1 class="font-bold text-3xl my-4">Login</h1>
      <p class="text-center">{{ this.$t("login.logintxt") }}</p>
      <button
        class="w-full my-1 bg-black hover:bg-opacity-50 text-white py-4 px-4 rounded-md mt-20"
        @click.prevent="redirectToGoogle"
      >
        Continue with Google
      </button>
    </div>
  </div>
</template>

<script>
// import RegisterForm from "./../components/RegisterForm";
// import LoginForm from "./../components/LoginForm";
export default {
  data() {
    return {
      mode: "login",
    };
  },
  metaInfo() {
    return {
      title: "Login",
    };
  },
  methods: {
    redirectToGoogle() {
      document.location.href = `${process.env.VUE_APP_API_URL}/user/login`;
    },
  },
  components: {
    // RegisterForm,
    // LoginForm,
  },
};
</script>

<style scoped>
.loginContainer {
  /* background: var(--linear-gradient); */
}
</style>
