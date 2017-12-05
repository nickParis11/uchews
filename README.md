# CLOUD DATABASE SETUP #
1. Set up an account at mlab.com
2. in your dashboard, click create new under MongoDB Deployments.
3. Select Amazon as your cloud provider and select sandbox as your plan type.
4. Select US as your AWS region.
5. Name your database, and submit your order.
6. In your dashboard, select your newly created database.
7. Click on users and add a user.
8. Inside your .env file add:
DB_USER=[username]
DB_PASS=[password]

# API key setup #
1. Create a Google API key.
2. Enable Google Places API Web Service.
3. Enable Google Maps Geocoding API.
4. Enable Google Maps JavaScript API.
5. Inside Credentials, select the API key.
6. Select HTTP referrers (websites) under Application Restrictions.
7. Add the following urls to accept requests from these HTTP referrers (web sites) (Optional):
*127.0.0.1:3000*
*http://ec2-13-56-224-171.us-west-1.compute.amazonaws.com/*
8. Inside of your .env file add:
GOOGLE_API_KEY=[api key]
9. Create a Yelp access token and add it to the .env file as YELP_ACCESS_TOKEN=[token].

# OAuth 2.0 client ID#
This is necessary to enable Google sign-in
1. Create a client ID from console.developers.google.com for OAuth 2.0 client IDs
https://developers.google.com/identity/sign-in/web/devconsole-project is a helpful tutorial
2. Authorize the following redirect URIs:
*http://localhost:3000/auth/google/callback*
*http://ec2-13-56-224-171.us-west-1.compute.amazonaws.com/auth/google/callback*
3. Set the GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and LOCAL_GOOGLE_REDIRECT variables in your .env file. These three variables are all accessed in server/index.js when the GoogleStrategy is defined for passport

# HELPFUL RESOURCES #
AXIOS
https://github.com/axios/axios
EXPRESS
https://expressjs.com/
GOOGLE MAPS API REFERS
https://techjourney.net/google-maps-api-referrer-not-allowed-error/
MATERIAL-UI
http://www.material-ui.com/#/
MONGOOSE
http://mongoosejs.com/docs/index.html
PASSPORT
http://www.passportjs.org/docs
REACT
https://reactjs.org/docs/components-and-props.html
WEBPACK
https://webpack.js.org/


# Next Steps #

Implement recommended restaurants based on user history.
Server/handleRestaurants has a recommendSearchDataByHistory function that returns suggested search parameters based on historical user input.
This could be used to display recommended searches on the homepage.

Animate chewsing to show the work uchews is doing for a group of indecisive diners.

Populate the chewser form with just the categories of restaurants which are actually available given the search criteria of location/radius, price point, business hours.

Improve chews results -- never return a non-restaurant like teavana for dinner.

Implement continued user interaction after results are displayed.
Clicking a restaurant on the results page could show a restaurant's menu, direct to the restaurant's webpage, etc.

Create user profiles.
Users could view past search parameters and restaurants.

Flesh out user creation.
Signup could require an email address.
Dual password input on user signup to prevent typos.
There is currently nothing preventing a blank password.
