import "./TripStyles.css";
import TripData from "./TripData";
import trip1 from "../assest/trip1.jpg";
import trip2 from "../assest/trip2.jpg";
import trip3 from "../assest/trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps.</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip in Indonesia"
          text="Indonesia, the paradise of the archipelago with over 17,000 islands, is an unrivaled destination for nature lovers, culture enthusiasts, and adventure seekers alike. Whether you're searching for idyllic beaches with turquoise waters and soft white sands, or eager to explore dense rainforests teeming with incredible biodiversity, Indonesia offers everything you could dream of."
        />

        <TripData
          image={trip2}
          heading="Trip in Malaysia"
          text="
Malaysia, a land of rich cultural heritage and breathtaking natural beauty, is a destination that promises an unforgettable experience for every traveler. From the vibrant cityscape of Kuala Lumpur, where modern skyscrapers stand alongside historic temples, to the serene rainforests and pristine beaches, Malaysia offers a perfect blend of tradition and modernity."
        />

        <TripData
          image={trip3}
          heading="Trip in Switzerland."
          text="
Switzerland, a jewel nestled in the heart of Europe, is a destination that promises an unparalleled blend of natural beauty, cultural richness, and outdoor adventure. Known for its breathtaking landscapes, this alpine country offers stunning vistas of majestic mountains, crystal-clear lakes, and picturesque villages."
        />
      </div>
    </div>
  );
}

export default Trip;
