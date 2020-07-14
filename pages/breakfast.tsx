import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Breakfast: Highfield House</title>
      </Head>

      <main>
        <h2>Breakfast</h2>
        <div className="md:flex">
          <div className="flex-1 md:mr-16">
            <p>Our mission is to bring you the very best breakfast you’ve ever eaten – with choice and quality second to none; it should see you through till tea time!</p>
            <h3>Breakfast table</h3>
            <ul className="list">
              <li>Fruit juice</li>
              <li>Fresh fruit</li>
              <li>Choice of cereals including porridge</li>
              <li>Yoghurt</li>
            </ul>
            <h3>Breakfast menu</h3>
            <ul className="list">
              <li>Full English breakfast, ingredients sourced locally.</li>
              <li>Vegetarian/Vegan options.</li>
              <li>Eggs Benedict, with bacon or salmon,  our rich Hollandaise sauce freshly made each morning.</li>
              <li>Scrambled or Poached Eggs on toast with some smoked salmon if you fancy.</li>
              <li>Toasted white or wholemeal bread.</li>
              <li>Selection of jams and marmalade.</li>
            </ul>
            <h3>Drinks</h3>
            <ul className="list">
              <li>Tea, Earl Grey, decaffeinated, fruit and herbal</li>
              <li>Cafetière of fresh coffee</li>
            </ul>
          </div>
          <div className="flex-1 max-w-xs">
            <p><img src="https://www.highfieldsheringham.com/wp-content/uploads/2017/03/English.jpg" /></p>
            <p><img src="https://www.highfieldsheringham.com/wp-content/uploads/2017/03/dining-room-624x466.jpg" /></p>
            <p><img src="https://www.highfieldsheringham.com/wp-content/uploads/2017/03/Benedict.jpg" /></p>
          </div>
        </div>
      </main>
    </>
  )
}
