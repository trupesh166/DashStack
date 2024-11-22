import { Layout } from "antd";
import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { Outlet } from "react-router-dom";
import { DSSwiperSlider } from "@/components";
import { AuthSliderData } from "@/constants";
import styles from "./Authentication.module.css";

export const AuthLayouts = () => {
  return (
    <Layout className={clsx(styles.main, "d-grid bg-white")}>
      <div className={clsx(styles.AuthenticationLeft, "position-relative")}>
        <h1 className="font-secondary">
          <span className={styles.logoPart}>Dash</span>
          Stack
        </h1>
        <div className={styles.slide}>
          <DSSwiperSlider
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              // el: styles.pagination,
            }}
          >
            {AuthSliderData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="ratio ratio-1x1">
                  <img src={slide.image} className={styles.slideImg} />
                </div>
                <h3 className="text-center">{slide.title}</h3>
              </SwiperSlide>
            ))}
          </DSSwiperSlider>
        </div>
      </div>
      <div className={clsx(styles.AuthenticationRight, "d-flex flex-column")}>
        <div
          className={clsx(
            styles.AuthenticationContent,
            "w-100 m-auto bg-white"
          )}
        >
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};
