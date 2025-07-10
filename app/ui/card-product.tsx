// app/components/CardProduct.tsx
import Link from 'next/link';

interface CardProductProps {
  id: number | string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function CardProduct({
  id,
  image,
  title,
  description,
  price,
}: CardProductProps) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-cyan-500">
      <div className="p-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
        <h2 className="font-bold text-lg mb-2 text-white">{title}</h2>
        <p className="text-white text-sm mb-4">{description}</p>
        <div className="font-semibold text-3xl text-white mb-4">{price}</div>
        <Link
          href={`/product/${id}`}
          className="inline-block h-10 px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}