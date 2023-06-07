import React from 'react';
import { Images } from '../../../assets/images';

const Candies = [
    {
        id: 1,
        name: "Orange Flavour",
        image: Images.Orange,
        category: "Lovely Bite",
    },
    {
        id: 2,
        name: "Kaccha Aam",
        image: Images.Aam,
        category: "Lovely Bite",
    },
    {
        id: 3,
        name: "Mango",
        image: Images.Mango,
        category: "Lovely Bite",
    },
    {
        id: 4,
        name: "Mint",
        image: Images.Candy,
        category: "Lovely Bite",
    },
]

const Gallery = () => {
    return (
        <section className="ls section-portfolio s-pt-50 s-pb-60 text-center text-sm-left">
            <div className="container px-xl-50" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="row isotope-wrapper portfolio masonry-layout c-gutter-10 c-mb-10">
                    {Candies.map(item =>
                        <div className="col-md-3 corporate">
                            <div className="vertical-item item-gallery content-absolute text-center" >
                                <div className="item-media">
                                    <img src={item.image} alt="img" className='rounded img-thumbnail' />
                                </div>
                                <div className="item-content">
                                    <div className="icons-link">
                                        <a className="link-zoom photoswipe-link" title="" href={item.image}><i className="fa fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Gallery