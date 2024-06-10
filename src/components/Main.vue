<template>
  <header class="header">
    <div class="container header__content">
      <div class="header__content-title">
        <div class="header__content-title-select">
          <div class="header__content-title-select-list">
            <select v-model="selectedOpt">
              <option :value="price">По цене</option>
              <option :value="name">По названию</option>
              <option :value="quantity">По количеству</option>
            </select>
          </div>
          <button @click="selectValue" class="header__content-title-select-set">
            Применить
          </button>
        </div>
        <div class="header__content-title-all">
          Общее кол-во товаров - {{ cardsStore.cards?.limit }}
        </div>
      </div>
      <div class="header__content-cards">
        <Card
          v-for="(card, index) in sortedItems(selectValue()).slice(
            currentPage * 12 - 12,
            currentPage * 12
          )"
          :key="index"
          :card="card"
        />
      </div>
      <div class="header__content-paginate">
        <Paginate
          :currentPage="currentPage"
          :totalPage="totalPage"
          @page="changePage"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import Card from "./Card.vue";
import Paginate from "./Paginate.vue";
import { useCards } from "../store.js";
import { onMounted } from "vue";
import { ref } from "vue";

const cardsStore = useCards();
const show = ref(false);
const price = ref("По цене"),
  name = ref("По названию"),
  quantity = ref("По количеству");

const selectedOpt = ref("По цене");

const selectValue = () => {
  switch (selectedOpt.value) {
    case "По цене":
      return "price";
    case "По названию":
      return "title";
    case "По количеству":
      return "stock";
    default:
      return 0;
  }
};

let currentPage = ref(1),
  totalPage = ref(9);
const changePage = (newPage) => {
  currentPage.value = newPage;
};

const sortedItems = (param) => {
  return cardsStore.cards?.products.sort((a, b) => {
    if (param === "title") {
      return a[param].localeCompare(b[param]);
    } else {
      return b[param] - a[param];
    }
  });
};

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
            cursor: pointer;
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