import { Card, Image } from '@nextui-org/react';
import React from 'react';

const ProductImages = ({ product, currentImg, setCurrentImg, lang }: any) => {
  // const dispatch = useDispatch();
  // const [currentImg, setCurrentImg] = useState<any>(0);

  const renderImageCards = () => {
    if (!product?.images || !Array.isArray(product.images)) {
      return null;
    }

    return product.images.slice(0, 3).map((imageSrc: string) => {
      if (!imageSrc) {
        return null;
      }

      const handleClick = () =>
        setCurrentImg(Number(product.images.indexOf(imageSrc)));

      return (
        <Card
          key={imageSrc}
          isHoverable
          isPressable
          radius="lg"
          fullWidth
          onClick={handleClick}
          className="h-32 w-32 border-none"
        >
          <Image
            className="h-32 w-full object-cover object-center"
            src={`https://simrckw.s3.eu-north-1.amazonaws.com/${imageSrc}`}
            alt={product?.name.en}
            width="100%"
            height="100%"
          />
        </Card>
      );
    });
  };
  return (
    <div className=" lg:flex lg:items-start lg:gap-12">
      <div className=" lg:order-2 lg:ml-5">
        <div className=" h-[460px] min-h-[460px] w-full  overflow-hidden rounded-lg lg:w-[580px]  ">
          <Image
            className=" h-[460px] min-w-full  object-contain  object-center"
            src={`https://simrckw.s3.eu-north-1.amazonaws.com/${product?.images[currentImg]}`}
            width="100%"
            height="100%"
            removeWrapper
            alt={product?.name[lang]}
          />
        </div>
      </div>

      <div className=" mt-4 w-full  lg:order-1 lg:w-32  lg:shrink-0 ">
        <div className="flex  w-full items-start justify-center gap-4 lg:flex-col">
          {renderImageCards()}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
