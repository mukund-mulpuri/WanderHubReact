import "./Hotels.css";

function Hotels() {
  const hotels = [
    {
      name: "Taj Mahal Palace",
      city: "Mumbai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqHkWL2yy7QW4M-0rNQvPtWy_wMQjj1Vc2g&s"
    },
    {
      name: "Leela Palace",
      city: "Udaipur",
      image: "https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/styles/large_gallery_1600x1200_/public/2024-10/Web_Gallery-Inner%20Courtyard.jpg"
    },
    {
      name: "Oberoi Amarvilas",
      city: "Agra",
      image: "https://www.oberoihotels.com/-/media/oberoi-hotel/udaivilas-resized/Udaivilas/Overview/welcome/desktop1024x706/2.jpg"
    },
    {
      name: "Marriott Resort",
      city: "Goa",
      image: "https://cache.marriott.com/content/dam/marriott-digital/mc/apec/hws/i/ixemc/en_us/photo/unlimited/assets/mc-ixemc-ixemc-pooldusk-02-34057.jpg"
    }
  ];

  return (
    <div className="hotels-page">
      <h1>Top Hotels</h1>
      <div className="hotels-container">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p>{hotel.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
