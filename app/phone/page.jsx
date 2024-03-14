'use client'
import Title from "../components/Title";
import Product from "../components/Product";
import { signOut } from "next-auth/react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const getData = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/phone");
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
  
    return res.json();
  };

  export default async function Home() {
    const products = await getData();

    
  
    return (
      <main>
        <Header/>
        <Title title="Get Fav Phone" />        
        <Product products={products} />
        <Footer/>
      </main>
    );
  }
  