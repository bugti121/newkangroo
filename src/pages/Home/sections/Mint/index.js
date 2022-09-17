/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Mint = () => {
  const [count, setcount] = useState(0);
  const limit = 1006;
  return (
    <div className="mint" id="mint">
      {/* <img src="/media/images/mint.png" alt="mint-bg" /> */}
      <h1>
        {count}/{limit}
      </h1>
      <div
        className="btn btn-minus"
        onClick={() => {
          count > 0 && setcount(count - 1);
        }}
      >
        <p>-</p>
      </div>
      <div
        className="btn btn-plus"
        onClick={() => {
          count < limit && setcount(count + 1);
        }}
      >
        <p>+</p>
      </div>
      <div className="branch">
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
      </div>
    </div>
  );
};

export default Mint;
