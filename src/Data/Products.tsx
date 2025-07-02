import { Product } from "../Types/ProductsTypes";

export const products: Product[] = [
  {
    id: 1,
    slug: "ajui-sofa",
    brand: "Hommes Studio",
    name: "Ajui Sofa",
    description:
      "Ajui Sofa is inspired by the iconic Memphis style. The sofa combines an artsy interpretation of a cactus shape and is upholstered in velvet.",
    price: 5000,
    salePrice: 4500,
    discountPercentage: 10,
    images: [
      "../../Images/ajui.jpg",
      "../../Images/ajui2.png",
    //   "https://images.pexels.com/photos/6311395/pexels-photo-6311395.jpeg",
    //   "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg",
    //   "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg",
    //   "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg"
    ],
  },
  {
    id: 2,
    slug: "kara-sofa",
    brand: "Hommes Studio",
    name: "Kara Sofa",
    description:
      "Kara Sofa is an art deco-style sofa. Its art deco inspirations are reflected in its shapes, revealing an eclectic, luxurious style.",
    price: 1800,
    images: [
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
        "../../Images/kara1.jpg",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
      "https://images.pexels.com/photos/279747/pexels-photo-279747.jpeg",
      "https://images.pexels.com/photos/279748/pexels-photo-279748.jpeg",
      "https://images.pexels.com/photos/279749/pexels-photo-279749.jpeg",
      "https://images.pexels.com/photos/279750/pexels-photo-279750.jpeg"
    ],
  },
  {
    id: 3,
    slug: "lisola-sofa-white-khaki",
    brand: "Lisola",
    name: "Lisola Sofa White Khaki",
    description:
      "Lisola Sofa Khaki & White is a modern outdoor seating piece for a comfortable outdoor living area.",
    price: 2500,
    images: [
        "../../Images/lisola.jpg",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/6311398/pexels-photo-6311398.jpeg",
      "https://images.pexels.com/photos/6311399/pexels-photo-6311399.jpeg",
      "https://images.pexels.com/photos/6311400/pexels-photo-6311400.jpeg",
      "https://images.pexels.com/photos/6311401/pexels-photo-6311401.jpeg"
    ],
  },
  {
    id: 4,
    slug: "lisola-sofa-retro",
    brand: "Lisola",
    name: "Lisola Sofa Retro",
    description:
      "Lisola Sofa Retro is a modern seating piece. A modern outdoor sofa created by the most refined design with delicate materials.",
    price: 1800,
    rating: 4.7,
    images: [
        "../../Images/slisola.jpg",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
      "https://images.pexels.com/photos/2983470/pexels-photo-2983470.jpeg",
      "https://images.pexels.com/photos/6311402/pexels-photo-6311402.jpeg",
      "https://images.pexels.com/photos/6311403/pexels-photo-6311403.jpeg",
      "https://images.pexels.com/photos/6311404/pexels-photo-6311404.jpeg",
      "https://images.pexels.com/photos/6311405/pexels-photo-6311405.jpeg"
    ],
  },
  {
    id: 5,
    slug: "moa-sofa",
    brand: "Moa",
    name: "Moa Sofa",
    description:
      "Moa Sofa is a luxury sofa for modern living room design projects. This stunning modern sofa represents the latest designs of sofas.",
    price: 3000,
    salePrice: 2800,
    discountPercentage: 7,
    rating: 4.5,
    images: [
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
      "https://images.pexels.com/photos/2983471/pexels-photo-2983471.jpeg",
      "https://images.pexels.com/photos/6311406/pexels-photo-6311406.jpeg",
      "https://images.pexels.com/photos/6311407/pexels-photo-6311407.jpeg",
      "https://images.pexels.com/photos/6311408/pexels-photo-6311408.jpeg",
      "https://images.pexels.com/photos/6311409/pexels-photo-6311409.jpeg"
    ],
  },
  // continue adding slug for the rest of the products...
];
