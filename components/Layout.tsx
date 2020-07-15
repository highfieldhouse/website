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
          <span>Bed &amp; Breakfast, in the heart of Sheringham</span>
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
      <script dangerouslySetInnerHTML={{
        __html: `
        var _paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function () {
          var u = "//matomo.rnlds.com/";
          _paq.push(['setTrackerUrl', u + 'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
          g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
        })();
      ` }} />
    </div>
  )
}

export default Layout;
