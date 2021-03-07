import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

const GridProduct = ({product, cart, setCart}) => {

    const {id, type, name, img1, img2, img3, img4, price, description} = product;

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
        <div className="grid-product">
            <p
                className="name"
            >{name}</p>
            <div className="product-img">
                {/* <img src={process.env.PUBLIC_URL + '/img/' + img1} alt="logo" /> */}
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + img1} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + img2} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + img3} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + '/img/' + img4} alt="logo" /></SwiperSlide>
                </Swiper>
            </div>
            <p>Tipo: {type}</p>
            <p>Precio: <strong>{price} €</strong></p>
            <p>{description}</p>
            <button
                onClick={() => addToCart()}
                className="cta-pp bluesky"
            >Añadir al carrito</button>
        </div>
    )
}

export default GridProduct;