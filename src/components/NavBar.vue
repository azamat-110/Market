<template>
  <nav class="nav">
    <div class="nav__content container">
      <a href="" class="nav__content-logo">
        <img src="../assets/images/nike.svg" alt="nike" />
      </a>
      <ul class="nav__list">
        <li>
          <router-link class="nav__list-link" to="/"> Новинки </router-link>
        </li>
        <li>
          <router-link class="nav__list-link" to="/"> Категории </router-link>
        </li>
        <li>
          <router-link class="nav__list-link" to="/"> Скидки </router-link>
        </li>
        <li>
          <router-link class="nav__list-link" to="/"> Контакты </router-link>
        </li>
        <li>
          <router-link class="nav__list-link" to="/"> О нас </router-link>
        </li>
      </ul>
      <button class="nav__content-basket">
        <img src="../assets/images/basket.svg" alt="basket" />
      </button>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.nav {
  background: rgb(255, 255, 255);
  min-height: 120px;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 72px;

    &-link {
        cursor: pointer;
      color: rgb(0, 0, 0);
      font-family: 'Montserrat';
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
    }
  }
}
</style>