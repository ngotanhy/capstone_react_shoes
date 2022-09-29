import React from 'react'
import '../../../assets/scss/pages/_carousel.scss';
import 'tw-elements';
import ItemCarousel from './ItemCarousel';
import { useSelector } from 'react-redux';

export default function Carousel() {
    const { arrProducts } = useSelector(state => state.productReducer);

    const randomAndRenderProduct = () => {
        let arrProductNew = [];
        for (let i = 0; i < 3; i++) {
            let i = Math.floor(Math.random() * arrProducts?.length);
            arrProductNew.push(arrProducts[i]);
        }
        return arrProductNew?.map((item, index) => {
            return index === 0 ? <div className="carousel-item active relative float-left w-full " key={index}>
                <ItemCarousel product={item} />
            </div> : <div className="carousel-item relative float-left w-full" key={index}>
                <ItemCarousel product={item} />
            </div>
        })

    }
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative " data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 ">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active text-black" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                {randomAndRenderProduct()}
            </div>
            <button className="carousel-control-prev absolute  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon inline-block bg-no-repeat " aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next absolute  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};


