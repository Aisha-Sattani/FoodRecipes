var map = L.map('map').setView([51.505, -0.09], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var croatia = L.marker([45.813185, 15.977177]).addTo(map);
var turkey = L.marker([41.009633, 28.965165]).addTo(map);
var egypt = L.marker([26.820553, 30.802498]).addTo(map);
var pakistan = L.marker([25.14469, 67.184777]).addTo(map);
var canada = L.marker([61.066692, -107.991707]).addTo(map);
var italy = L.marker([42.638426, 12.674297]).addTo(map);
var china = L.marker([35.000074, 104.999927]).addTo(map);
var tunisia = L.marker([33.843941, 9.400138]).addTo(map);
var america = L.marker([37.09024, -95.712891]).addTo(map);
var netherland = L.marker([52.50017, 5.748082]).addTo(map);
var uk = L.marker([54.702354, -3.276575]).addTo(map);
var france = L.marker([46.603354, 1.888334]).addTo(map);
var greece = L.marker([38.995368, 21.987713]).addTo(map);
var japan = L.marker([36.574844, 139.239418]).addTo(map); 

croatia.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Croatian') {
            // let h2 = this.document.createElement('h2');
            // h2.innerHTML = meal.strArea;
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            // let heading = this.document.getElementById('heading');
            // heading.appendChild(h2);
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

turkey.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Turkish') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

egypt.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Egyptian') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

pakistan.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Indian') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

canada.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Canadian') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

italy.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Italian') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

china.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Chinese') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

tunisia.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Tunisian') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

america.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'American') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

netherland.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Dutch') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

uk.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'British') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

france.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'French') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

greece.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Greek') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})

japan.addEventListener('click', ()=> {

    let parent = this.document.getElementById('parent');
    parent.innerHTML = "";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {

        let meal = data.meals[index];

        if (meal.strArea == 'Japenese') {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target="_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url('+imageURL+')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black';
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
        }
        
      }
    })
})