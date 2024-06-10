<template>
    <div class="paginate">
        <button @click="$emit('page', currentPage - 1)" :disabled="currentPage == 1">back</button>
        <p>{{ currentPage}} - {{ totalPage }}</p>
        <button @click="$emit('page', currentPage + 1)" :disabled="currentPage == 9">next</button>
    </div>
</template>

<script setup>
const props = defineProps(['currentPage', 'totalPage']);
</script>

<style lang="scss" scoped>
.paginate {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    gap: 30px;
    & button {
        background: #232323;
        color: #ffffff;
        padding: 15px 20px;
        font-family: "Montserrat";
        font-weight: 700;
        text-transform: uppercase;
        font-size: 22px;
        border-radius: 15px;
        transition: .3s;
        &:active {
            transform: scale(.9);
        }
    }
    & p {
        color: #000000;
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 22px;
    }
}
</style>