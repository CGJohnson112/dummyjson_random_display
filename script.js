let output = document.getElementById('output');

//randomizes item display from the dummyjson from 1 to 10
let randNum = Math.floor(Math.random() * 20) + 1;

//reports the id being displayed in the console.log
console.log(randNum);

fetch('https://dummyjson.com/products/' + randNum) 
         .then(response => response.json())
         .then(data => {
            output.innerHTML += "Brand = " + data.brand + "<br/>Category = " + data.category + 
            "<br/>Price = <span id='price_highlight'>" + data.price + "</span><br/>Rating = " + data.rating + 
            "<br/>Stock = " + data.stock + "<br/>Description = " + data.description + "<br/>";


            //splits and reverses the name of the brand in the console.log   
            console.log(data.brand.split("").reverse());
           //highlights price number either red or green based on criteria from the JSON API
            if (data.price >= 50) {
               document.getElementById('price_highlight').style.color ="red";
            } else {
               document.getElementById('price_highlight').style.color ="green";
            }
         })
   



   