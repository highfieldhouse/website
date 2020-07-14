import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Prices: Highfield House</title>
      </Head>

      <main>
        <h2>Room rates 2020: bed &amp; breakfast</h2>
        <div className="md:flex">
          <div className="flex-1 mr-16">
            <ul className="prices">
              <li><span>£70</span> <span>Single Room per night</span></li>
              <li><span>£85/90</span> <span>Double room per night</span></li>
              <li><span>£100</span> <span>King/Twin room per night</span></li>
              <li><span>£110</span> <span>Family Room, 2 adults, 1 child (5 years and over)</span></li>
            </ul>
          </div>
          <div className="flex-1 max-w-xs">
            <p>To make a booking or enquiry, please phone us on <a href="tel:+447391009470">07391 009470</a>, <a href="tel:+441263825233">01263 825233</a> or email <a href="mailto:email@highfieldsheringham.com">email@highfieldsheringham.com</a></p>
            <p>Please note we may require a minimum stay of 2 nights during our busy periods (or 3 nights at bank holiday weekends).</p>
            <p>We are flexible regarding arrival time, to fit in with your plans. We ask that rooms are vacated by 10:30 am on day of departure.</p>
            <p>We’ll require a deposit equal to the cost of the first night, paid by cheque or bank transfer within 5 days of booking. If you have to cancel, we’ll return your deposit, less 5% handling charge, as long as you give us 14 days notice prior to your booked stay, else your deposit will become non-refundable. You may want to consider travel insurance to cover this eventuality.</p>
          </div>
        </div>
      </main>
    </>
  )
}
