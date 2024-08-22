// api.js
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.jpeg'
import img7 from '../../assets/images/img7.jpg'
const travelData = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    mainImage: img1,
    subImages: [
      img1, img3, img4, img5
    ],
    description: "Santorini is a beautiful island in the Aegean Sea, known for its white-washed buildings with blue domes, stunning sunsets, and crystal-clear waters.",
  },
  {
    id: 2,
    name: "Kyoto",
    location: "Japan",
    mainImage: img2,
    subImages: [
      "https://example.com/kyoto1.jpg",
      "https://example.com/kyoto2.jpg",
      "https://example.com/kyoto3.jpg",
      "https://example.com/kyoto4.jpg",
    ],
    description: "Kyoto is a city on the island of Honshu, Japan, famous for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
  },
  {
    id: 3,
    name: "Machu Picchu",
    location: "Peru",
    mainImage: img3,
    subImages: [
      "https://example.com/machu-picchu1.jpg",
      "https://example.com/machu-picchu2.jpg",
      "https://example.com/machu-picchu3.jpg",
      "https://example.com/machu-picchu4.jpg",
    ],
    description: "Machu Picchu is a 15th-century Inca citadel located in the Andes Mountains, known for its breathtaking views and rich history.",
  },
  {
    id: 4,
    name: "Paris",
    location: "France",
    mainImage: img4,
    subImages: [
      "https://example.com/paris1.jpg",
      "https://example.com/paris2.jpg",
      "https://example.com/paris3.jpg",
      "https://example.com/paris4.jpg",
    ],
    description: "Paris, the capital of France, is known for its art, fashion, gastronomy, and culture. The city is home to iconic landmarks like the Eiffel Tower and the Louvre Museum.",
  },
  {
    id: 5,
    name: "Bora Bora",
    location: "French Polynesia",
    mainImage: img5,
    subImages: [
      "https://example.com/bora-bora1.jpg",
      "https://example.com/bora-bora2.jpg",
      "https://example.com/bora-bora3.jpg",
      "https://example.com/bora-bora4.jpg",
    ],
    description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia, surrounded by turquoise waters and a barrier reef.",
  },
  {
    id: 6,
    name: "Bora Bora",
    location: "French Polynesia",
    mainImage: img6,
    subImages: [
      "https://example.com/bora-bora1.jpg",
      "https://example.com/bora-bora2.jpg",
      "https://example.com/bora-bora3.jpg",
      "https://example.com/bora-bora4.jpg",
    ],
    description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia, surrounded by turquoise waters and a barrier reef.",
  },
  {
    id: 7,
    name: "Bora Bora",
    location: "French Polynesia",
    mainImage: img7,
    subImages: [
      "https://example.com/bora-bora1.jpg",
      "https://example.com/bora-bora2.jpg",
      "https://example.com/bora-bora3.jpg",
      "https://example.com/bora-bora4.jpg",
    ],
    description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia, surrounded by turquoise waters and a barrier reef.",
  }
];

export default travelData;
