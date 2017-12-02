import React from 'react';
import Paper from 'material-ui/Paper';
import MapsContainer from './map.jsx'

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '60%',
  },
  separator: {
    height: '400px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    border: '1px solid black'
  },
  restaurantBox: {
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0px 10px 0px'

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
            <img src={results[0][0].yelpImg} style={{maxWidth: '90%'}}></img>
          </div>

          <span>
            <h3>{results[0][0].name}</h3>
            <p>
            {results[0][0].formatted_address}
            </p>
            <a>{results[0][0].rating} Stars</a><a>{results[0][0].yelpReviewCount} Reviews</a>
            <p>
            {results[0][0].reviews[0]}
            </p>
            Read More
            <a href={results[0][0].yelpUrl}>Check out on Yelp</a>
            </span>
        </div>


        <h1>#2</h1>
        <div style={style.restaurantBox}>
          <div>
            <img src={results[1][0].yelpImg} style={{maxWidth: '90%'}}></img>
          </div>

          <span>
            <h3>{results[1][0].name}</h3>
            <p>
            {results[1][0].formatted_address}
            </p>
            <a>{results[1][0].rating} Stars</a><a>{results[1][0].yelpReviewCount} Reviews</a>
            <p>
            {results[1][0].reviews[0]}
            </p>
            Read More
            <a href={results[1][0].yelpUrl}>Check out on Yelp</a>
            </span>
        </div>


        <h1>#3</h1>
        <div style={style.restaurantBox}>
          <div>
            <img src={results[2][0].yelpImg} style={{maxWidth: '90%'}}></img>
          </div>

          <span>
            <h3>{results[2][0].name}</h3>
            <p>
            {results[2][0].formatted_address}
            </p>
            <a>{results[2][0].rating} Stars</a><a>{results[2][0].yelpReviewCount} Reviews</a>
            <p>
            {results[2][0].reviews[0]}
            </p>
            Read More
            <a href={results[2][0].yelpUrl}>Check out on Yelp</a>
            </span>
        </div>

      </div>

      </Paper>
    </div>
  );
}

export default Results;
