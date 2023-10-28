import Image from "next/image";

interface ProductProps {
  path: string;
  name: string;
  desc?: string;
  price?: string;
  lgheigth?: string;
}

export const Product: React.FC<ProductProps> = ({
  path,
  name,
  desc,
  price,
  lgheigth,
}) => {
  return (
    <div className="py-10 px-10">
      <div className=" max-w-sm rounded overflow-hidden shadow-lg text-center space-y-3 pb-6">
        <Image src={path} alt={name} width={1000} height={1000} />
        <div className={`px-3 lg:${lgheigth}`}>
          <div className="text-center font-bold text-2xl mb-2">{name}</div>
          <p className="text-gray-700 text-lg">{desc}</p>
        </div>
        <div>
          <span className="text-lg font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};
