import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

const GridProduct = ({product, cart, setCart}) => {

    const {id, type, name, images, price, description} = product;

    const addToCart = () => {
        let productIsAlready = false;
        cart.forEach(cartProduct => {
            if (cartProduct.id === id) {
                productIsAlready = true;
            }
        });

        if (!productIsAlready) {
            product.quantity = 1;
            setCart([
                ...cart,
                product
            ]);
        } else {
            const newCart = cart.map(cartProduct => {
                if (cartProduct.id === id) {
                    cartProduct.quantity++;
                }

                return cartProduct;
            });

            setCart(newCart);
        }
    }

    SwiperCore.use([Navigation, Pagination]);

    return (
        <div className="grid--product">
            <p
                className="name"
            >{name}</p>
            <div className="product-img">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + images.img1} alt="image1" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + images.img2} alt="image2" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + images.img3} alt="image3" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + images.img4} alt="image4" /></SwiperSlide>
                </Swiper>
            </div>
            <p>Tipo: {type}</p>
            <p>Precio: <strong>{price} €</strong></p>
            <p>{description}</p>
            <button
                onClick={() => addToCart()}
                className="cta-pp bluesky"
            >Añadir al pedido</button>
        </div>
    )
}

export default GridProduct;