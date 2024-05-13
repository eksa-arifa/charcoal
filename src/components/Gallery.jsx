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
                <img src="https://images.unsplash.com/photo-1602037348227-c874695ca678?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gambar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src="https://images.unsplash.com/photo-1589007716619-42656585dd85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gambar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src="https://images.unsplash.com/photo-1502030818212-8601501607a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gambar" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
