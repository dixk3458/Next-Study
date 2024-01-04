type Props = {
  params: { slug: string };
};

export default function ProductPage({ params }: Props) {
  return (
    <>
      <h1>{params.slug} page</h1>
    </>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product,
  }));
}
