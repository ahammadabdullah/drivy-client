import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
  const banner1 =
    "https://cdn.discordapp.com/attachments/796439138403352596/1164074776701190225/H9_1920x1080_r1_c1.png?ex=6541e41e&is=652f6f1e&hm=082d1c0afeb1477ec2b710ff968be902f1de65cb46ebc5c2a7e6ea55cfa12999&";
  const banner2 =
    "https://cdn.discordapp.com/attachments/796439138403352596/1164074844535664670/OUSADO_1920x1080_r1_c1.png?ex=6541e42e&is=652f6f2e&hm=96735eb5dce89758b7c88f0a39e9cc523a4d456f830ce4b32a2a3a25473cf639&";
  const banner3 =
    "https://cdn.discordapp.com/attachments/796439138403352596/1164075108810371143/H9-Comfort_1920x1080_r1_c1.png?ex=6541e46d&is=652f6f6d&hm=57bbe7eb692533af4326d90413c761e0d95e682dea34018461f45de3ca0e7b9d&";

  return (
    <div>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
