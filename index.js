var images = ["./image1.png", "./image2.png", "./image3.png", "./image4.png"]; 
var text = ["Don't worry, calm down", "Relax, things take time", "Keep your head up, brighter days are coming", "Everything starts with small steps"];

const button = document.getElementById('myButton');

button.addEventListener('click', function () {

    var randomIndex = Math.floor(Math.random() * images.length); 
    var randomImage = images[randomIndex]; 
    document.getElementById("image-display").src = randomImage; 


    var randomIndex2 = Math.floor(Math.random() * text.length); 
    var randomText = text[randomIndex2]; 
    document.getElementById("text-display").innerText = randomText; 
});
