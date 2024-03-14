"use client";
import Product from "../components/Product";
import Title from "../components/Title";
import { useRouter } from "next/navigation";
import Header from '../components/Header';
import Footer from '../components/Footer';

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};

const PhoneCase = async () => {
  const router = useRouter();

  const products = await getData();
  return (
    <main>
      <Header/>
      <Title title="Get Fav PhoneCase" />
      <Product products={products} />
      <Footer/>
    </main>
  );
};

export default PhoneCase;
