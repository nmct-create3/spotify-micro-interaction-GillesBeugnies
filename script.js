document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.js-toggle');
    var iconElement = document.querySelector('.toggle__icon');

    toggleButton.addEventListener('click', function() {
        iconElement.classList.toggle('added');
        
        if (iconElement.classList.contains('added')) {
            iconElement.innerHTML = '<svg class="toggle__icon icon icon--check" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" /> </svg>';
        } else {
            iconElement.innerHTML = '<svg class="toggle__icon icon icon--add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16" /> <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /> <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /> </svg>';
        }

        console.log("added");
    });
});
