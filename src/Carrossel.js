    
 import "./Carrossel.css"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import im from './im.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
class DemoCarousel extends Component {
    render() {
        return (
            <div id="carrossel">
                <Carousel>
                    <div>
                        <img src={im} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={im}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={im}/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
 export default DemoCarousel;

 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 