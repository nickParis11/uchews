//rankCuisine: pick the top three types of cuisine based on counts of wantToEat and willNotEat, for each type of wantToEat +1, for each type of willNotEat -1.
const rankCuisine = function(body){
  let cuisineTypeCounter = {};
  const wantToEat = body.wantToEat;
  wantToEat.forEach(wantToEatType => {
    cuisineTypeCounter[wantToEatType] =  cuisineTypeCounter[wantToEatType] ?  cuisineTypeCounter[wantToEatType] + 1 : 1;
  });
  const willNotEat = body.willNotEat;
  willNotEat.forEach(willNotEatType => {
    cuisineTypeCounter[willNotEatType] =  cuisineTypeCounter[willNotEatType] ?  cuisineTypeCounter[willNotEatType] - 1 : -1;
  });
   cuisineTypeSorted = Object.keys(cuisineTypeCounter).sort((a,b) => {
    return cuisineTypeCounter[b]-cuisineTypeCounter[a];
   }
  );
  const results = cuisineTypeSorted.slice();
  if(results.length < 3){
    return results;
  }
 return results.slice(0, 3);
};


const sortRestaurantByRating = function(a, b)
{
  if(a.rating < b.rating)
        return 1;
      if(a.rating > b.rating)
        return -1;
      return 0;
};

//rankRestaurant: for a given type of cuisine and budget, sort the restaurants based on rating in a decreasing order.
const rankRestaurant = function(data, budget)
{
  console.log('data prior to ranking restaurants: ', data);
  const budget_level = budget || 2;
  //const restaurantsByCuisine = data.results;
  let restaurantsByCuisine = data.results;
  //if a budget_level is given
   const restaurantsByCuisineAndBudget = restaurantsByCuisine.filter((restaurant) => {
    return typeof(restaurant.price_level)==='number'&&restaurant.price_level === budget_level;
  });
  if(restaurantsByCuisineAndBudget.length === 0)
  {
     restaurantsByCuisine.sort(sortRestaurantByRating);
     return restaurantsByCuisine;
     //return restaurantsByCuisine.slice(0,1);
  }
  if(restaurantsByCuisineAndBudget.length === 1) {
    return restaurantsByCuisineAndBudget;}
  if(restaurantsByCuisineAndBudget.length > 1)
  {
     restaurantsByCuisineAndBudget.sort(sortRestaurantByRating);
     return restaurantsByCuisineAndBudget;
     //return restaurantsByCuisineAndBudget.slice(0,1);
  }
};

//rankCuisineByHistory: return a search history of wantToEat and willNotEat on cuisine types
const rankCuisineByHistory = function(historyDataByType) {
  let historyDataByTypeObj = {wantToEat: [], willNotEat:[]};

  historyDataByType.forEach(eachHistoryType => {
    historyDataByTypeObj.wantToEat.concat(eachHistoryType.wantToEat);
    historyDataByTypeObj.willNotEat.concat(eachHistoryType.willNotEat);
  });
  return historyDataByTypeObj;
};


const countFreq = function(arrData) {
  const counter = {};
  arrData.forEach((value) => {
    counter[value] = counter[value] ? counter[value] + 1: 1;
  });
  //return the most frequent one in history
  counterSorted = Object.keys(counter).sort((a,b) => {
    return counter[b]-counter[a];
   });
  return counterSorted.slice(0, 1);
};

//recommendSearchDataByHistory: recommended search based on the most frequently searched distance, budget, the most recently searched location and the wantToEat and willNotEat cuisine types from this specific user's seaching history.
const recommendSearchDataByHistory = function(historyData){
  const recommendSearchInput = {};
  for(var key in historyData) {
    if(key === 'foodType') {
      recommendSearchInput[key] = rankCuisineByHistory(historyData[key]);
    }
    recommendSearchInput[key] = countFreq(historyData[key]);
  }
  return recommendSearchInput;
};

module.exports.rankCuisine = rankCuisine;
module.exports.rankRestaurant =rankRestaurant;
module.exports.recommendSearchDataByHistory = recommendSearchDataByHistory;


