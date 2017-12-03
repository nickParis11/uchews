const yelp = require('yelp-fusion');
const Promise = require('bluebird');

const client = yelp.client(process.env.YELP_ACCESS_TOKEN);

//get businessID and basic data for one restaurant object
const getYelpRestaurantData = (googleResultsMatrix, callback) => {

  var yelpRestaurantsMatrix = [];

  Promise.map(googleResultsMatrix, (restaurantList) => {
    var topRestaurant = restaurantList[0];
    return client.search({
      term: topRestaurant.name,
      latitude: topRestaurant.geometry.location.lat,
      longitude: topRestaurant.geometry.location.lng,
      limit: 1
    }).then((response) => {
      //add image, review count and yelp url
      topRestaurant.yelpImg = response.jsonBody.businesses[0].image_url;
      topRestaurant.yelpReviewCount = response.jsonBody.businesses[0].review_count;
      topRestaurant.yelpUrl = response.jsonBody.businesses[0].url;
      //get top reviews
      return client.reviews(response.jsonBody.businesses[0].id).then((yelpReviews) => {
        //add reviews to restaurant data
        topRestaurant.reviews = yelpReviews;
        yelpRestaurantsMatrix.push([topRestaurant]);
    }).catch((err) => {
      return console.error('error in promise:', err);
    });
  })
  }).then(() => {
    callback(null, yelpRestaurantsMatrix);
  })
};


module.exports.getYelpRestaurantData = getYelpRestaurantData;
