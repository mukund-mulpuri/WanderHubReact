import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to WanderHub</h1>
      <p>Your travel companion to explore amazing destinations!</p>

      <h2>Top Destinations</h2>
      <div className="top-destinations">
        <div className="card">
          <img src="https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/1:1/w_4000,h_4000,c_limit/GettyImages-873536102.jpg" alt="Taj Mahal" />
          <p>Taj Mahal, Agra</p>
        </div>
        <div className="card">
          <img src="https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-1-attr-hero?qlt=82&ts=1742159856441" alt="India Gate" />
          <p>India Gate, Delhi</p>
        </div>
        <div className="card">
          <img src="https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg" alt="Mysore Palace" />
          <p>Mysore Palace</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
