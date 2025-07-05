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
      "../../Images/ajui.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Medium", "Large"], // no Large
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
      "../../Images/ajui2.png",
        "../../Images/kara1.jpg",
    ],
    availableColors: ["beige", "black", "white"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
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
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Large"], // no Large
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
      "../../Images/ajui2.png",
    ],
    availableColors: ["beige", "white"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
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
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["white", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },


  {
    id: 101,
    name: "Nora Chair",
    description:
      "The Nora Chair will transform your dining room decor into a memorable space. A dining chair perfect for residential projects.",
    price: 1200,
    brand: "Hommes Studio",
    slug: "nora-chair",
    images: [
        "../../Images/nora.jpg",
      "../../Images/ajui2.png",
        "../../Images/nora.jpg",
      "../../Images/ajui2.png",

    ],
    availableColors: ["beige", "white"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 102,
    name: "Karmen Dining Chair",
    description:
      "Karmen Chair adds instant class into your modern dining room. A luxury dining chair is a must-have in any high-end interior design project.",
    price: 1500,
    brand: "Hommes Studio",
    slug: "karmen-dining-chair",
    images: [
        "../../Images/karmen.jpg",
      "../../Images/ajui2.png",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",

    ],
    availableColors: ["white", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 103,
    name: "Davis Chair",
    description:
      "Davis Dining Chair exudes a quiet elegance and undeniably luxury energy. This modern dining chair is perfect for a luxury dining room project",
    price: 1500,
    brand: "Hommes Studio",
    slug: "davis-chair",
    images: 
    [
        "../../Images/davis.jpg",
      "../../Images/ajui2.png",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
    ],
    availableColors: ["beige", "black", "white"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 104,
    name: "Joanne Dining Chair",
    description:
      "Joanne Chair is a mid-century style dining chair. A modern dining chair made to improve the home experience of its owner.",
    price: 700,
    brand: "Lisola",
    slug: "joanne-dining-chair",
    images: [
        "../../Images/ajui.jpg",
        "../../Images/ajui2.png",
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["beige", "black", "white"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 105,
    name: "Cinco Chair",
    description:
      "The Cinco chair is a bold design with beauty and subtleness in all details and the perfect balance between comfort and quality.",
    price: 800,
    brand: "Moa",
    slug: "cinco-chair",
    images: [
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 106,
    name: "Prymo Dining Table Natural",
    description:
      "Prymo Dining Table Natural is the ideal design for an effortless elegant indoor or outdoor dining room.",
    price: 1400,
    brand: "Moa",
    slug: "prymo-dining-table-natural",
    images: [
      "../../Images/ajui2.png",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 107,
    name: "Fifih Side Tables Set",
    description:
      "Fifih Side Table Set is a set of three wooden side tables allowing multiple variations and combinations.",
    price: 2600,
    brand: "Lisola",
    slug: "fifih-side-tables-set",
    images: [
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 108,
    name: "Lunarys Center Table Natural",
    description:
      "Lunarys Center Table Natural is an outstanding modern design piece perfect for indoor or outdoor projects.",
    price: 1800,
    brand: "Hommes Studio",
    slug: "lunarys-center-table-natural",
    images: [
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 109,
    name: "Prymo Rectangular Dining Table Natural",
    description:
      "Prymo Rectangular Dining Table Natural is the ideal design for an effortless elegant indoor or outdoor dining room.",
    price: 3600,
    brand: "Hommes Studio",
    slug: "prymo-rectangular-dining-table-natural",
    images: [
        "../../Images/kara.jpg",
        "../../Images/ajui2.png",
        "../../Images/kara.jpg",
        "../../Images/ajui2.png",
        
    ],
    availableColors: ["beige", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large

  },
  {
    id: 110,
    name: "Lunarys Large Side Table Natural",
    description:
      "Lunarys Large Side Table Natural is a modern outdoor piece, the stone side table’s body and legs are crafted in natural sandblaster beige limestone, delivering a raw yet luxurious style to any contemporary outdoor project.",
    price: 3000,
    brand: "Hommes Studio",
    slug: "lunarys-Large-side-table-natural",
    images: [
        "../../Images/kara.jpg",
        "../../Images/kara.jpg",
        
      "../../Images/ajui2.png",
        "../../Images/kara.jpg",
    ],
    availableColors: ["white", "black"], // only beige and black
    availableSizes: ["Small", "Medium"], // no Large
  },
  {
    id: 111,
    name: "Fuchsia I Side Table",
    description:
      "Fuschia I side table is the ideal cocktail table for modern living rooms. A Memphis design with layers of brave shapes and bold textures.",
    price: 1500,
    brand: "Hommes Studio",
    slug: "fuchsia-i-side-table",
    images: [
        "../../Images/kara.jpg",
      "../../Images/ajui2.png",
      "../../Images/kara.jpg",
      "../../Images/ajui2.png",
    ],
    availableColors: ["white", "black"], // only beige and black
    availableSizes: ["Large", "Medium"], // no Large
  },
  // continue adding slug for the rest of the products...
];
