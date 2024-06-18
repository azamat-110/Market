<template>
  <div v-if="cardList">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Load v-else />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>