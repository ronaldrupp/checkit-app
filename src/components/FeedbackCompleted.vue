<template>
  <div class="container">
    <div class="box">
      <h1>🥳</h1>
      <h3>Danke fürs Mitmachen</h3>
      <div class="creator">
        <img
          class="profile-img"
          src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
        />
        <p>{{creator.name}}</p>
      </div>
      <div class="feedback-powered">
        <p>Feedback powered by</p>
        <img src="" />
      </div>
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
.container {
  background-color: var(--primary-color);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
