import { useLoaderData } from "react-router-dom"

const Products = () => {
  const products= useLoaderData();
  console.log(products)
  return (
    <>
    <div className="pt-20">Products: {products.data.length}</div>
    </>
  )
}

export default Products