//Global Variables
let dom = document;

//Menu Logic
const btn = dom.getElementById(`menuBtn`);
const menu = dom.getElementById(`menu`);

//Unhide menu when button is clicked
btn.addEventListener(`click`, () => menu.classList.toggle(`hidden`));

//Hide when element that is not button is clicked
dom.addEventListener(`click`, (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add(`hidden`);
    }
});

