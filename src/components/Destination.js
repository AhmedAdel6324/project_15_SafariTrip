import DestinationData from "./destinationData";
import "./DestinationStyles.css";
import destinationImg1 from "../assest/destination1.jpg";
import destinationImg2 from "../assest/destination2.jpg";
import destinationImg3 from "../assest/destination3.jpg";
import destinationImg4 from "../assest/destination4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within time frame</p>

      <DestinationData
        heading="Taal Volcano, Batangas"
        text="Taal Volcano, located in the heart of Batangas province in the
            Philippines, is one of the most stunning and awe-inspiring natural
            wonders in the world. This active volcano is unique in that it sits
            within Taal Lake, creating an unforgettable and picturesque scene.
            Visiting Taal Volcano is not just an exploration of a volcanic
            marvel, but a journey to one of the most enchanting places on earth.
            For nature lovers and adventurers alike, Taal Volcano is the perfect
            destination. Visitors can take boat trips across the lake and hike
            to the volcano's summit to enjoy breathtaking panoramic views.
            Beyond its natural beauty, the volcano holds a rich and complex
            geological history, making it an excellent place to learn about the
            power of nature."
        img1={destinationImg1}
        img2={destinationImg2}
      />

      <DestinationData
        heading="Mt. Daguldol, Batangas"
        text="Mount Daguldol, nestled in the picturesque province of Batangas, is a must-visit destination for anyone seeking an adventure amidst nature’s splendor. This mountain offers more than just a hiking experience; it provides an escape into a world of lush greenery, refreshing sea breezes, and stunning coastal views.

The trail to the summit of Mount Daguldol is perfect for both beginners and seasoned hikers, making it an ideal spot for families, friends, and solo adventurers. As you ascend, you'll be greeted by a variety of natural wonders, from verdant forests to scenic river crossings, each step bringing you closer to breathtaking views of the ocean and surrounding landscapes."
        img1={destinationImg3}
        img2={destinationImg4}
      />
    </div>
  );
};

export default Destination;
