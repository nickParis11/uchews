import React from 'react';
import Paper from 'material-ui/Paper';
import MapsContainer from './map.jsx';
import YelpBox from './yelpbox.jsx';

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
    maxWidth: 800,
    margin: 'auto'
  }
};

const Results = ({ results }) => {

  console.log('RESULTS to client:',results);
  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <div style={{display: 'inline-block'}}>

        <h2>Your Results!</h2>
        <MapsContainer results={results}/>
        <div style={style.separator}></div>  {/* this provides the buffer between the map and the results */}
                                             {/* otherwise the map will overlap the results */}
        <div style={style.flexContainer}>
          {results.map((choice, index) => {
            return <YelpBox choice={choice} num={index + 1} key={index}/>
          })}
       </div>
       </div>
      </Paper>
    </div>
  );
}

export default Results;
