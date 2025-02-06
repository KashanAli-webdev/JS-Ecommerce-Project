export const productStarRating = (stars, rating) => {
    stars.forEach((star, index) => {
        if (index >= rating) {
            star.style.display = 'none'; 
        }
    });
};