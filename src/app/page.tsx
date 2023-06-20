import {
  Brands,
  Comments,
  FeaturedProducts,
  HeroSection,
  ShopByCategory,
  SocialMediaComponent,
  TrendingProducts,
} from "@/components";

export const metadata = {
  title: "Home page",
  description: "This is home page.",
};

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
    <div>
      <main className="">
        <HeroSection />
        <TrendingProducts />
        <ShopByCategory products={data.products} />
        <FeaturedProducts />
        <Brands />
        <SocialMediaComponent />
        <Comments />
      </main>
    </div>
  );
};

export default Home;
