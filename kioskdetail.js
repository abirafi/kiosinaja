// Get the pop-up form and buttons
const openFormBtn = document.getElementById('openForm');
const closeFormBtn = document.getElementById('closeForm');
const popup = document.getElementById('contactFormPopup');

// Open the pop-up form
openFormBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Close the pop-up form
closeFormBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the pop-up if clicked outside the form
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
