import http from "@/config/axios.config";

export const getProducts = async () => {
  try {
    const { data } = await http.get("/products");
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export async function getPr() {
  const res = await fetch(`https://dummyjson.com/products`);
  return res.json();
}
