import Layout from "../../layout/Layout";
import "../../styles/Home.css";
import logo from "../../assets/logop.PNG";

import { useState } from "react";



function Home() {

const images = [
  "https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg",

  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
];

const [index, setIndex] = useState(0);

return(
    <Layout>


<div className="homeBannerWrapper">

  <img
    className="homeBannerImg"
    src={images[index]}
    alt="banner"
  />

  <button
    className="bannerBtn left"
    onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
  >
    ❮
  </button>

  <button
    className="bannerBtn right"
    onClick={() => setIndex((index + 1) % images.length)}
  >
    ❯
  </button>

</div>



      {/* NAV HERO */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <img src={logo} className="brand-logo" />

          <h1 className="hero-title">
            Luxury Shopping Experience
          </h1>

          <p className="hero-subtitle">
            Discover premium products curated for you
          </p>

          <div className="hero-actions">
            <button className="btn btn-warning btn-lg">
              Shop Now
            </button>

            <button className="btn btn-outline-light btn-lg">
              Explore Deals
            </button>
          </div>

        </div>

      </section>

      {/* CATEGORY STRIP (Amazon style) */}
      <section className="container my-5">

        <div className="section-title">
          Shop by Category
        </div>

        <div className="category-grid">

          {[
            "Fashion",
            "Electronics",
            "Beauty",
            "Gaming",
            "Home",
            "Sports"
          ].map((cat, i) => (

            <div key={i} className="category-box">

              <img src={`https://source.unsplash.com/300x300/?${cat}`} />

              <div className="category-label">
                {cat}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PRODUCTS GRID (Amazon-like) */}
      <section className="container my-5">

        <div className="section-title">
          Best Sellers
        </div>

        <div className="products-grid">

          {[1,2,3,4,5,6,7,8].map((p) => (

            <div key={p} className="product-card">

              <div className="product-img">
                <img src={`https://source.unsplash.com/600x600/?luxury,product&${p}`} />
              </div>

              <div className="product-info">

                <h5>Premium Product {p}</h5>

                <div className="price">
                  ${(p * 37) + 99}
                </div>

                <button className="add-btn">
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
{/* HERO */}
      <div className="hero d-flex align-items-center text-center text-white">

        <div className="container hero-content">

          <h1 className="display-3 fw-bold animate-fade-down">
            ✨ Chop Lux
          </h1>

          <p className="lead animate-fade-up">
            Discover luxury products with modern shopping experience
          </p>

          <button className="btn btn-warning btn-lg mt-3 animate-pop">
            🛍 Shop Now
          </button>

        </div>

      </div>

      {/* FEATURES */}
      <div className="container py-5">

        <h2 className="text-center fw-bold mb-5 animate-fade-up">
          Why Choose Us ?
        </h2>

        <div className="row g-4">

          <div className="col-md-4 animate-card">
            <div className="feature-card shadow">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
              <h4> Best Deals</h4>
              <p>Top quality products at unbeatable prices.</p>
            </div>
          </div>

          <div className="col-md-4 animate-card">
            <div className="feature-card shadow">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee" />
              <h4>  Fast Delivery</h4>
              <p>We deliver in 24h–72h worldwide.</p>
            </div>
          </div>

          <div className="col-md-4 animate-card">
            <div className="feature-card shadow">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" />
              <h4> Secure Payment</h4>
              <p>100% secure & encrypted transactions.</p>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Home;

      