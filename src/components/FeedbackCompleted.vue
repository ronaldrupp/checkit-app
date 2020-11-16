<template>
  <div class="flex w-full h-full flex-col justify-center items-center">
      <h1 class="text-6xl my-12">🥳</h1>
      <h3 class="text-xl font-bold">Danke fürs Mitmachen</h3>
      <div class="flex mt-6">
        <img
          class="profile-img"
          :src="creator.photo_url"
        />
        <p>{{creator.name}}</p>
      </div>
      <div class="flex items-center flex-col mt-12">
        <p>Feedback powered by</p>
        <img class="w-10 mt-6" src="@/assets/logo_black.svg" />
      </div>
  </div>
</template>

<script>
export default {
  created() {
    this.letItRain();
  },
  props: {
      creator: {
          type: Object
      },
  },
  methods: {
    letItRain() {
      this.$confetti.start({
        defaultSize: 5,
        windSpeedMax: 0,
        particles: [
          {
            type: "rect",
          },
        ],
      });
      setTimeout(() => this.$confetti.stop(), 2500);
    },
  },
};
</script>

<style scoped>
.logo{
  width: 25px;
  margin: 0rem auto;
}
.feedback-powered {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
}
.creator {
  display: flex;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
}
.profile-img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
}
@media (max-width: 768px) {
  .box {
    width: 90%;
    padding: 0px;
  }
}
</style>
