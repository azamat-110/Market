<template>
  <div class="card__info container">
    <h2 class="card__info-title">
      {{ cadsInfo[index].title }}
    </h2>
    <img :src="cadsInfo[index].images[0]" alt="" />
    <div class="card__info-about">
      <p><span>Brand</span>: {{ cadsInfo[index].brand }}</p>
      <p><span>Category</span>: {{ cadsInfo[index].category }}</p>
      <p><span>Rating</span>: {{ cadsInfo[index].rating }}</p>
      <p><span>Warranty</span>: {{ cadsInfo[index].warrantyInformation }}</p>
      <p>span: {{ cadsInfo[index].price }} $</p>
    </div>
  </div>
</template>
  
  <script setup>
import { useCards } from "../store.js";
import { ref } from "vue";

const cardsStore = useCards();
console.log(cardsStore.cards?.products[0]);

const cadsInfo = cardsStore.cards?.products;
const index = ref(0);
// const props = defineProps({
//   card: Object,
// });
</script>
  
  <style lang="scss" scoped>
.card__info {
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-title {
    color: rgb(6, 47, 66);
    font-family: "Montserrat";
    font-size: 46px;
    font-weight: 400;
    line-height: 20px;
    padding-top: 32px;
    padding-bottom: 20px;
    min-height: 92px;
  }

  & img {
    max-width: 100%;
    max-height: 415px;
  }

  &-about {
    background: rgba(255, 255, 255, 0.555);
    color: rgb(6, 47, 66);
    padding: 30px;
    border-radius: 15px;
    font-family: "Montserrat";
    font-size: 26px;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 20px;
    min-height: 92px;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & span {
      font-weight: 700;
    }
  }
}
</style>
  