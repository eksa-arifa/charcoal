// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gallery = () => {
  return (
    <>
      <div className="gallery" id="gallery">
        <h2>Gallery</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="swiper"
          autoplay
        >
          <SwiperSlide>
            <div className="image">
                <img src="https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/10/Nama-Anime-Couple.jpg" alt="gambar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
                <img src="https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/10/Nama-Anime-Couple.jpg" alt="gambar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
                <img src="https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/10/Nama-Anime-Couple.jpg" alt="gambar" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
