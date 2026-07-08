import Link from "next/link";
import React from "react";

const BestSellerSlider = ({ products = [] }) => {
    return (
        <>
            {products.slice(0, 3).map((product, i) => (
                <article className="row align-items-center hover-up" key={i}>
                    <figure className="col-md-4 mb-0">
                        <Link href={`/products/${product.slug}`}>
                            <img src={product.images[0].img} alt="nest" />
                        </Link>
                    </figure>
                    <div className="col-md-8 mb-0">
                        <h6>
                            <Link href={`/products/${product.slug}`}>
                                {product.title}
                            </Link>
                        </h6>
                        <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: "90%" }}></div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                        <div className="product-price">
                            <span>${product.price} </span>
                            <span className="old-price">{product.oldPrice && `$ ${product.oldPrice}`}</span>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
};

export default BestSellerSlider;
