import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import PresentCuisine from './PresentCuisine.jsx'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
              'American', 'Asian',
              'Chinese',
              'Dessert',
              'Greek',
              'Hamburgers', 'Healthy',
              'Indian', 'Italian',
              'Japanese',
              'Mediterranean', 'Mexican', 'Middle Eastern',
              'Pasta', 'Pizza',
              'Salads', 'Sandwiches', 'Seafood', 'Soup', 'Sushi',
              'Thai',
              'Vegetarian',
              'Wings', 'Wraps'
             ],
    };
  }

  render() {
    // this doesn't hold its context inside the map function
    var that = this;

    return (
      <div>
        <Paper
          style={style.paper}
          zDepth={3}
        >
          <h1>Chewser #{this.props.counter}</h1>
          <h2>What are you in the mood for?</h2>
          <div
            style={style.container}
          >
            {this.state.types.map(function(type) {
              return
                <PresentCuisine
                  name={"wantToEat"}
                  type={type}
                  choose={that.props.wantToEat}
                />
            })}
          </div>
          <RaisedButton
            label="Next"
            primary={true}
            onClick={ () => this.props.clickHandle("waiting") } />
        </Paper>
      </div>
    )
  }

}

export default ChewserForm;
