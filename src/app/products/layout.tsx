import ProductsSideBar from '@/components/Products/ProductsSideBar';

type Props = {
  children: React.ReactNode;
};

const products = [{ title: 'pants' }, { title: 'skirt' }];

export default function ProductsLayout({ children }: Props) {
  return (
    <section className="w-full max-w-screen-xl flex gap-4">
      <ProductsSideBar products={products} />
      <div className="w-full basis-5/6">{children}</div>
    </section>
  );
}
