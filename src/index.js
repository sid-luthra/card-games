import './style.css';
import { Table } from './modules/interface.js';
import { Deck } from './modules/deck.js';

const pageLoad = (() => {
    const header = document.createElement("div");
    header.id = "header";
    document.body.appendChild(header);

    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
    
    const createHeaderButton = (id, text, action) => {
        const element = document.createElement("button");
        element.id = id;
        element.textContent = text;
        element.addEventListener('click', action);
        header.appendChild(element);
    };

    createHeaderButton("createDeckBtn", "Create Deck", Deck.createDeck);
    createHeaderButton("shuffleBtn", "Shuffle", Deck.shuffleDeck);
    createHeaderButton("clearBtn", "Clear Table", Table.clearCards);
    // createHeaderButton("dealBtn", "Deal 11", Deck.dealFrom(11));

})();





