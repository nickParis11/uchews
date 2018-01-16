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
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    maxWidth: 800,
    margin: 'auto'
  }
};

const Results = ({ results, quick }) => {

  console.log('RESULTS to client:',results);
  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <div style={{display: 'inline-block'}}>

        <h2>Your Results!</h2>
        <MapsContainer results={results} quick={quick}/>
        <div></div>
        <div style={style.flexContainer}>
          {quick ? <YelpBox choice={results[0]} num={1}/> :
            results.map((choice, index) => {
            return <YelpBox choice={choice} num={index + 1} key={index}/>
          })}
       </div>
       </div>
      </Paper>
    </div>
  );
}

export default Results;
