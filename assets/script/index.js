'use strict';


//Open Menu
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', function() {
    dropDownMenu.classList.toggle('start');
    const OPEN = dropDownMenu.classList.contains('start');

    toggleBtnIcon.classList = OPEN
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
})
