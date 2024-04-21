const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WEE ARE HERE TO HELP YOU WITH OUR SHOES AUR NIKE KA SHOES PAHNOGE TO BAHUT MAJA AAYEGA</p>
        
        <div className="hero-btn">
            <button className="first-btn">shop now </button>
            <button className="secondary-btn">category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="./images/amazon.png" alt="amazon logo" />
                <img src="./images/flipkart.png" alt="flipkart logo" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/hero-image.png" alt="hero image" />
      </div>
    </main>
  );
};
export default HeroSection;
