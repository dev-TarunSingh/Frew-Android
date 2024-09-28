import icons from "../constonants/icons";

const sampleProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    accountName: "TechStore",
    price: "$199.99",
    image: "../assets/headphonesF.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Feature-packed smart watch with fitness tracking.",
    accountName: "GadgetWorld",
    price: "$149.99",
    image: { uri: icons.watch },
  },
  {
    id: 3,
    title: "4K TV",
    description: "Ultra HD 4K TV with stunning picture quality.",
    accountName: "HomeElectronics",
    price: "$799.99",
    image: { uri: icons.tv },
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful sound.",
    accountName: "SoundHub",
    price: "$49.99",
    image: { uri: icons.speaker },
  },
  {
    id: 5,
    title: "Laptop",
    description: "High-performance laptop for work and play.",
    accountName: "CompuTech",
    price: "$999.99",
    image: { uri: icons.laptop },
  },
];

export default sampleProducts;