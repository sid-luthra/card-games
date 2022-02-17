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


    const resetBtn = document.createElement("button");
    resetBtn.id = "#clearBtn";
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener('click', () => {
        Table.clearCards();
        Deck.reset();
        Deck.shuffle();
        dealBtn.classList.remove("disabled");
    });
    header.appendChild(resetBtn);

    const dealBtn = document.createElement("button");
    dealBtn.id = "#dealBtn";
    dealBtn.textContent = "Deal";
    dealBtn.addEventListener('click', () => {
        const dealtCards = Deck.dealFrom(11);
        if (dealtCards) {
            Table.displayCards(dealtCards);
        } else {
            dealBtn.classList.add("disabled");
        };
    });
    header.appendChild(dealBtn);

    Deck.reset();
    Deck.shuffle();

})();






