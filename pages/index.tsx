import type { NextPage } from "next";
import Head from "next/head";
import Header from "../component/Header";
import DesktopNavbar from "../component/DesktopNavbar";
import styles from "../styles/Home.module.scss";
import Navbar from "../component/Navbar";
import ImageSection from "../component/ImageSection";
import { BiSubdirectoryLeft } from "react-icons/bi";
import Story from "../component/Story";
import Spaciality from "../component/Spaciality";
import Footer from "../component/Footer";
import Photos from "../component/Photos";
import Brands from "../component/Brands";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopNavbar />
      <Navbar />
      <div className={styles.container}>
        <Header />
        <ImageSection
          imgPos="left"
          imgUrl="https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2021/08/dc019.jpg"
        >
          <h2>
            <span>Hello!</span> We are Seven Minimal Creative.
          </h2>
          <p>
            We design and develop modern web solutions with a professional
            design using latest technologies and trends.
          </p>
        </ImageSection>

        <Story />
        <Photos />
        <ImageSection
          imgPos="right"
          imgUrl="https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2021/08/dc0066.jpg"
        >
          <h2>
            Digital <span>Solutions</span> for Your Business
          </h2>
          <p>
            We design reliable future-proof visual & digital solutions for your
            business. Contact us to get a quote!
          </p>
        </ImageSection>
        <Spaciality />

        <ImageSection
          imgPos="left"
          imgUrl="https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2021/08/dc015.jpg"
        >
          <h2>Let&apos;s have a chat!</h2>
          <p>
            We are open for hire. Let&apos;s bring your creative ideas to life
            together!
          </p>
          <button>Contact us now</button>
        </ImageSection>
        <Brands />
        <Footer />
      </div>
    </>
  );
};

export default Home;
