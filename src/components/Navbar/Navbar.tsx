import Link from 'next/link';

const links = [{ title: 'contact' }, { title: 'about' }];

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl text-white font-bold ">Woong</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 text-white capitalize">
          {links.map(({ title }) => {
            return (
              <li key={title}>
                <Link href={`/${title}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
