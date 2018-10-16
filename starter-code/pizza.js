// Write your Pizza Builder JavaScript in this file.
//  DOM Buttons
var $pepperonniButton = $("button.btn-pepperonni");
var $mushroomButton = $("button.btn-mushrooms");
var $greenpepperButton = $("button.btn-green-peppers");
var $sauceButton = $("button.btn-sauce");
var $crustButton = $("button.btn-crust");

// DOM pizza ingredients
var $pepperonni = $(".pep");
var $mushroom = $(".mushroom");
var $greenPepper = $(".green-pepper");
var $crust = $(".crust");
var $sauce = $(".sauce");

// Flag for sauce and crust
var isPepperonniSelected = true;
var isMushroomSelected = true;
var isGreenPepperSelected = true;
var isWhiteSauceSelected = false;
var isGlutenFreeSelected = false;

// DOM price table
var $totalPrice = $(".total-price");
var $pricePepper = $(".price-pep");
var $priceMush = $(".price-mush");
var $priceGreen = $(".price-green");
var $priceWhite = $(".price-white");
var $priceGlutenfree = $(".price-glutenfree");

// total pizza price
var pizzaPrice = 13;

$pepperonniButton.click(function() {
  if (isPepperonniSelected) {
    $pepperonniButton.removeClass("active");
    calculatePrice("pepperonni");
    isPepperonniSelected = false;
  } else {
    $pepperonniButton.addClass("active");
    calculatePrice("pepperonni");
    isPepperonniSelected = true;
  }
  $pepperonni.toggle();
});

$mushroomButton.click(function() {
  if (isMushroomSelected) {
    $mushroomButton.removeClass("active");
    calculatePrice("mushroom");
    isMushroomSelected = false;
  } else {
    $mushroomButton.addClass("active");
    calculatePrice("mushroom");
    isMushroomSelected = true;
  }
  $mushroom.toggle();
});

$greenpepperButton.click(function() {
  if (isGreenPepperSelected) {
    $greenpepperButton.removeClass("active");
    calculatePrice("green pepper");
    isGreenPepperSelected = false;
  } else {
    $greenpepperButton.addClass("active");
    calculatePrice("green pepper");
    isGreenPepperSelected = true;
  }
  $greenPepper.toggle();
});

$sauceButton.click(function() {
  if (isWhiteSauceSelected) {
    $sauce.removeClass("sauce-white");
    $sauceButton.removeClass("active");
    calculatePrice("white sauce");
    isWhiteSauceSelected = false;
  } else {
    $sauce.addClass("sauce-white");
    $sauceButton.addClass("active");
    calculatePrice("white sauce");
    isWhiteSauceSelected = true;
  }
});

$crustButton.click(function() {
  if (isGlutenFreeSelected) {
    $crust.removeClass("crust-gluten-free");
    $crustButton.removeClass("active");
    calculatePrice("gluten free");
    isGlutenFreeSelected = false;
  } else {
    $crust.addClass("crust-gluten-free");
    $crustButton.addClass("active");
    calculatePrice("gluten free");
    isGlutenFreeSelected = true;
  }
});

function calculatePrice(ingredient) {
  switch (ingredient) {
    case "pepperonni":
      isPepperonniSelected ? pizzaPrice-- : pizzaPrice++;
      $pricePepper.toggle();
      $totalPrice.text("$" + pizzaPrice);
      break;
    case "mushroom":
      isMushroomSelected ? pizzaPrice-- : pizzaPrice++;
      $priceMush.toggle();
      $totalPrice.text("$" + pizzaPrice);
      break;
    case "green pepper":
      isGreenPepperSelected ? pizzaPrice-- : pizzaPrice++;
      $priceGreen.toggle();
      $totalPrice.text("$" + pizzaPrice);
      break;
    case "white sauce":
      isWhiteSauceSelected ? (pizzaPrice -= 3) : (pizzaPrice += 3);
      $priceWhite.toggle();
      $totalPrice.text("$" + pizzaPrice);
      break;
    case "gluten free":
      isGlutenFreeSelected ? (pizzaPrice -= 5) : (pizzaPrice += 5);
      $priceGlutenfree.toggle();
      $totalPrice.text("$" + pizzaPrice);
      break;
  }
}
