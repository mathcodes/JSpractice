/*
  THIS IS THE FINAL SOLUTION PRESENTED IN THE VIDEO
*/

function vegetarianMenu(menu) {
  // First let's use document.query selector to get a handle on our 
  // unordered list element which will contain our vegetarian items.
  const menuNode = document.querySelector("#menu");
  // Now let's use the `array.filter` method to create a new array of 
  // vegetarian dinner options. 
  const vegetarianOptions = menu.filter(
    (option) => option.isVegetarian === true
  );
  // Now that we have our array, 
  // we can dynamically generate list items for each.

  //We'll use the array.forEach loop (vegetarianOptions.forEach) 
  // to create a list item for each vegetarian menu item.
  vegetarianOptions.forEach((option) => {
    // Next we'll use `document.createElement` to create our list item. 
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });
}

vegetarianMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
]);

vegetarianMenu(menu);