import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

const Layout: React.FunctionComponent = (props) => {
  return (
    <div className="max-w-screen-md m-auto">
      <header>
        <h1>
          <strong>Highfield House</strong>
          <span>Bed &amp; Breakfast, Sheringham</span>
        </h1>
      </header>
      <nav>
        <ul className="list">
          <NavLink href="/"><a>About</a></NavLink>
          <NavLink href="/covid-19"><a>COVID</a></NavLink>
          <NavLink href="/breakfast"><a>Breakfast</a></NavLink>
          <NavLink href="/prices"><a>Prices</a></NavLink>
          <NavLink href="/how-to-find-us"><a>Map</a></NavLink>
          <NavLink href="/contact-us"><a>Contact</a></NavLink>
        </ul>
      </nav>
      {props.children}
    </div>
  )
}

export default Layout;
