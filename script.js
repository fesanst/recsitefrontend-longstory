document.addEventListener("DOMContentLoaded", function () {
    
    const ratingContainer = document.querySelector('.rating');

    const bookRating = 4.5;

    const roundedRating = Math.round(bookRating * 2) / 2;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.className = i < roundedRating ? 'star filled' : 'star';
        star.innerHTML = '★';
        ratingContainer.appendChild(star);
    }
});