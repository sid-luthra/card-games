import { Table } from "./interface.js";

const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const suits = ["clubs", "diamonds", "hearts", "spades"];

export const Deck = (() => {
    
    let cards = [];
    
    const reset = () => {
        cards = [];
        suits.forEach(suit => {
            values.forEach(value => {
                const card = `${value}_of_${suit}`;                
                cards.push(card);
            });
        });
    };

    const shuffle = () => {
        cards.sort((a,b) => {
            let aRandom = Math.random();
            let bRandom = Math.random();
            return aRandom - bRandom;
        });
    };

    const dealFrom = (count) => {
        let dealtCards = [];
        const remaining = countRemaining();
        if (remaining >= count) {
            for (let i = 0; i < count; i++) {
                const newCard = cards.pop();
                dealtCards.push(newCard);
            };
            return dealtCards;
        };
    }

    const countRemaining = () => {
        return cards.length;
    }

    return {cards, reset, shuffle, dealFrom};

})();
