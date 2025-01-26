import React, { useContext, useEffect } from "react";
import Header from "../layout/Header";
import { ModeContext } from "../context/ModeContext";
import Footer from "../layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [changeMode] = useContext(ModeContext);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Header />
      <div className={changeMode === "light" ? "light-con" : "dark-con"}>
        <h1 className="top-text" data-aos="fade-up-right">
          About Us
        </h1>
        <div className="about">
          <img
            src="https://i.pinimg.com/originals/5a/8e/72/5a8e72390a066bbede2cd33612760ca3.gif"
            alt=""
            data-aos="fade-up-right"
          />
          <p data-aos="fade-up-right">
            ‍We believe local bookstores are essential community hubs that
            foster culture, curiosity, and a love of reading, and we're
            committed to helping them thrive. Every purchase on the site
            financially supports independent bookstores. Our platform gives
            independent bookstores tools to compete online and financial support
            to help them maintain their presence in local communities.
          </p>
        </div>
        <div className="middle-cont">
          Since 2020, we've raised more than <span>  $35 million  </span> for
          independent bookstores.
        </div>
        <div className="main-container" style={{ overflow: "hidden" }}>
          <h1 className="top-text-sec">How It Work</h1>
          <p className="other">(and how your purchases help bookstores)</p>
          <div className="information">
            <div className="right-part d-flex" data-aos="fade-up-right">
              <p className="header-t">Pick A Store</p>
              <p>
                Visit our find a local bookstore page and select the bookstore
                you'd like to support. If you don't choose a store, you'll
                contribute to our profit sharing pool that helps all our stores.
              </p>
            </div>
            <img
              src="https://i.pinimg.com/736x/4f/d9/32/4fd932c6e6f6d4437721d984da7f2073.jpg"
              alt=""
              data-aos="fade-up-left"
            />
          </div>
          <div className="information">
            <div className="right-part d-flex" data-aos="fade-up-right">
              <p className="header-t">Buy a Book</p>
              <p>
                Your order will be filled directly by our distributor, and the
                full profit from your purchase will be sent to bookstore you
                selected.
              </p>
            </div>
            <img
              src="https://i.pinimg.com/736x/87/39/91/8739911c6704ee3622863b733857d3ce.jpg"
              alt=""
              data-aos="fade-up-left"
            />
          </div>
          <div className="information">
            <div className="right-part d-flex" data-aos="fade-up-right">
              <p className="header-t">Check the Mail</p>
              <p>
                You'll receive a confirmation and tracking number when your
                order is placed, and our in-house customer service team will be
                standing by if you have issues or returns.
              </p>
            </div>
            <img
              src="https://i.pinimg.com/736x/07/0d/56/070d563803f717faa9a63a4a140cc924.jpg"
              alt=""
              data-aos="fade-up-left"
            />
          </div>
          <div className="information">
            <div className="right-part d-flex" data-aos="fade-up-right">
              <p className="header-t">Help Bookstores</p>
              <p>
                We donate profits directly to bookstores—both the funds from
                direct purchases and our profit pool that's split between our
                2,000+ stores.
              </p>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2019/07/05/06/51/library-4317851_1280.jpg"
              alt=""
              data-aos="fade-up-left"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
