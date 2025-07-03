

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; 

import NotificationCard from './NotificationCard';
import { notificationCards } from '../../data/notificationCards';

export default function NotificationCarousel() {
    return (
        <div className=' h-auto min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]'>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={4}
            slidesPerView={1.5}
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 1.75 }
            }}
        >
            {notificationCards.map((card) => (
            <SwiperSlide key={card.id}>
                <div className="p-2 ease-in-out">
                    <NotificationCard {...card} />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }
  
