import { defineStore } from 'pinia';
import axios from 'axios';

export const useCards = defineStore({
    id: 'cards',
    state: () => ({
        cards: null,
    }),
    actions: {
        async getCards() {
            try {
                const url = `https://dummyjson.com/products?limit=100`;
                const response = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                    },
                });
                this.cards = response.data;
                console.log(this.cards.products);
            } catch (error) {
                console.log(error);
            }
        }
    },
});