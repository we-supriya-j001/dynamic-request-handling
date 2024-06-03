<template>
  <div class="box">
    <div class="main-box">
      <button class="button" @click="fetchData(1,overwatch=true)">Send</button>
      <button class="button" @click="fetchData(2,overwatch=true)">Send Again</button>
    </div>
    <div class="content-box">
      <div v-if="data">
        <p v-if="data?.message" style="color: red">{{data.message}}</p>
        <p v-if="data" class="pclass">User ID: {{ data.data.userId }}</p><br/>
        <p v-if="data" class="pclass">Title: {{ data.data.title }}</p><br/>
        <p v-if="data" class="pclass">Completed: {{ data.data.completed ? 'Yes' : 'No' }}</p>
      </div>
      <div v-else>
        <p>Loading......</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useAjax} from "~/composables/useAjax";
import { ref } from 'vue';

const data = ref(null);
const fetchData = async (requestId, overwatch = false) => {
  try {
    const result = await useAjax(requestId, overwatch);
    data.value = result;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.main-box {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.pclass{
  display: block;
  font-size:24px;
}

.button {
  height: 30px;
  width: 100px;
  background-color: burlywood;
  border-radius: 10px;
}

.content-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:solid black 1px;
  height:500px;
  width:500px
}
</style>
