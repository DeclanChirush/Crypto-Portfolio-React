import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import MarketTable from "../containers/market-tables/MarketTable";
// import AboutContentTwo from "../components/about-contents/AboutContentTwo";
// import VideoPopup from "../components/video-popups/VideoPopup";
// import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
// import AboutContentThree from "../components/about-contents/AboutContentThree";

const AboutBitcoin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Howard | About Bitcoin</title>
        <meta
          name="description"
          content="About bitcoin page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">

        {/* breadcrumb */}
        <Breadcrumb title="Coins" />

        {/* about content */}
        {/*<AboutContentThree />*/}

        {/* market table */}
        <MarketTable />

        {/* currency ticker */}
        {/*<CurrencyTicker theme="dark" />*/}
        {/* video popup */}
        {/*<VideoPopup />*/}
        {/* about content two */}
        {/*<AboutContentTwo />*/}
      </LayoutTwo>
    </Fragment>
  );
};

export default AboutBitcoin;
