import React from 'react'

const BestSeller = () => {
    return (
      <div className="mx-5">
        <div className="row">
          <div className="row">
            <p className=" col-7 fw-bolder text-heading mt-4 text-end">
              Best Sellers Cake
            </p>
            <div className="col-5 mt-4 text-end">
              <p className="btn">View All</p>
            </div>
          </div>

          <div className="col-2 shadow-sm bg-body rounded" style={{}}>
            <img
              className="img-fluid"
              src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/31204_chocolate-truffle.webp"
              alt="Gift-1"
              width="100%"
            />
            <p className="img-text pt-2 text-start ps-2">Chocolate Truffle</p>
            <p className="img-text text-start ps-1 mt-n theme-color1">
              ₹ 599{" "}
              <span className="text-decoration-line-through discount-price">
                {" "}
                ₹749
              </span>{" "}
              (20% off)
            </p>
          </div>
          <div className="col-2 shadow-sm bg-body rounded" style={{}}>
            <img
              className="img-fluid"
              src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/37855_enticing-love.webp"
              alt="Gift-1"
              width="98%"
            />
            <p className="img-text pt-2 text-start ps-2">Enticing Love</p>
            <p className="img-text text-start ps-1 mt-n theme-color1">
              ₹ 599{" "}
              <span className="text-decoration-line-through discount-price">
                {" "}
                ₹749
              </span>{" "}
              (20% off)
            </p>
          </div>
          <div className="col-2 shadow-sm bg-body rounded" style={{}}>
            <img
              className="img-fluid"
              src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/37695_lovely-red-velvet-heart-shape-cake.webp"
              alt="Gift-1"
              width="98%"
            />
            <p className="img-text pt-2 text-start ps-2">Red Velvet</p>
            <p className="img-text text-start ps-1 mt-n theme-color1">
              ₹ 599{" "}
              <span className="text-decoration-line-through discount-price">
                {" "}
                ₹749
              </span>{" "}
              (20% off)
            </p>
          </div>
          <div className="col-2 shadow-sm bg-body rounded" style={{}}>
            <img
              className="img-fluid"
              src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/37740_toothsome-chocolate-cake.webp"
              alt="Gift-1"
              width="98%"
            />
            <p className="img-text pt-2 text-start ps-2">Chocolate Cake</p>
            <p className="img-text text-start ps-1 mt-n theme-color1">
              ₹ 599{" "}
              <span className="text-decoration-line-through discount-price">
                {" "}
                ₹749
              </span>{" "}
              (20% off)
            </p>
          </div>
          <div className="col-2 shadow-sm bg-body rounded" style={{}}>
            <img
              className="img-fluid"
              src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/31154_delightful-black-forest-cake.webp"
              alt="Gift-1"
              width="98%"
            />
            <p className="img-text pt-2 text-start ps-2">Black Forest</p>
            <p className="img-text text-start ps-1 mt-n theme-color1">
              ₹ 599{" "}
              <span className="text-decoration-line-through discount-price">
                {" "}
                ₹749
              </span>{" "}
              (20% off)
            </p>
          </div>
          <div className="col-2 shadow-sm bg-body rounded" style={{}}>
            <img
              className="img-fluid"
              src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/44719_lipsmacking-premium-butterscotch-cake.webp"
              alt="Gift-1"
              width="98%"
            />
            <p className="img-text pt-2 text-start ps-2">Butter Scotch</p>
            <p className="img-text text-start ps-1 mt-n theme-color1">
              ₹ 599{" "}
              <span className="text-decoration-line-through discount-price">
                {" "}
                ₹749
              </span>{" "}
              (20% off)
            </p>
          </div>
        </div>
        <div className="row my-5 shadow p-3 bg-body rounded">
          <div className="col-4">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/new-arrival.webp"
              alt="promotional"
              width="100%"
            />
          </div>
          <div className="col-4">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/designer-cake.webp"
              alt="promotional"
              width="100%"
            />
          </div>
          <div className="col-4">
            <img
              src="https://d3s16h6oq3j5fb.cloudfront.net/img/desktop-home-21/webp-images/mid-night-delivery.webp"
              alt="promotional"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
}

export default BestSeller
