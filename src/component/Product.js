import { nanoid } from "nanoid";

const Product = [
  {
    id: nanoid(),
    amount: 1,
    price: 899.99,
    image1:
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: "Canon",
    description: "Canon EOS Rebel T3i DSLR Camera with 18-55mm Lens",
    button: "Learn more about Canon",
  },
  {
    id: nanoid(),
    amount: 1,
    price: 2796.99,
    image1:
      "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    image2:
      "https://m.media-amazon.com/images/I/81FFsc4Ev3L._AC_UL480_FMwebp_QL65_.jpg",

    name: "Nikon",
    description: "Nikon D3100 DSLR Camera with 18-55mm Lens",
    button: "Learn more about Nikon",
  },
  {
    id: nanoid(),
    amount: 1,
    price: 2269.95,
    image1:
      "https://images.unsplash.com/photo-1617468264204-92588bd6485a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29ueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

    name: "Sony",
    description: "Sony D3100 DSLR Camera with 18-55mm Lens",
    button: "Learn more about Sony",
  },
];

export default Product;
