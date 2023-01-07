<template>
  <div class="container">
    <column-list :list="testData"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "https://images.dog.ceo/breeds/whippet/n02091134_18069.jpg",
  },
  {
    id: 2,
    title: "test1的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_4016.jpg",
  },
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
  },
  setup() {
    return {
      testData,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
