import Link from 'next/link'

const Layout: React.FunctionComponent = (props) => {
  return (
    <>
      <ul>
        <Link href="/"><a>About</a></Link>
        <Link href="/covid-19"><a>COVID</a></Link>
        <Link href="/breakfast"><a>Breakfast</a></Link>
        <Link href="/prices"><a>Prices</a></Link>
        <Link href="/how-to-find-us"><a>Map</a></Link>
        <Link href="/contact-us"><a>Contact</a></Link>
      </ul>
      {props.children}
    </>
  )
}

export default Layout;
