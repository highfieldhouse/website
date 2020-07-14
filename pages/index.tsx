import Head from 'next/head'
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Head>
        <title>Highfield House</title>
      </Head>

      <main>
        <Link href="/covid-19">
          <a className="block mb-6">
            <div className="rounded-lg p-2 bg-green-800 items-center text-gray-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-gray-900 text-center">COVID<br />19</span>
              <span className="mr-2 text-left flex-auto">Click here to see how we're keeping everyone safe</span>
              <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </div>
          </a>
        </Link>

        <h2>Welcome to Highfield House!</h2>
        <p>A lovely spacious Edwardian Bed &amp; Breakfast in the heart of Sheringham, <em>quietly</em> tucked away, yet just a stones throw to the <strong>town centre</strong>, <strong>beach</strong>, <strong>coastal path</strong>, <strong>rail station</strong> and <strong>golf course</strong>.</p>
        <p>We’d love for you to come and stay with us - you’ll get the very best of good ole Norfolk hospitality, with a great nights sleep in one of our quiet en-suite bedrooms and a breakfast to write home about.</p>
        <p><img src="https://www.highfieldsheringham.com/wp-content/uploads/2017/03/190123-5Mont-011-768x512.jpg" /></p>
        <p><img src="https://www.highfieldsheringham.com/wp-content/uploads/2017/03/190123-5Mont-002-768x512.jpg" /></p>
        <p><strong>Sheringham town</strong> is an absolute must see, there really is something for everyone, from our blue flag beach with lovely promenade to our steam railway, which never fails to enthral, whatever your age.</p>
        <p>There is a links golf course situated on the cliff tops with views to put you right off your game. We have some beautiful coastal and inland walks, with many renowned beauty spots and wildlife, with a coastal bus service to hail if you don’t fancy the walking back. The surrounding area is awash with National Trust places of interest and you will never struggle for some truly great food and a refreshing pint.</p>
        <p>We hope that you will visit us soon, and return often.</p>
        <p><em>&mdash; Sammy &amp; John</em></p>
      </main>
    </>
  )
}
