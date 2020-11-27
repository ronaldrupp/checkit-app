<template>
  <div class="flex ">
    <ClassList style="width:200px" />
    <router-view class="flex-grow"/>
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
