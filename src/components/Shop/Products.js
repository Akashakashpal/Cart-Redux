import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The First Book I ever Wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "My second Book",
    description: "The Second Book I ever Wrote",
  },
  {
    id: "p3",
    price: 10,
    title: "My Third Book",
    description: "The Second Book I ever Wrote",
  },
  {
    id: "p4",
    price: 10,
    title: "My fourth Book",
    description: "The Second Book I ever Wrote",
  },
  {
    id: "p5",
    price: 10,
    title: "My fifth Book",
    description: "The Second Book I ever Wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem item={item} id={item.id} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
