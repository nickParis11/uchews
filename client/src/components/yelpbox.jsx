import React from 'react';
import YelpLogo from '../../dist/assets/yelp/yelp.png';
import Five from '../../dist/assets/yelp/5star.png';
import FourHalf from '../../dist/assets/yelp/4halfstar.png';
import Four from '../../dist/assets/yelp/4star.png';
import ThreeHalf from '../../dist/assets/yelp/3halfstar.png';
import Three from '../../dist/assets/yelp/3star.png';
import TwoHalf from '../../dist/assets/yelp/2halfstar.png';
import Two from '../../dist/assets/yelp/2star.png';
import OneHalf from '../../dist/assets/yelp/1halfstar.png';
import One from '../../dist/assets/yelp/1star.png';
import None from '../../dist/assets/yelp/nostar.png';

const style = {
  restaurantBox: {
    border: '2px solid #c9cacc',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0px 10px 0px',
    maxWidth: 550
  },
  restaurantDetails: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '60%'
  },
  review: {
    fontStyle: 'italic',
    fontSize: 13,
    testAlign: 'left'
  },
  logo: {
    maxWidth: 75,
    float: 'right'
  },
  img: {
    border: '2px solid #c9cacc',
    borderRadius: 25,
    maxWidth: '90%',
    maxHeight: '90%'
  },
  stars: {
    maxWidth: '30%',
  }
};


class YelpBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.getStars = this.getStars.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  showMoreReviews() {
    this.setState({
      showMore: !this.state.showMore
    });
    document.getElementById('read-more').setAttribute('text', '');
  }

  getStars(rating) {
    if (parseInt(rating) === 5) {
      return Five;
    } else if (parseInt(rating) >= 4.5) {
      return FourHalf;
    } else if (parseInt(rating) >= 4) {
      return Four;
    } else if (parseInt(rating) >= 3.5) {
      return ThreeHalf;
    } else if (parseInt(rating) >= 3) {
      return Three;
    } else if (parseInt(rating) >= 2.5) {
      return TwoHalf;
    } else if (parseInt(rating) >= 2) {
      return Two;
    } else if (parseInt(rating) >= 1.5) {
      return OneHalf;
    } else if (parseInt(rating) >= 1) {
      return One;
    } else {
      return None;
    }
  }

  render() {


    return (
      <div>
      <h1>#{this.props.num}</h1>

      <div style={style.restaurantBox}>
        <div>
          <a><img src={this.props.choice[0].yelpImg} style={style.img}></img></a>
        </div>

        <div style={style.restaurantDetails}>
          <h3>{this.props.choice[0].name}</h3>
          <a>{this.props.choice[0].formatted_address}</a>

          <p><img src={this.getStars(this.props.choice[0].rating)} style={style.stars}></img>{this.props.choice[0].yelpReviewCount} Reviews</p>

          <p style={style.review}>
            {!this.state.showMore ? this.props.choice[0].reviews.jsonBody.reviews[0].text :
              this.props.choice[0].reviews.jsonBody.reviews.map((review) => {
                <p>review.text</p>
            })}
          <a onClick={this.showMoreReviews} id="read-more">Read More</a>
          </p>
          <a href={this.props.choice[0].yelpUrl} target="_blank"><img src={YelpLogo} alt="" style={style.logo}></img></a>
        </div>
      </div>

      </div>

    );
  }

}

export default YelpBox;