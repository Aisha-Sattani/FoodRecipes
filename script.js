window.addEventListener('load', function () {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled

    meals =  {
        "meals": [
          {
          "strMeal": "Biryani",
          "strMealThumb": "https://www.desiblitz.com/wp-content/uploads/2019/10/Pakistani-Biryani-Recipes-for-a-Traditional-Taste-f.jpg",
          "strYoutube": "https://www.youtube.com/watch?v=PmqdA05OXuI"
          },
          {
            "strMeal": "Mashed Potatoes",
            "strYoutube": "https://www.youtube.com/watch?v=g9pWsxEtiAg",
            "strMealThumb": "https://hips.hearstapps.com/hmg-prod/images/delish-mashed-potatoes-021-1541716941.jpg?crop=1.00xw:0.752xh;0,0.112xh&resize=1200:*"
          },
          {
            "strMeal": "Tandoori Chicken",
            "strMealThumb": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/tandoori-chicken-500x500.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=A3lcRok1zf8"
          },
          {
            "strMeal": "Mexican Rice",
            "strMealThumb": "https://media.soscuisine.com/images/recettes/large/2601.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=UNMrwudowfg"
          },
          {
            "strMeal": "Quinoa Fried Rice",
            "strMealThumb": "https://peasandcrayons.com/wp-content/uploads/2012/01/quinoa-fried-rice-439.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=MMLR51t7yqw"
          },
          {
            "strMeal": "Baked Ziti",
            "strMealThumb": "https://assets.bonappetit.com/photos/631b47270d376dca32f93400/master/pass/0909-seo-baked-ziti-lede.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=lYrI6jbU6yU"
          },
          {
            "strMeal": "Chicken Piccata",
            "strMealThumb": "https://fitfoodiefinds.com/wp-content/uploads/2021/01/chicken-piccata-9.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=ArQ567m3oVo"
          },
          {
            "strMeal": "Creme Brulee Cheesecake",
            "strMealThumb": "https://hips.hearstapps.com/vidthumb/images/delish-creme-brulee-cheesecake-still001-1541785406.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=8e9vIxm8SY0"
          },
          {
            "strMeal": "Cake Pops",
            "strMealThumb": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/27/0/FNK_Cake-Pops_H1.jpg.rend.hgtvcom.616.462.suffix/1582853049838.jpeg",
            "strYoutube": "https://www.youtube.com/watch?v=fYuLzUeDE-Y"
          },
          {
            "strMeal": "Frosted Sugar Cookies",
            "strMealThumb": "https://lifemadesweeter.com/wp-content/uploads/Soft-Lofthouse-Style-Frosted-Sugar-Cookies-are-the-perfect-sweet-treat-with-a-tall-glass-of-milk-e1449928951316-1-500x500.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=Pnu7HB_lSOA"
          },
          {
            "strMeal": "Dal fry",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=J4D855Q9-jg"
          },
          {
            "strMeal": "Lasagne",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
            "strYoutube": "https://www.youtube.com/watch?v=gfhfsBPt46s"
          }
        ]
      }
      console.log(meals); // access the JSON data

      for (let index = 0; index < meals.meals.length; index++) { // Going through the list of Meals and making elements for each to display on the webpage
        let meal = meals.meals[index];
        let a = this.document.createElement('a');
        a.href = meal.strYoutube;
        a.classList = "portfolio-item-wrapper";
        a.id = toString(index);
        a.target = "_blank";
        let bg = this.document.createElement('div');
        bg.classList = "portfolio-img-background";
        let imageURL = meal.strMealThumb;
        bg.style.backgroundImage = 'url(' + imageURL + ')';
        // bg.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 255, 0, 0.25), rgba(0, 255, 0, 0.25)), url(' + imageURL + ')';
        let text = this.document.createElement('div');
        text.classList = "image-text-wrapper";
        text.innerHTML = meal.strMeal;
        text.style.fontSize = '40px';
        text.style.color = 'white';
        text.style.fontWeight = '900';
        text.style.textShadow = '2px 2px black'
        let parent = this.document.getElementById('parent');
        parent.appendChild(a);
        a.appendChild(bg);
        bg.appendChild(text);
      }

      const boxes = document.querySelectorAll('.portfolio-item-wrapper')//store all initial elements of class portfolio-item-wrapper
      const searchBar = document.getElementById('searchBar'); //search bar element

      searchBar.addEventListener('keyup', (e) => { //searches the input and displays relevant boxes

        //remove all boxes currently on screen
        const currentBoxes = document.querySelectorAll('.portfolio-item-wrapper');
        currentBoxes.forEach(box1 => {
          identity = box1.id;
          removeElement(identity); //removes element from code
        });

        //store search input
        const searchString = e.target.value.toLowerCase();

        for (let index = 0; index < meals.meals.length; index++) { // Goes through the loop and only displays the items that contains the search bar input

          let meal = meals.meals[index];

          if (meal.strMeal.toLowerCase().includes(searchString)) {
            let a = this.document.createElement('a');
            a.href = meal.strYoutube;
            a.classList = "portfolio-item-wrapper";
            a.id = toString(index);
            a.target = "_blank";
            let bg = this.document.createElement('div');
            bg.classList = "portfolio-img-background";
            let imageURL = meal.strMealThumb;
            bg.style.backgroundImage = 'url(' + imageURL + ')';
            let text = this.document.createElement('div');
            text.classList = "image-text-wrapper";
            text.innerHTML = meal.strMeal;
            text.style.fontSize = '40px';
            text.style.color = 'white';
            text.style.fontWeight = '900';
            text.style.textShadow = '2px 2px black'
            let parent = this.document.getElementById('parent');
            parent.appendChild(a);
            a.appendChild(bg);
            bg.appendChild(text);
          }

        }

        function removeElement(elementId) { // Removes an element from the document
          var element = document.getElementById(elementId);
          element.parentNode.removeChild(element);
        }

      })

    })
    .catch(e => {
      console.log('there is an error', e);
    })

})