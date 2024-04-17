//let location;
let foodType;


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', function() {
        const location = document.getElementById('location').value;
        const foodType = document.getElementById('foodType').value;
        const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
    
        const iframe = document.getElementById('map');
        iframe.src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyCBeGSKqFbFKyGEO0voLUMsjgXXmmOhVlg&q=${dietaryRestrictions}+${foodType}+in+${location}+5+Star`;
    });
});

