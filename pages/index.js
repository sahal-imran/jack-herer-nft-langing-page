import TopBar from "../Components/TopBar";
import Hero from "../Components/Hero";
import Collection from "../Components/Collection";
import WhatIsJackHerer from "../Components/WhatIsJackHerer";
import Events from "../Components/Events";
import PastEvents from "../Components/PastEvents";
import Roadmap from "../Components/Roadmap";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

function index() {
  return (
    <>
    <Hero />
    <Collection />
    <WhatIsJackHerer />
    <Events />
    <PastEvents />
    <Roadmap />
    <FAQ />
    </>
  )
}

export default index;