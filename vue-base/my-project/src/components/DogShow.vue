<template>
  <img :src="result && result.message" />
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    // vue3 suspense async await语法
    // const rawData = await axios.get("https://dog.ceo/api/breeds/image/random");
    const rawData = await axios.get("https://dog.ceo/api/breeds/image");

    return {
      result: rawData.data,
    };
  },
});
</script>
