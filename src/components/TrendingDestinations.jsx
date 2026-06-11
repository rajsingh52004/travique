import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import DestinationCard from "./DestinationCard";
import { destinations } from "../data/travelData";
import "../styles/TrendingDestinations.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TrendingDestinations() {
  return (
    <section className="trending-section">
      <div className="travique-container">
        <div className="section-heading">
          <p>Traveler favorites</p>
          <h2>Explore 100+ world destinations</h2>
          <span>
            Swipe through famous cities, hidden gems, weekend spots and dream destinations.
          </span>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            650: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="destination-swiper"
        >
          {destinations.map((item) => (
            <SwiperSlide key={item.id}>
              <DestinationCard destination={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TrendingDestinations;