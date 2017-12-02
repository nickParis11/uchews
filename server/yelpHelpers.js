const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_ACCESS_TOKEN);


//get businessID and basic data for one restaurant object
const getYelpBusinessData = (restaurant, callback) => {

  client.search({
    term: `${restaurant.name}`,
    latitude: `${restaurant.geometry.location.lat}`,
    longitude: `${restaurant.geometry.location.lng}`,
    limit: 1
  }).then((response) => {
    console.log(response.jsonBody.businesses[0].url);
    restaurant.yelpId = response.jsonBody.businesses[0].id;
    restaurant.image = response.jsonBody.businesses[0].image_url;
    restaurant.yelpUrl = response.jsonBody.businesses[0].url;
    restaurant.reviewCount = response.jsonBody.businesses[0].review_count;
    restaurant.yelpRating = response.jsonBody.businesses[0].rating;
    console.log('Restaurant after yelp response', restaurant);
    callback(null, restaurant);
  }).catch((err) => {
    callback(err, null);
  });
};

//get top 3 reviews for one restaurant
const getYelpReviews = () => {


};

//add reviews to restaurant object
const decorateWithYelpReviews = () => {


};

// for top 3 restaurants, get yelp id, reviews, and pass back to client as array of arrays containing one restaurant object each
const getRestaurantsData = (googleResultsArray, callback) => {
  //console.log('GETRESTAURANTSDATA', googleResultsArray[0][0]);
  //should be an array of three restaurant objects
  console.log('getrestaurant called')
  const yelpData = googleResultsArray.map((result) => {
    return result[0];
  });

  //for each of the three subarrays in googleResultsArray

  // getYelpBusinessData(yelpData[0]);

  yelpData.forEach((restaurant) => {
    getYelpBusinessData(restaurant, (err, result) => {
      console.log('err', err)
    })
  });

  console.log('THE YELP DATA IS', yelpData);
    //if first element in subarray is good (no undefineds)
      //add to yelpData
      //yelpData.push(googleResultsArray[i][0]);

  //for each restaurant in yelpData
    //get businessId and add to restaurant object
      //then use businessId to get reviews, and add to restaurant object

}




module.exports.getRestaurantsData = getRestaurantsData;