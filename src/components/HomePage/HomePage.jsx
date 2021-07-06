import React from "react";
import hp1 from '../../images/hp1.jpg';
import hp2 from '../../images/hp2.jpg';
import hp3 from '../../images/hp3.jpg';
import hp4 from '../../images/hp4.jpg';
import hp5 from '../../images/hp5.jpg';

const HomePage = () => {
  return (
    <div className="wrapper-homepage">
      <div className="products-section">
        <div style={{backgroundImage: `url(${hp1})`}} className="_col laptop-section">
          <div className="mask"></div>
          <h3 className="title-section">LAPTOP</h3>
        </div>
        <div style={{backgroundImage: `url(${hp2})`}} className="_col pc-section">
          <div className="mask"></div>
          <h3 className="title-section">PC</h3>
        </div>
        <div style={{backgroundImage: `url(${hp3})`}} className="_col mobile-section">
          <div className="mask"></div>
          <h3 className="title-section">MOBILE</h3>
        </div>
      </div>
      <div className="dealsale-section">
        <div style={{backgroundImage: `url(${hp4})`}} className="_col _2col hot-deals">
          <div className="mask"></div>
          <h3 className="title-section">Hot Deals</h3>
        </div>
        <div style={{backgroundImage: `url(${hp5})`}} className="_col _2col on-sale">
          <div className="mask"></div>
          <h3 className="title-section">On Sales</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
