import React from 'react';
import Paper from 'material-ui/Paper';
import MapsContainer from './map.jsx';
import YelpLogo from '../../dist/assets/yelp/yelp.png';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%',
  },
  separator: {
    height: '400px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  restaurantBox: {
    border: '2px solid #c9cacc',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0px 10px 0px'
  },
  restaurantDetails: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '60%'
  },
  review: {
    fontStyle: 'italic',
    fontSize: 12
  },
  logo: {
    maxWidth: 100,
    float: 'right'
  },
  img: {
    border: '2px solid #c9cacc',
    borderRadius: 25,
    maxWidth: '90%'
  }
};

const Results = ({ results }) => {
  console.log('RESULTS to client:',results);
  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <h2>Your Results!</h2>
        <MapsContainer results={results}/>
        <div style={style.separator}></div>  {/* this provides the buffer between the map and the results */}
                                             {/* otherwise the map will overlap the results */}

        <div style={style.flexContainer}>
        <h1>#1</h1>
        <div style={style.restaurantBox}>
          <div>
            <a><img src={results[0][0].yelpImg} style={style.img}></img></a>
          </div>

          <div style={style.restaurantDetails}>
            <h3>{results[0][0].name}</h3>
            <p>
            {results[0][0].formatted_address}
            </p>
            <a>{results[0][0].rating} Stars</a><a>{results[0][0].yelpReviewCount} Reviews</a>
            <p style={style.review}>
            {results[0][0].reviews.jsonBody.reviews[0].text}
            </p>
            Read More
            <a href={results[0][0].yelpUrl} target="_blank"><img src={YelpLogo} alt="" style={style.logo}></img></a>
            </div>
        </div>

        <h1>#2</h1>
        <div style={style.restaurantBox}>
          <div>
            <a><img src={results[1][0].yelpImg} style={style.img}></img></a>
          </div>

          <div style={style.restaurantDetails}>
            <h3>{results[1][0].name}</h3>
            <p>
            {results[1][0].formatted_address}
            </p>
            <a>{results[1][0].rating} Stars</a><a>{results[1][0].yelpReviewCount} Reviews</a>
            <p style={style.review}>
            {results[1][0].reviews.jsonBody.reviews[0].text}
            </p>
            Read More
            <a href={results[1][0].yelpUrl} target="_blank"><img src={YelpLogo} alt="" style={style.logo}></img></a>
            </div>
        </div>
      </div>

        <h1>#3</h1>
        <div style={style.restaurantBox}>
          <div>
            <a><img src={results[2][0].yelpImg} style={style.img}></img></a>
          </div>

          <div style={style.restaurantDetails}>
            <h3>{results[2][0].name}</h3>
            <p>
            {results[2][0].formatted_address}
            </p>
            <a>{results[2][0].rating} Stars</a><a>{results[2][0].yelpReviewCount} Reviews</a>
            <p style={style.review}>
            {results[2][0].reviews.jsonBody.reviews[0].text}
            </p>
            Read More
            <a href={results[2][0].yelpUrl} target="_blank"><img src={YelpLogo} alt="" style={style.logo}></img></a>
            </div>
        </div>

      </Paper>
    </div>
  );
}

export default Results;
