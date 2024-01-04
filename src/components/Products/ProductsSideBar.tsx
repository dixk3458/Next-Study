import Link from 'next/link';

type Props = {
  products: Product[];
};

type Product = {
  title: string;
};

export default function ProductsSideBar({ products }: Props) {
  return (
    <div>
      <ul>
        {products.map(({ title }) => {
          return (
            <li key={title}>
              <Link href={`/products/${title}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
