<template>
  <div class="card__info container">
    <h2 class="card__info-title">
      {{ card.title }}
    </h2>
    <img :src="card.images[0]" alt="" />
    <div class="card__info-about">
      <p><span>Category</span>: {{ card.category }}</p>
      <p><span>Rating</span>: {{ card.rating }}</p>
      <p><span>Warranty</span>: {{ card.warrantyInformation }}</p>
      <p><span>Price</span>: {{ card.price }} $</p>
    </div>
  </div>
</template>
  
  <script setup>
import { useCards } from "../store.js";
import { useRoute } from "vue-router";

const route = useRoute();
const cardsStore = useCards();
const cardId = route.params.id;
const cardsInfo = cardsStore.cards?.products;
const card = cardsInfo.find((c) => c.id == cardId);
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
    max-height: 315px;
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
  