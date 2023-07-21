import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { Container} from "reactstrap";

function CoinSection() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data.splice(res.data[7] , 6));
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <section className="section coin_section pb-0 section-components">
        <div className="py-7 bg-secondary">
          <Container>
            <div className="coin-app">
              {filteredCoins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default CoinSection;
