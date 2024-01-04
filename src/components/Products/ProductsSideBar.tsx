import Link from 'next/link';

type Props = {
  products: Product[];
};

type Product = {
  title: string;
};

export default function ProductsSideBar({ products }: Props) {
  return (
    <div className="basis-1/6 bg-gray-700 py-4 rounded-md">
      <ul className="text-xl text-gray-100 font-bold uppercase ">
        {products.map(({ title }) => {
          return (
            <li className="text-center" key={title}>
              <Link href={`/products/${title}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
