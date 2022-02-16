import { Table } from "./interface.js";

const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const suits = ["clubs", "diamonds", "hearts", "spades"];

export const Deck = (() => {
    
    let deck = [];
    let dealtCards = [];
    
    const createDeck = () => {
        deck = [];
        Table.clearCards();
        suits.forEach(suit => {
            values.forEach(value => {
                const card = `${value}_of_${suit}`;                
                deck.push(card);
            });
        });
        console.table(deck);
        Table.displayCards(deck);
        return deck;
    }

    const shuffleDeck = () => {
        Table.clearCards();
        deck.sort((a,b) => {
            let aRandom = Math.random();
            let bRandom = Math.random();
            return aRandom - bRandom;
        });
        Table.displayCards(deck);
    }

    // const dealFrom = (count) => {
    //     Table.clearCards();
    //     dealtCards = [];
    //     for (let i = 0; i < count; i++) {
    //         const newCard = deck.pop();
    //         dealtCards.push(newCard);
    //     };
    //     Table.displayCards(dealtCards);
    // }

    return {deck, createDeck, shuffleDeck};

})();
