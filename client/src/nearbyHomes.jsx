import React from 'react';



class NearbyHomes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFirstPicture: 0,
            currentSecondPicture: 1,
        }
        this.slidePicsToRight = this.slidePicsToRight.bind(this);
        this.slidePicsToLeft = this.slidePicsToLeft.bind(this);
    }

    slidePicsToRight() {
        this.setState({
            currentFirstPicture: this.state.currentFirstPicture + 2, 
            currentSecondPicture: this.state.currentSecondPicture + 2
        })
    }

    slidePicsToLeft() {
        if (this.state.currentFirstPicture > 0) {
            this.setState({
                currentFirstPicture: this.state.currentFirstPicture - 2, 
                currentSecondPicture: this.state.currentSecondPicture - 2
            })
        }
    }

    render() {
        return (
            <div>
                <h5>NEARBY HOMES</h5>
                <div id="nearbyHomesCarrouselContainer">
                    <button className="nearbyHomesPicsScroll" onClick={this.slidePicsToLeft}>{'<'}</button>
                    
                    <div className="nearbyHomesPicContainer">
                        <img className="nearbyHomesPic" src={this.props.properties[this.state.currentFirstPicture].imgUrl}></img>
                        <div className="nearbyHomesPicTextOverlayPhotos">{Math.round(Math.random()*10 + 2) + ' photos'}</div>
                        <div className="nearbyHomesPicTextOverlayOnOffMarket">On Market</div>
                        <div className="nearbyHomesPicTextOverlayPrice">{'$' + Math.round(this.props.properties[this.state.currentFirstPicture].price/1000) + 'K'}</div>
                        <div className="nearbyHomesPicTextOverlayBeds">{this.props.properties[this.state.currentFirstPicture].beds + ' beds, ' + this.props.properties[this.state.currentFirstPicture].baths + ' baths, ' + this.props.properties[this.state.currentFirstPicture].sqft + ' sqft'}</div>
                        <div className="nearbyHomesPicTextOverlayAddress">{this.props.properties[this.state.currentFirstPicture].address}</div>
                    </div>

                    <div className="nearbyHomesPicContainer">
                        <img className="nearbyHomesPic" src={this.props.properties[this.state.currentSecondPicture].imgUrl}></img>
                        <div className="nearbyHomesPicTextOverlayPhotos">{Math.round(Math.random()*10 + 2) + ' photos'}</div>
                        <div className="nearbyHomesPicTextOverlayOnOffMarket">On Market</div>
                        <div className="nearbyHomesPicTextOverlayPrice">{'$' + Math.round(this.props.properties[this.state.currentFirstPicture].price/1000) + 'K'}</div>
                        <div className="nearbyHomesPicTextOverlayBeds">{this.props.properties[this.state.currentFirstPicture].beds + ' beds, ' + this.props.properties[this.state.currentFirstPicture].baths + ' baths, ' + this.props.properties[this.state.currentFirstPicture].sqft + ' sqft'}</div>
                        <div className="nearbyHomesPicTextOverlayAddress">{this.props.properties[this.state.currentFirstPicture].address}</div>
                    </div>

                    <button className="nearbyHomesPicsScroll" onClick={this.slidePicsToRight}>{'>'}</button>
                </div>
            </div>
        );
    }
}

module.exports = NearbyHomes;