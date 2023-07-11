import React from 'react';
import './Coin.css'

function Coin({
  name,
  price,
  symbol,
  volume,
  image,
  priceChange
}) {
  return (
    <div className='coin-container crypto-box shadow '>
      <div className="top">
        <a href="#/">
          <img src={image} alt='crypto' />
          <span>{name}</span>
          <span className="unit">{symbol}</span>
        </a>
      </div>
      <div className=" bottom box-second">
      <h6 className="price display-4 ">USD {price}</h6>
      {priceChange < 0 ? (
          <p className=' sale  critical coin-red'>{priceChange.toFixed(2)}%</p>
        ) : (<p className=' sale  success coin-green'>{priceChange.toFixed(2)}%</p>
        )}
      </div>
      <div className="bottom">
        <p className="coinbox-bottom">${volume.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Coin;