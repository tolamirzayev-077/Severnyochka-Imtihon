import React, { useState } from 'react'
import Heart from '../../public/assets/heart.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { novinkidata } from '../store/data'

const Novinki = () => {
    const [like, setLike] = useState(false)
    const [cardLike, setCardLike] = useState([])

    const addLike = (i) => {
        const found = cardLike.find((e) => e.id === i)
    };

        const removeLike = (i) => {
            const updatedShop = cardLike.filter((e) => e.id !== i);
            setCardLike(updatedShop);

        }
    ;


    const qoshish = (e) => {
        setLike(!like)
        if (!like) {
            addLike(e)
        }
        else {
            removeLike(e)
        }
    }

            return (
                <section className='py-14'>
                    <div className="container">

                        {/* title */}
                        <div className='flex justify-between '>
                            <h2 className='text-4xl  font-bold text-qorag'>Новинки</h2>
                            <button className='p-2'>
                                Все новинки
                                <span className='ml-5'>≽</span>
                            </button>
                        </div>

                        {/* Card wrapper */}
                        <Swiper className='py-10 '
                            spaceBetween={40}
                            slidesPerView={4}
                            autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": false
                            }}
                            loop={true}

                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >

                            {novinkidata.map((novinkidata) => {
                                return (

                                    <SwiperSlide key={novinkidata.id} className='bg-white shadow-md rounded-nor '>
                                        <div className='relative'>
                                            <button onClick={() => qoshish(novinkidata.id)} className={`shadow absolute right-2 p-2 ${like ? 'bg-red-500' : 'bg-slate-200/50'}
                                 rounded-nor`}>
                                                <img width={22} className='shadow-white shadow-md rounded-lg p-0.5' height={22} src={Heart} alt="Heart icon" />
                                            </button>
                                            <img width={272} height={160} className='mx-auto' src={novinkidata.img} alt="Card img" />
                                        </div>
                                        <div className='p-2 space-y-2'>

                                            <div className='flex justify-between items-center mb-7'>
                                                <h3 className='font-bold text-lg text-qorag'>{novinkidata.price}</h3>
                                            </div>


                                            <p className='text-base  font-normal text-qorag'>

                                                {novinkidata.name}
                                            </p>

                                            {/* **************************** */}

                                            {/* ****************** */}

                                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                    </div>
                </section>
            )
        }
    
// }

export default Novinki