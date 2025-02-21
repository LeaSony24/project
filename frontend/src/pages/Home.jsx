import React from 'react'

const Home = () => {
  return (
    <div>
      <br></br>
<div class="card text-bg-dark">
  <img src="cover.jpg" class="card-img" alt="RecipeRipple" height="560px"/>
  <div class="card-img-overlay">
    <h5 class="card-title"><strong>Ripple, Share, Savor!</strong></h5>
    <p class="card-text"><i>RecipeRipple is a vibrant recipe-sharing platform designed to connect food lovers, 
      home cooks, and professional chefs from around the world. With an intuitive interface, users can upload,
       explore, and share their favorite recipes, creating a ripple effect of culinary inspiration. 
     Engage with a passionate food community, exchange cooking tips, and let your recipes make waves!</i> </p>
  </div>
</div>  <br></br>
<h3><i><center>Categories</center> </i></h3>
<br>
</br>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="veg.webp" class="card-img-top" alt="Vegetarian"/>
      <div class="card-body">
        <h5 class="card-title"><b>Vegetarian Dishes: A Celebration of Flavor and Nutrition</b></h5>
        <p class="card-text">Vegetarian dishes are meals prepared without meat, poultry, or seafood, 
          focusing on plant-based ingredients such as vegetables, legumes, grains, nuts, seeds, 
          and dairy products. These dishes offer a wide variety of flavors, textures, and nutrients, 
          making them a popular choice for those seeking a healthy and sustainable diet.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="non.jpeg" class="card-img-top" alt="Non Vegetarian"/>
      <div class="card-body">
        <h5 class="card-title"><b>Non-Vegetarian Dishes: A World of Rich and Savory Flavors</b></h5>
        <p class="card-text">From juicy steaks and flavorful chicken curries to
           fresh seafood platters and tender lamb kebabs, non-vegetarian cuisine 
           spans across cultures and traditions. Whether its a spicy Indian biryani, 
           a classic American burger, or a Mediterranean grilled fish dish, non-vegetarian meals
            offer a wide array of taste experiences, satisfying cravings for both hearty and gourmet dining.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="sm.webp" class="card-img-top" alt="Smoothies"/>
      <div class="card-body">
        <h5 class="card-title"><b>Smoothies: A Refreshing and Nutritious Delight</b></h5>
        <p class="card-text">Smoothies are blended beverages made from a combination of fruits,
           vegetables, dairy or plant-based milk, yogurt, and sometimes nuts, seeds, or protein powders. 
           They are known for their creamy texture, refreshing taste, and nutritional benefits, 
           making them a popular choice for a healthy snack, meal replacement, or post-workout drink.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="brk.webp" class="card-img-top" alt="Breakfast"/>
      <div class="card-body">
        <h5 class="card-title"><b>Breakfast: The Most Important Meal of the Day</b></h5>
        <p class="card-text">Popular breakfast options include classic dishes like eggs,
           toast, and pancakes, as well as nutritious choices like oatmeal, smoothie bowls,
            and yogurt with fresh fruits. For those who prefer a savory start, options like
             avocado toast, breakfast burritos, or traditional Indian parathas offer delicious
            variety. Whether sweet or savory, a balanced breakfast fuels the body and mind 
            for the day ahead.</p>
      </div>
    </div>
  </div>
</div>

</div>
  )
}

export default Home
