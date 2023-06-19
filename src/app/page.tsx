import Image from "next/image";
import {
  Brands,
  Comments,
  FeaturedProducts,
  ShopByCategory,
  SocialMediaComponent,
  TrendingProducts,
} from "@/components";
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
      <TrendingProducts />
      <ShopByCategory products={data.products} />
      <FeaturedProducts />
      <Brands />
      <SocialMediaComponent />
      <Comments />
    </main>
  );
};

export default Home;
