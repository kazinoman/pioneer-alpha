import Image from "next/image";
import { ShopByCategory, TrendingProducts } from "@/components";
import { getProducts } from "@/services/products.service";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <main className="">
      <h1>Home page</h1>
      <TrendingProducts />
      <ShopByCategory products={data.products} />
    </main>
  );
};

export default Home;
