import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import millify from "millify";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function CryptoDetails() {
  const { coinId } = useParams();
  const [specifiCoin, setSpeiCoin] = useState([]);
  const [trade, setTrade] = useState([]);

  useEffect(() => {
    fetchSpecifiCoin();
  }, []);

  const specifiCoindata = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${coinId}`,
    params: {
      localization: "true",
      tickers: "true",
      market_data: "true",
      community_data: "true",
      developer_data: "true",
      sparkline: "true",
    },
    headers: {
      "X-RapidAPI-Key": "5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888",
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  const fetchSpecifiCoin = () => {
    axios.request(specifiCoindata).then((resp) => {
      /* console.log(resp); */
      setSpeiCoin(resp.data);
      setTrade(resp.data.tickers);
    });
  };
  /* console.log(specifiCoin); */
  /* console.log(trade); */

  let profit = specifiCoin?.market_data?.price_change_percentage_24h >= 0;

  return (
    <div className="mt-20 container mx-auto">
      <div className="lg:flex lg:gap-20">
        <div className="lg:w-[65%]">
          <div className="capitalize flex gap-3">
            <Link to="/cryptocurrencies">
              <span className="text-blue-600 font-semibold">
                Cryptocurrency
              </span>
            </Link>
            <IoIosArrowForward className="text-blue-600 mt-1" />
            <span className="font-semibold uppercase">
              {specifiCoin?.id} price
            </span>
          </div>
          <div className="mt-3">
            <span className="text-[12px] bg-black text-white px-2 py-1 rounded-lg">
              Rank #{specifiCoin?.coingecko_rank}
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            <img src={specifiCoin?.image?.large} alt="img" className="w-8" />
            <h3 className="text-lg capitalize mt-1">{specifiCoin?.name}</h3>
            <span className="text-lg text-gray-500 uppercase mt-1">
              {specifiCoin?.symbol}
            </span>
          </div>
          <div className="flex mt-3 gap-3">
            <div className="text-2xl">
              ${millify(specifiCoin?.market_data?.current_price?.usd)}
            </div>
            <div
              className="text-2xl"
              style={{ color: profit > 0 ? "rgb(14, 203, 129)" : "red" }}
            >
              {profit && "+"}
              {millify(specifiCoin?.market_data?.price_change_percentage_24h)}%
            </div>
          </div>
          <div className="mt-1 text-gray-500 text-[14px]">
            Community Score: {specifiCoin?.community_score}
          </div>
          <div className="mt-2">
            <div className="grid md:grid-cols-2 xl:mt-8 md:gap-10">
              <div>
                <div className="flex justify-between border border-x-0 border-t-0 mb-3">
                  <h5 className="text-gray-500 text-[14px]">Market Cap</h5>
                  <h6 className="text-gray-500 text-[14px]">{millify(specifiCoin?.market_data?.market_cap?.usd)}</h6>
                </div>
                <div className="flex justify-between border border-x-0 border-t-0 mb-3">
                  <h5 className="text-gray-500 text-[14px]">24 Hour Trading Vol</h5>
                  <h6 className="text-gray-500 text-[14px]">{millify(specifiCoin?.market_data?.total_volume?.usd)}</h6>
                </div>
                <div className="flex justify-between border border-x-0 border-t-0 mb-3">
                  <h5 className="text-gray-500 text-[14px]">Fully Diluted Valuation</h5>
                  <h6 className="text-gray-500 text-[14px]">{millify(specifiCoin?.market_data?.fully_diluted_valuation?.usd)}</h6>
                </div>
              </div>
              <div>
                <div className="flex justify-between border border-x-0 border-t-0 mb-3">
                    <h5 className="text-gray-500 text-[14px]">Circulating Supply</h5>
                    <h6 className="text-gray-500 text-[14px]">{millify(specifiCoin?.market_data?.circulating_supply)}</h6>
                </div>
                <div className="flex justify-between border border-x-0 border-t-0 mb-3">
                    <h5 className="text-gray-500 text-[14px]">Total Supply</h5>
                    <h6 className="text-gray-500 text-[14px]">{millify(specifiCoin?.market_data?.max_supply)}</h6>
                </div>
                <div className="flex justify-between border border-x-0 border-t-0 mb-3">
                    <h5 className="text-gray-500 text-[14px]">Max Supply</h5>
                    <h6 className="text-gray-500 text-[14px]">{millify(specifiCoin?.market_data?.max_supply)}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:mt-2 lg:mt-40">
          <h3 className="text-xl font-semibold mb-3 xl:mb-0">Info</h3>
          <div className="mt-3 flex justify-between gap-12">
            <h3 className="text-gray-500 text-[14px]">Home Page</h3>
            <div className="flex gap-2">
            <h3 className="text-[12px] text-gray-700 bg-gray-200 px-1 py-1 rounded-md"><a href={specifiCoin?.links?.homepage[0]}>homepage.org/</a></h3>
            </div>
          </div>
          <div className="mt-3 flex justify-between gap-12">
            <h3 className="text-gray-500 text-[14px]">Website</h3>
            <div className="flex gap-2">
              <h3 className="text-[12px] text-gray-700 bg-gray-200 px-1 py-1 rounded-md"><a href={specifiCoin?.links?.blockchain_site[0]}>blockchain_site</a></h3>
              <h3 className="text-[12px] text-gray-700 bg-gray-200 px-1 py-1 rounded-md"><a href={specifiCoin?.links?.blockchain_site[1]}>blockchain_site</a></h3>
            </div>
          </div>
          <div className="mt-3 flex justify-between gap-12">
            <h3 className="text-gray-500 text-[14px]">Community</h3>
            <div className="flex gap-2">
              <h3 className="text-[12px] text-gray-700 bg-gray-200 px-1 py-1 rounded-md"><a href={specifiCoin?.links?.repos_url?.github[0]}>githuib__1</a></h3>
              <h3 className="text-[12px] text-gray-700 bg-gray-200 px-1 py-1 rounded-md"><a href={specifiCoin?.links?.repos_url?.github[1]}>github__2</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <table className="table w-full">
          <thead className="border border-x-0">
            <tr>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">#</th>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">Base</th>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">Target</th>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">Price</th>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">24h Volume</th>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">Spread</th>
              <th className="text-gray-600 py-2 md:py-4 text-[10px] md:text-[16px]">Market</th>
            </tr>
          </thead>
          <tbody>
            {trade.map((item,index) => index < 21 && (
              <tr key={index} className="border border-x-0 border-t-0">
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{index+1}</td>
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{item?.base}</td>
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{item?.target}</td>
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{millify(item?.last)}</td>
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{millify(item?.volume)}</td>
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{millify(item?.bid_ask_spread_percentage)}</td>
                <td className="text-center text-[10px] md:text-[14px] py-2 md:py-4">{item?.market?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CryptoDetails;
