import "../Home/howItWorks.css";
import { BsSearch } from "react-icons/bs";
import { GiCactusPot } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

function HowItWorks() {
  return (
    <div className="howitworksall">
      <div className="HowitWorks">
        <div>
          <h1 className="howitworks-title">How It Works</h1>
        </div>
        <div className="howitworks-stepsall">
          <div className="howitworks-steps">
            <div className="searchicon">
              <BsSearch />
            </div>

            <h2>Explore our Collection </h2>
            <p>
              Discover the perfect terrarium that resonates with your style and
              preferences.
            </p>
          </div>
          <div className="howitworks-steps">
            <div className="searchicon">
              <GiCactusPot />
            </div>
            <h2>Select Your Terrarium</h2>
            <p>
              Once you've found the terrarium that speaks to you, simply add it
              to your cart and proceed to the checkout.
            </p>
          </div>
          <div className="howitworks-steps">
            <div className="searchicon">
              <TbTruckDelivery />
            </div>
            <h2>Packaged and Delivered</h2>
            <p>
              Once your order is confirmed, we carefully package your terrarium
              to ensure its safe journey to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
