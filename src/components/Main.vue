<template>
  <header class="header">
    <div class="container header__content">
      <div class="header__content-title">
        <div class="header__content-title-select">
          <div class="header__content-title-select-list">
            <select :name="price" id="select">
              <option :value="price">{{ price }}</option>
              <option :value="men">{{ men }}</option>
              <option :value="woman">{{ woman }}</option>
              <option :value="news">{{ news }}</option>
            </select>
          </div>
          <button class="header__content-title-select-set">Применить</button>
        </div>
        <div class="header__content-title-all">
          Общее кол-во товаров - {{ cardsStore.cards?.limit }}
        </div>
      </div>
      <div class="header__content-cards">
        <Card
          v-for="(card, index) in cardsStore.cards?.products"
          :key="index"
          :card="card"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import Card from "./Card.vue";
import { useCards } from "../store.js";
import { onMounted } from "vue";
import { ref } from "vue";

const cardsStore = useCards();
const show = ref(false);
const price = ref("По цене"),
  men = ref("Мужские"),
  woman = ref("Женские"),
  news = ref("Новинки");

onMounted(() => {
  setTimeout(() => {
    cardsStore.getCards();
  }, 2000);
});
</script>

<style lang="scss" scoped>
.header {
  padding-top: 60px;
  padding-bottom: 50px;
  background: rgb(186, 186, 186);
  &__content {
    display: flex;
    flex-direction: column;
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 60px;
      &-select {
        display: flex;
        align-items: center;
        gap: 100px;
        &-list {
          position: relative;

          & button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: rgb(0, 0, 0);
            font-family: "Montserrat";
            font-size: 16px;
            font-weight: 400;
            padding: 12px 10px;
            background: rgb(255, 255, 255);
            border-radius: 5px;
            transition: 0.5s;
          }
          & select {
            color: rgb(0, 0, 0);
            font-family: "Montserrat";
            font-size: 16px;
            font-weight: 400;
            padding: 12px 10px;
            background: rgb(255, 255, 255);
            border: none;
            outline: none;
            border-radius: 5px;
          }
        }
        &-set {
          color: rgb(0, 0, 0);
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: 400;
          padding: 12px 10px;
          background: rgb(255, 255, 255);
          transition: 0.3s;
          border-radius: 5px;

          &:active {
            transform: scale(0.95);
          }
        }
      }
      &-all {
        color: rgb(0, 0, 0);
        font-family: "Montserrat";
        font-size: 16px;
        font-weight: 400;
        padding: 12px 10px;
        background: rgb(255, 255, 255);
        border-radius: 5px;
      }
    }
    &-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 60px;
      grid-column-gap: 25px;
    }
  }
}
</style>