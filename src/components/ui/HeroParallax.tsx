import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  imageUrls,
  title,
  subtitle,
  cta,
}: {
  imageUrls: string[];
  title: string;
  subtitle: string;
  cta: React.ReactNode;
}) => {
  const extendedImageUrls = imageUrls.length < 15 
    ? Array.from({ length: 15 }, (_, i) => imageUrls[i % imageUrls.length]) 
    : imageUrls;

  const firstRow = extendedImageUrls.slice(0, 5);
  const secondRow = extendedImageUrls.slice(5, 10);
  const thirdRow = extendedImageUrls.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-1100, 1000]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-5 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-10 md:py-10 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-7xl max-w-4xl font-bold">
          {title}
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8">
          {subtitle}
        </p>
        <div className="mt-8">
          {cta}
        </div>
      </div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((imageUrl, index) => (
            <ProductCard
              imageUrl={imageUrl}
              translate={translateX}
              key={`first-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((imageUrl, index) => (
            <ProductCard
              imageUrl={imageUrl}
              translate={translateXReverse}
              key={`second-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((imageUrl, index) => (
            <ProductCard
              imageUrl={imageUrl}
              translate={translateX}
              key={`third-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  imageUrl,
  translate,
}: {
  imageUrl: string;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={imageUrl}
      className="h-96 w-[30rem] relative shrink-0 group/product"
    >
      <img
        src={imageUrl}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt="Parallax product image"
      />
    </motion.div>
  );
};
