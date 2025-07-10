// app/product/page.tsx
import CardProduct from "../ui/card-product";

const products = [
  {
    id: 1,
    image: '/images/shoes.jpg',
    title: 'Sepatu Baru',
    description: 'Sepatu keren untuk segala aktivitas.',
    price: 'Rp 1.000.000',
  },
  {
    id: 2,
    image: '/images/shoes2.jpg',
    title: 'Sepatu Coklat',
    description: 'Nyaman dipakai dan stylish.',
    price: 'Rp 1.500.000',
  },
];

export default function ProductPage() {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}