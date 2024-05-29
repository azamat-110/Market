<template>
  <div class="container card">
    <div class="card__img">
      <img :src="card.images[0]" alt="card_img" />
    </div>
    <div class="card__info">
      <div class="card__title">{{ card.title }}</div>
      <div class="card__descr">{{ card.description }}</div>
      <div class="card__price">
        <p>{{ card.price }} $</p>
        <p>{{ card.stock }}</p>
        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Object,
});
</script>

<style lang="scss" scoped>
.card {
  padding: 20px 30px;
  background: #ffffff;
  max-width: 306px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  &__img {
    height: 315px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & img {
    max-width: 100%;
    max-height: 315px;
  }
  &__title {
    color: rgb(6, 47, 66);
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-top: 32px;
    padding-bottom: 20px;
    min-height: 92px;
  }
  &__descr {
    color: rgb(6, 47, 66);
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 20px;
    min-height: 92px;
    min-height: 160px;
  }
  &__price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
      color: rgb(6, 47, 66);
      font-family: "Montserrat";
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        font-size: 16px;
        border: 1px solid rgb(6, 47, 66);
        border-radius: 5px;
      }
    }
    & button {
      color: rgb(6, 47, 66);
      font-family: "Montserrat";
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      padding: 5px 20px;
      border: 1px solid rgb(6, 47, 66);
      border-radius: 5px;
      transition: 0.3s;

      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>