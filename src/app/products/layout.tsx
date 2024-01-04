import ProductsSideBar from '@/components/Products/ProductsSideBar';

type Props = {
  children: React.ReactNode;
};

const products = [{ title: 'pants' }, { title: 'skirt' }];

export default function ProductsLayout({ children }: Props) {
  return (
    <>
      <ProductsSideBar products={products} />
      {children}
    </>
  );
}
