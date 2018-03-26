import React from 'react';
import Slider from 'react-slide-out';
import 'react-slide-out/lib/index.css';
import '../css/header.css';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }
  openSlider = () => {
    this.setState({
      isOpen: true
    });
  }
  closeSlider = () => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <header className="header">
      <h1 className="headline headline--left">{ this.props.leftHeadline }</h1>
         <a className="headline headline--right" href='#' onClick={this.openSlider}>{ this.props.rightHeadline }</a>
          <Slider
            title="Service Menu"
            footer={
              <div style={{padding: '15px'}}>
                <a href='#' onClick={this.closeSlider}>Close Menu</a>
              </div>
            }
            isOpen={this.state.isOpen}
            onOutsideClick={this.closeSlider}>
            <div style={{padding: '15px'}}>
              <a href="#">Menu Item 1</a> <br />
              <a href="#">Menu Item 2</a> <br />
              <a href="#">Menu Item 3</a> <br />
              <a href="#">Menu Item 4</a> <br />
              <a href="#">Menu Item 5</a>
            </div>
            </Slider>
    </header>
    )
  }
}

export default Header;
