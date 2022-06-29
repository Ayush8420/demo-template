import { FC } from "react";
import styles from "../styles/Brands.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Brands: FC = () => {
  return (
    <section className={styles.brands}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={50}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1200: {
              slidesPerView: 5,
              spaceBetween: 50,

          }
        }}
        navigation={{
          nextEl: "." + styles.nextBtn,
          prevEl: "." + styles.prevBtn,
        }}
      >
        {slideData.map((data, key) => {
          return (
            <SwiperSlide key={key}>
              <div className={styles.slide}>
                <div className={styles.imgBx}>
                  <Image
                    src={data.imgUrl}
                    alt={data.imgUrl}
                    height={200}
                    width={200}
                    priority
                  />
                </div>
                              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.nextBtn}>
        <FiChevronRight />
      </div>
      <div className={styles.prevBtn}>
        <FiChevronLeft />
      </div>
    </section>
  );
};

export default Brands;

const slideData = [
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m001-576x329.png",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m002-576x329.png",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m003-576x329.png",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m006-576x329.png",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m007-576x329.png",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m005-576x329.png",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/m004-576x329.png",
  },
];
