import "./Home.scss";
import CatCard from "../../components/catCard/catCard";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import { cards, projects } from "../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const cardSlider = cards.map((item) => <CatCard item={item} key={item.id} />);
export const Home = () => {
  const gigsSlider = projects.map((card) => (
    <ProjectCard key={card.id} card={card} />
  ));
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide children={cardSlider} slidesToShow={4} arrowScroll={5} />
      <div className="features">
        <div className="item">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="title">
            <i class="fa-regular fa-circle-check"></i>
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className="title">
            <i class="fa-regular fa-circle-check"></i>
            Quality work done quickly
          </div>
          <p>
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className="title">
            <i class="fa-regular fa-circle-check"></i>
            Protected payments, every time
          </div>
          <p>
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className="title">
            <i class="fa-regular fa-circle-check"></i>
            24/7 support
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className="item">
          <video src="./img/video.mp4" controls />
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <i class="fa-regular fa-circle-check"></i>
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <i class="fa-regular fa-circle-check"></i>
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <i class="fa-regular fa-circle-check"></i>
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide children={gigsSlider} slidesToShow={4} arrowScroll={5} />
    </div>
  );
};
