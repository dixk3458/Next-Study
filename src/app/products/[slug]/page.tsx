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
    <>
      <h1>{params.slug} page</h1>
    </>
  );
}

export function generateStaticParams() {
  return products.map(product => ({
    slug: product,
  }));
}
