<template>
  <div class="flex ">
    <ClassList class="" />
    <router-view class="flex-1"/>
  </div>
</template>

<script>
import ClassList from '../components/ClassList'
export default {
  components: {
      ClassList
  },
};
</script>

<style lang="scss" scoped></style>
