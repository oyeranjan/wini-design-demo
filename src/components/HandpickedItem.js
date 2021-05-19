import React from 'react'

const HandpickedItem = () => {
    return (
      <div>
        <div className="row" style={{ backgroundColor: "#FF367C" }}>
          <div className="col-4">
            <img
              className="pt-5 ps-5 pb-3 pe-5"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/hand-picked-for-her.webp"
              alt=""
              width="75%"
            />
            <img
              className="pb-3 pe-3"
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/pink-shop-now.webp"
              alt=""
              width="30%"
            />
          </div>
          <div className="col-8">
            <div
              className="row mx-auto mt-4 mx-1"
              style={{ backgroundColor: "white" }}
            >
              <div className="col-3 py-2">
                <img
                  src="https://d3s16h6oq3j5fb.cloudfront.net/img/new-home-20/webp-images/girlfriend.webp"
                  alt=""
                  width="90%"
                />
                <p
                  className="theme-color1"
                  style={{
                    backgroundColor: "white",
                    marginTop: "-40px",
                    padding: "10px",
                    position: "absolute",
                  }}
                >
                  Girlfriend
                </p>
              </div>
              <div className="col-3 py-2">
                <img
                  src="https://d3s16h6oq3j5fb.cloudfront.net/img/new-home-20/webp-images/wife.webp"
                  alt=""
                  width="90%"
                />
                <p
                  className="theme-color1"
                  style={{
                    backgroundColor: "white",
                    marginTop: "-40px",
                    padding: "10px",
                    position: "absolute",
                  }}
                >
                  Wife
                </p>
              </div>
              <div className="col-3 py-2">
                <img
                  src="https://d3s16h6oq3j5fb.cloudfront.net/img/new-home-20/webp-images/sister.webp"
                  alt=""
                  width="90%"
                />
                <p
                  className="theme-color1"
                  style={{
                    backgroundColor: "white",
                    marginTop: "-40px",
                    padding: "10px",
                    position: "absolute",
                  }}
                >
                  Sister
                </p>
              </div>
              <div className="col-3 py-2">
                <img
                  src="https://d3s16h6oq3j5fb.cloudfront.net/img/new-home-20/webp-images/mother.webp"
                  alt=""
                  width="90%"
                />
                <p
                  className="theme-color1"
                  style={{
                    backgroundColor: "white",
                    marginTop: "-40px",
                    padding: "10px",
                    position: "absolute",
                  }}
                >
                  Mother
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-12">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/store-banners.webp"
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-3">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/safe-and-hygienic.webp"
              alt=""
              width="90%"
            />
          </div>
          <div className="col-3">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/delivery-in-cities.webp"
              alt=""
              width="90%"
            />
          </div>
          <div className="col-3">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/trusted-by-millions.webp"
              alt=""
              width="90%"
            />
          </div>
          <div className="col-3">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/service-in-pincodes.webp"
              alt=""
              width="90%"
            />
          </div>
        </div>
      </div>
    );
}

export default HandpickedItem
