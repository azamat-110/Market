<template>
  <div v-if="cardList">
    <NavBar />
    <Main/>
  </div>
  <Load v-else />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
import Load from "./components/Load.vue";
import { useCards } from "./store.js";
import { onMounted, computed } from "vue";

const cardsStore = useCards();

onMounted(() => {
  cardsStore.getCards();
});

const cardList = computed(() => {
  return cardsStore.cards?.products;
});
</script>

<style lang="scss" scoped>
</style>