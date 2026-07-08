"use client"

import { useEffect, useState } from "react";
import ProductDetails from "../../../components/ecommerce/ProductDetails";
import Layout from '../../../components/layout/Layout';
import { findProductIndex } from "../../../util/util";

export default function ProductId({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetch("/static/product.json");
      const data = await response.json();
      const index = findProductIndex(data, params.slug);
      setProduct(data[index]);
    };
    loadProduct();
  }, [params.slug]);

  if (!product) {
    return null;
  }

  return (
    <>
      <Layout parent="Home" sub="Shop" subChild={product.title}>
        <div className="container">
          <ProductDetails product={product} />
        </div>
      </Layout>
    </>
  );
}
