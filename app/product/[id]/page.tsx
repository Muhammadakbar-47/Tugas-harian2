// app/product/[id]/page.tsx
import Image from 'next/image';

interface ProductDetailPageProps {
  params: { id: string };
}

const products = [
  {
    id: '1',
    image: '/images/shoes.jpg',
    title: 'Sepatu Baru',
    description: 'Sepatu keren untuk segala aktivitas.',
    price: 'Rp 1.000.000',
  },
  {
    id: '2',
    image: '/images/shoes2.jpg',
    title: 'Sepatu Coklat',
    description: 'Nyaman dipakai dan stylish.',
    price: 'Rp 1.500.000',
  },
];

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    // Jika produk tidak ditemukan, tampilkan halaman 404
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-3 rounded-lg shadow-lg bg-cyan-500 p-6">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="font-bold text-lg mb-2 text-white">{product.title}</h1>
      <p className="text-white text-sm mb-4">{product.description}</p>
      <div className="font-semibold text-3xl text-white mb-4">{product.price}</div>
    </div>
  );
}