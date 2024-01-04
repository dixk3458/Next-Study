import Link from 'next/link';

const links = [{ title: 'contact' }, { title: 'about' }];

export default function Navbar() {
  return (
    <>
      <Link href="/">
        <h1>Woong</h1>
      </Link>
      <nav>
        <ul>
          {links.map(({ title }) => {
            return (
              <li key={title}>
                <Link href={`/${title}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
