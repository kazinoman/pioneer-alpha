import Image from "next/image";
import { TrendingProducts } from "@/components";

export default function Home() {
  return (
    <main className="">
      <h1>Home page</h1>
      <TrendingProducts />
    </main>
  );
}
