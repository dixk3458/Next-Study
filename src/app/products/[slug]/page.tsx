import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

const products = ['pants', 'skirt'];

export default function ProductPage({ params }: Props) {
  // if (!products.includes(params.slug)) {
  //   notFound();
  // }

  return (
    <div className="flex flex-col items-center bg-blue-50 rounded-md ">
      <h1 className="text-2xl font-bold">{params.slug} page</h1>
    </div>
  );
}

export function generateStaticParams() {
  return products.map(product => ({
    slug: product,
  }));
}
