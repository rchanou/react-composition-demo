import React from 'react';
import $ from 'jquery';


export default class Slideshow extends React.Component {

  state = {
    slideIndex: 0
  };

  render(){
    return this.props.children[this.state.slideIndex];
  }

  componentDidMount(){
    $(document.body).keydown(e => {
      switch (e.keyCode){
        case 37:
          this.setState({
            slideIndex:
              this.state.slideIndex? (this.state.slideIndex - 1)
              : (this.props.children.length - 1)
          });
        break;

        case 39:
          this.setState({
            slideIndex:
              (this.state.slideIndex >= this.props.children.length - 1)? 0
              : (this.state.slideIndex + 1)
          });
        break;
      }
    });
  }
}
