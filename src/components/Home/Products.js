import React from "react";
import Product from "./Product";
import Title from "../Globals/Title.js";
import {StaticQuery, graphql } from "gatsby";

// const getProducts= graphql`{
//   products: allContentfulCoffeeProduct {
//     edges {
//       node {
//         id
//         title
//         price
//         image {
//           fluid(maxHeight: 100, maxWidth: 100 , quality: 100, cropFocus: CENTER, resizingBehavior: FILL) {
//                src
            
            
//           }
//         }
//       }
//     }
 
//   }
  
// }`

export default function products() {
    return (
      <StaticQuery query={graphql`{
  products: allContentfulCoffeeProduct {
    edges {
      node {
        id
        title
        price
        image {
          fluid(maxHeight: 100, maxWidth: 100 , quality: 100, cropFocus: CENTER, resizingBehavior: FILL) {
               src
            ...GatsbyContentfulFluid_withWebp
            
          }
        }
      }
    }
 
  }
  
}`} render={data=>{return (
        <section className="py-5">
         <div className="container">
             <Title title="our products" />
             <div className="row">
                {data.products.edges.map(({node:product})=>{return<Product key={product.id} product={product}/>;})}
             </div>

            </div>
        </section>);
        }} />
    )


}
