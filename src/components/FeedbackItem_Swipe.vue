<template>
  <div class="flex mt-10">
    <Tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="decide">
      <template>
        <div
          class="pic">
          <p class="questiontext">{{queue[itemid].text}}</p>
        </div>
      </template>
      <img class="like-pointer" slot="like" src="../assets/happy.svg">
      <img class="super-pointer" slot="maybe" src="../assets/neutral.svg">
      <img class="nope-pointer" slot="nope" src="../assets/sad.svg">
    </Tinder>
    <div class="btns">
       <img src="../assets/sad.svg" @click="btndecide('nein')">
      <img src="../assets/neutral.svg" @click="btndecide('vielleicht')">
      <img src="../assets/happy.svg" @click="btndecide('ja')">
    </div>
  </div>
</template>

<script>

import Tinder from "vue-tinder"; 
export default {
  props: {
    questions: {
      type: Array,
    },
  },
   data: () => ({
    queue: [],
    itemid: 0,
    offset: 0,
    questionsNew: []
  }),
  watch: {  
    questions: function () {
      this.questionsNew = this.questions
    }  
  },
  methods: {
    clickChoice(choice) {
      this.$emit("next-quest", choice);
    },
    decide (choice) {
     this.clickChoice(choice)
     this.questionsNew[this.itemid].answers.forEach(element => {
       if(element.choice==choice){
         element.votes+=1
       }
     });
     this.itemid+1
    },
    btndecide(choice){
    this.$refs.tinder.decide(choice)
    this.questionsNew[this.itemid].answers.forEach(element => {
       if(element.choice==choice){
         element.votes+=1
       }
     });
     this.itemid+1
    },
    start() {
      console.log("test")
      const list = [];
      for (let i = 0; i < this.questionsNew.length; i++) {
        list.push({ id: i, text: this.questionsNew[i].question });
        this.offset+=1;
      }
      this.queue = this.queue.concat(list);
      console.log(this.queue)
    }
  },
  components:{
    Tinder
  },
  created(){
    this.start();
   this.itemid= 0
  }
};
</script>

<style scoped>
body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #20262e;
  overflow: hidden;
}

#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(80% - 23px - 65px - 47px - 16px);
  min-width: 300px;
  max-width: 355px;
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  bottom: 5%;
  width: 64px;
  height: 64px;
}

.nope-pointer {
  right: 10px;
}

.like-pointer {
  left: 10px;
}

.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 5%;
  left: 0;
  right: 0;
  margin: auto;
  width:64px;
  height: 64px;
}

.pic {
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
}

.questiontext{
  font-weight: bold;
  font-size: 180%;
  text-align: left;
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>

