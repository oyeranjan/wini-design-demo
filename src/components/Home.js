import React from 'react'
import HeroImage from "../images/hero-image.webp"
const Home = () => {
    return (
      <div className="z-index-n1 border-bottom" style={{ marginTop: "0.7rem" }}>
        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid"
              src={HeroImage}
              alt="hero-image1"
              width="100%"
            />
          </div>
        </div>
        <div className="row">
          <p className="fw-bolder text-heading mt-2">Gift Wrapped With Love</p>
          <div className="col-3">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/flower-val.webp"
              alt="Gift-1"
              width="100%"
            />
          </div>
          <div className="col-3">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/cake-val.webp"
              alt="Gift-1"
              width="100%"
            />
          </div>
          <div className="col-3">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/combo-val.webp"
              alt="Gift-1"
              width="100%"
            />
          </div>
          <div className="col-3">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/chocolate-val.webp"
              alt="Gift-1"
              width="100%"
            />
          </div>
        </div>
        <div className="row">
          <p className="fw-bolder text-heading mt-2">
            Wide Range Of Gifting Options
          </p>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/anniversary.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Anniversary Gifts</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/birthday-gifts.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Birthday Gifts</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/personalised-gifts.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Personalized Gifts</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/winni-exculusive.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Winni Exclusive</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/plants.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Plants</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/gifts.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Gifts</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/premium-flowers-33.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Flowers</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/best-seller.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">Best Seller</p>
          </div>
          <div className="col mx-1">
            <img
              className="img-fluid"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/2hr-delivery.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2">2 Hrs Delivery</p>
          </div>
        </div>
      </div>
    );
}

export default Home
