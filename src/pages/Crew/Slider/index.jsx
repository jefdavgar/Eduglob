import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper";

function Slider({jsonData, setMember}) {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={({activeIndex}) => setMember(activeIndex)}
        className="mySwiper"
      >
        {jsonData.map( member => {
          return (
            <SwiperSlide>
              <span className="span">{member.role}</span>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Slider