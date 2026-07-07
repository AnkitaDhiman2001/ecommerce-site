import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { findProductIndex } from "../../util/util";

const ProductId = ({ product }) => {
    return (
        <>
        <Layout parent="Home" sub="Shop" subChild={product.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};



ProductId.getInitialProps = async (params) => {
    // Read file directly from filesystem on server-side to avoid CORS issues
    let data;
    if (typeof window === 'undefined') {
        // Server-side: read from filesystem using require (only available server-side)
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.cwd(), 'public', 'static', 'product.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(fileContents);
    } else {
        // Client-side: fetch from relative URL
        const request = await fetch("/static/product.json");
        data = await request.json();
    }

    const index = findProductIndex(data, params.query.slug);
    // console.log(params);

    return { product: data[index] };
};

export default ProductId;
