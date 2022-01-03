import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id:'p1',price:6,title:"my first Book",description:"This is a first product - amazing"
},
{
  id:'p2',price:5,title:"my first Book 2",description:"This is a first product 2 - amazing"
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>{
        return <ProductItem key={product.id}
        title={product.title}
        price={product.price}
        description={product.description} id={product.id}
        />
        })}
       
      </ul>
    </section>
  );
};

export default Products;
