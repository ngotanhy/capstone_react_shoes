import React from 'react'
import Product from '../Product/Product'
import Carousel from './carousel/Carousel'

export default function Home() {
  return (
    <main>
      <section className="carousel">
        <Carousel />
      </section>
      <section className="mt-12">
        <h2 className="font-normal text-4xl w-full md:w-698 backGroundGradient p-3 ">Product Feature</h2>
        <div className="container">
          <Product />
        </div>
      </section>
    </main>
  )
}
