import "./Destination.css";

function Destination() {
  const destinations = [
    {
      name: "Araku Valley",
      image:
        "https://imgcld.yatra.com/ytimages/image/upload/v1517481987/AdvNation/ANN_DES67/ann_top_Goa_loQGrP.jpg",
      description:
        "Famous for its beaches, nightlife, and Portuguese heritage.",
    },
    {
      name: "Tirupathi",
      image:
        "https://assets.minorhotels.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-jewel-bagh-jaipur-hotel/mhg/01_hotel-teaser/anantara_jewel-bagh_jaipur_hotel_teaser_01_880x620.jpg",
      description: "The Pink City known for forts, palaces, and rich culture.",
    },
    {
      name: "Amaravathi",
      image:
        "https://lp-cms-production.imgix.net/2024-09/shutterstock2483760103.jpg?auto=format,compress&q=72&fit=crop",
      description: "Explore serene backwaters, lush greenery, and Ayurveda.",
    },
    {
      name: "Vizag",
      image:
        "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg",
      description: "Adventure hub with mountains, skiing, and trekking.",
    },
  ];

  return (
    <div className="destination-page">
      <h1>Top Destinations in India</h1>
      <div className="destination-cards">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <img src={dest.image} alt={dest.name} />
            <h2>{dest.name}</h2>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
