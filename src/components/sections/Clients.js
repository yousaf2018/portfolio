// import { salimovSlider } from '@/src/sliderProps';
// import { Swiper, SwiperSlide } from 'swiper/react';

// const Clients = () => {
//   return (
//     <section className="clients">
//       <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
//         <h3>Certifications</h3>
//         <Swiper
//           {...salimovSlider.clients}
//           className="swiper swiper-clients fadeInUp wow"
//         >
//           {/* SWIPER ITEM STARTS */}
//           <SwiperSlide className="swiper-slide">
//             <div>
//               <img src="assets/logos/AIESC.png" alt="client" />
//             </div>
//             <div>
//               <img src="assets/logos/goldenrod.png" alt="client" />
//             </div>
//           </SwiperSlide>
//           {/* SWIPER ITEM ENDS */}
//           {/* SWIPER ITEM STARTS */}
//           <SwiperSlide className="swiper-slide">
//             <div>
//               <img src="assets/logos/green.png" alt="client" />
//             </div>
//             <div>
//               <img src="assets/logos/orange.png" alt="client" />
//             </div>
//           </SwiperSlide>
//           {/* SWIPER ITEM ENDS */}
//           {/* SWIPER ITEM STARTS */}
//           <SwiperSlide className="swiper-slide">
//             <div>
//               <img src="assets/logos/pink.png" alt="client" />
//             </div>
//             <div>
//               <img src="assets/logos/red.png" alt="client" />
//             </div>
//           </SwiperSlide>
//           {/* SWIPER ITEM ENDS */}
//           {/* SWIPER ITEM STARTS */}
//           <SwiperSlide className="swiper-slide">
//             <div>
//               <img src="assets/logos/yellow.png" alt="client" />
//             </div>
//             <div>
//               <img src="assets/logos/yellowgreen.png" alt="client" />
//             </div>
//           </SwiperSlide>
//           {/* SWIPER ITEM ENDS */}
//           {/* SWIPER ITEM STARTS */}
//           <SwiperSlide className="swiper-slide">
//             <div>
//               <img src="assets/logos/blue.png" alt="client" />
//             </div>
//             <div>
//               <img src="assets/logos/goldenrod.png" alt="client" />
//             </div>
//           </SwiperSlide>
//           {/* SWIPER ITEM ENDS */}
//           {/* SWIPER ITEM STARTS */}
//           <SwiperSlide className="swiper-slide">
//             <div>
//               <img src="assets/logos/blue.png" alt="client" />
//             </div>
//             <div>
//               <img src="assets/logos/goldenrod.png" alt="client" />
//             </div>
//           </SwiperSlide>
//           {/* SWIPER ITEM ENDS */}
//           <div className="swiper-pagination" />
//         </Swiper>
//       </div>
//       <img
//         alt=""
//         className="z-1 hide-mobile opposite-separator"
//         src="assets/separator-opposite.png"
//       />
//     </section>
//   );
// };
// export default Clients;

// NEW COMP
import { salimovSlider } from '@/src/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>Certifications</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/AIESEC.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/ReactJsComponents.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/ReactJSBeginners.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/HTML.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/Ethical Hacking.jpg" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/Animation.jpg" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/TedX.jpg" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/Writing.jpg" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/wsa.jpg" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/Innovation.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}

          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
