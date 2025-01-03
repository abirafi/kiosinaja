document.querySelector('.scroll-container').addEventListener('wheel', (event) => {
    event.preventDefault();
    event.currentTarget.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: 'smooth',
    });
});
