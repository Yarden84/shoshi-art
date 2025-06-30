'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Header() {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: image1Ref, inView: image1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: image2Ref, inView: image2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: image3Ref, inView: image3InView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#f8f7f4]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 gap-8 mb-auto mt-16">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -60 }}
          animate={textInView ? { opacity: 1, x: 0 } : {opacity: 0, x: -60}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex-1 flex flex-col justify-center items-start space-y-4"
        >
          <h1 className="md:text-8xl font-semibold text-gray-800 mb-12">Welcome to my Gallery</h1>
          <h3 className="text-gray-600 text-lg md:text-2xl mb-1">My name is Shoshi Haizler</h3>
          <h3 className="text-gray-600 text-lg md:text-2xl mb-8">I love painting, drawing and sculpting.</h3>
          <h5 className="text-gray-600 text-base md:text-lg">Enjoy your visit!</h5>
        </motion.div>
        <div className="flex-1 flex items-center justify-center relative min-h-[82vh]">
          <motion.div 
            ref={image1Ref}
            initial={{ opacity: 0, y: -80 }}
            animate={image1InView ? { opacity: 1, y: 0 } : {opacity: 0, y: -80}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="w-[350px] h-[350px] rounded-lg shadow-lg absolute left-8 top-0 z-10 border-4 border-white flex items-center justify-center overflow-hidden"
            style={{ zIndex: 10 }}
          >
            <div className="w-[500px] h-[500px] bg-[url('/images/gallery/painting-6.jpg')] bg-cover bg-center shrink-0 animate-spin-slower"></div>
          </motion.div>
          
          <motion.div 
            ref={image2Ref}
            initial={{ opacity: 0, x: 40 }}
            animate={image2InView ? { opacity: 1, x: 0 } : {opacity: 0, x: 80}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }} 
            className="w-[250px] rounded-lg shadow-md object-cover absolute right-0 top-[30%] z-20 border-4 border-white shine">
            <img
              src="/images/gallery/children-4.jpg"
              alt="Shoshi Haizler"
              className="w-[100%] rounded-lg"
              style={{ zIndex: 20 }}
            />
          </motion.div>
          <motion.div 
            ref={image3Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={image3InView ? { opacity: 1, y: 0 } : {opacity: 0, y: 40}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}  className="w-[270px] rounded-lg shadow object-cover absolute left-0 bottom-0 z-0 border-4 border-white shine">
              <img
                src="/images/gallery/sculpture-2.jpg"
                alt="Shoshi Haizler"
                className="w-[100%] rounded-lg"
                style={{ zIndex: 0 }}
              />
          </motion.div>
          </div>
      </div>
    </section>
  );
} 