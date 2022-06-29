import { FC } from "react";
import styles from "../styles/Photos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Photos: FC = () => {
  return (
    <section className={styles.photo}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={50}
        breakpoints={{
          100:{
            slidesPerView : 1,
            spaceBetween : 50
          },
          900 : {
            slidesPerView: 3,
            spaceBetween: 30
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
                    height={900}
                    width={900}
                    priority
                  />
                </div>
                <p>{data.caption}</p>
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

export default Photos;

const slideData = [
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/p24-900x900.jpg",
    caption: "Lorem, ipsum dolor",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/art-por-008-900x900.jpg",
    caption: "Sed, ipsam est",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/p22-3-1000x1000.jpg",
    caption: "Esse, quisquam aliquam",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/art-por-001-1000x1000.jpg",
    caption: "Eligendi, perspiciatis sapiente",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2020/03/art-por-021.jpg",
    caption: "Animi, aspernatur reiciendis",
  },
  {
    imgUrl:
      "https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2021/08/dc005-1000x1000.jpg",
    caption: "Nobis, rerum quaerat",
  },
];
