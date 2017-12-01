const axios = require('axios');


//get businessID and basic data for one restaurant object
const getYelpBusinessId = (restaurant) => {


};

//get top 3 reviews for one restaurant
const getYelpReviews = () => {


};

//add reviews to restaurant object
const decorateWithYelpReviews = () => {


};

// for top 3 restaurants, get yelp id, reviews, and pass back to client side as array of arrays
const getRestaurantsData = (googleResultsArray) => {
  console.log(googleResultsArray);
  //should be an array of three restaurant objects
  const yelpData = [];

  //for each of the three subarrays in googleResultsArray
    //if first element in subarray is good (no undefineds)
      //add to yelpData
      yelpData.push(googleResultsArray[i][0]);


  //for each restaurant in yelpData
    //get businessId and add to restaurant object
      //then use businessId to get reviews, and add to restaurant object



}




module.exports.getRestaurantsData = getRestaurantsData;