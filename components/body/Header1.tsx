import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBox, BsSearch } from "react-icons/bs";

const Header1 = () => {
  return (
    <header>
    <div className="header">
      <Image src={`/HeaderImg.png`} alt="HeaderImage" width={1000} height={1000} className="headerImage" />
      <div className="info">
        <p className="tagline">Shipping service designed best to serve you</p>
        <p className="subTagline">
          Ship Your Goods Anywhere in the World with our Fast and Reliable Shipping Services from Nigeria.{`  `}
          <span className="bg-accent-2 rounded-sm padding-2">No hassel</span>...
          <span className="bg-accent-3 rounded-sm padding-2">No Delays</span>
        </p>

        <div className="form">
          <input type="text" className="input" placeholder="Search country to get pricing" />
          <button type="button">
            Search <BsSearch />{" "}
          </button>
        </div>

        <div className="bottom">
          <div className="bInfo">
            <TbTruckDelivery />
            Door-step Delivery
          </div>
          <div className="bInfo">
            <BsBox />
            Pay per KG - from ₦13,000
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header1