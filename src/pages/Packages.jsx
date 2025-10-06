import "./Packages.css";

function Packages() {
  const packages = [
    {
      name: "Goa + Mumbai Trip",
      destinations: [
        {
          name: "Goa",
          image:
            "https://imgcld.yatra.com/ytimages/image/upload/v1517481987/AdvNation/ANN_DES67/ann_top_Goa_loQGrP.jpg",
          description: "Beaches, nightlife, and Portuguese heritage",
          rating: 4.5,
          price: "₹12,000",
        },
        {
          name: "Mumbai",
          image:
            "https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg",
          description: "City of dreams with famous landmarks",
          rating: 4.3,
          price: "₹10,000",
        },
      ],
    },
    {
      name: "Jaipur + Udaipur Trip",
      destinations: [
        {
          name: "Jaipur",
          image:
            "https://assets.minorhotels.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-jewel-bagh-jaipur-hotel/mhg/01_hotel-teaser/anantara_jewel-bagh_jaipur_hotel_teaser_01_880x620.jpg",
          description: "The Pink City with forts and palaces",
          rating: 4.6,
          price: "₹11,000",
        },
        {
          name: "Udaipur",
          image:
            "https://s7ap1.scene7.com/is/image/incredibleindia/lake-pichola-udaipur-rajasthan-2-attr-hero?qlt=82&ts=1742161994371",
          description: "City of lakes and royal heritage",
          rating: 4.7,
          price: "₹12,500",
        },
      ],
    },
  ];

  return (
    <div className="packages-page">
      <h1>Travel Packages</h1>
      <div className="packages-list">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <h2>{pkg.name}</h2>
            <div className="destinations-container">
              {pkg.destinations.map((dest, i) => (
                <div className="destination-info" key={i}>
                  <img src={dest.image} alt={dest.name} />
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <p>
                    ⭐ {dest.rating} | Price: {dest.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
