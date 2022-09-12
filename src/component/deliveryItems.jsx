import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
const deliveryItems = [
  {
    id: 1,
    image: <ShoppingBagIcon fontSize="large" />,
    title: "Order online",
    descriptions: [
      {
        number: "1",
        text: "Buying an urn online lets you choose whatever you want easily and conveniently",
      },
    ],
  },
  {
    id: 2,
    image: <ModeEditIcon fontSize="large" />,
    title: "Engraving",
    descriptions: [
      {
        number: "2",
        text: "Personalisation services will be available soon.",
      },
    ],
  },
  {
    id: 3,
    image: <LocalShippingIcon fontSize="large" />,
    title: "Shipping",
    descriptions: [
      {
        number: "3",
        text: "All of our orders are shipped via DPD international services.",
      },
    ],
  },
  {
    id: 4,
    image: <HomeIcon fontSize="large" />,
    title: "Delivery at your door",
    descriptions: [
      {
        number: "4",
        text: "We provide both express and standard shipping. You can track your parcel via DPD tracking system.",
      },
    ],
  },
];

export default deliveryItems;
