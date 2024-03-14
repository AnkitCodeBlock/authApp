import Product from "../components/Product";
import Title from "../components/Title";
import Header from '../components/Header';
import Footer from '../components/Footer';
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/watch");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};

const Watches = async () => {
  const products = await getData();
  return (
    <main>
      <Header/>
      <Title title="Get Fav Watches" />
      <Product products={products} />
      <Footer/>
    </main>
  );
};

export default Watches;
