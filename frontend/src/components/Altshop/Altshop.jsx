import React, { useState } from 'react'
import './Altshop.css'
import clouds from '../../assets/storm.png'
import { getItems } from '../../backend_calls/fetch_items'

// const data = [
//     {
//       id: 1,
//       image: 'https://imgs.search.brave.com/GKXVrFtsLg5L5vQ10f8zBhlMNhh9y2kcwUJ4UHSISU4/rs:fit:1024:683:1/g:ce/aHR0cHM6Ly93d3cu/ZHNjLm9yZy51ay93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9wdWJsaWMtc3Bl/YWtpbmctMTAyNHg2/ODMuanBn',
//       title: 'CALL OF DUTY',
//       description: 'adventure game',
//       price:'39.54$',
//     },
//     {
//       id: 2,
//       image: clouds,
//       title: 'GTA 5',
//       description: 'adventure game',
//       price:'39.5$',
//     },
//     {
//       id: 3,
//       image: clouds,
//       title: 'MULTIVERSUS',
//       description: 'adventure game',
//       price:'39.5$',
//     },
//     {
//       id: 4,
//       image: clouds,
//       title: 'THE LEGEND OF ZELDA',
//       description: 'adventure game',
//       price:'39.5$',
//     },
//     {
//       id: 5,
//       image: clouds,
//       title: 'SAMPLE GAME',
//       description: 'adventure game',
//       price:'39.5$',
//     },
//     {
//       id: 6,
//       image: clouds,
//       title: 'SAMPLE GAME',
//       description: 'adventure game',
//       price:'39.5$',
//     },
//   ]
// const data = await fetch('http://localhost:5000/api/items/').then(response => {
//   return response.json()});
// async function getItems(){
//   return (await fetch('http://localhost:5000/api/items/')).json()
// }
const item_data = await getItems();
const Altshop = () => {
  return (
    <>
    <div id="altshoponly">
      <header>
  <ul class="indicator">
    <li data-filter="all" class="active"><a href="#">All</a></li>
    <li data-filter="Blazer"><a href="#">Blazers</a></li>
    <li data-filter="Watch"><a href="#">Watches</a></li>
    <li data-filter="Shoes"><a href="#">Shoes</a></li>
    <li data-filter="Mobile"><a href="#">Mobiles</a></li>
    <li data-filter="Acessories"><a href="#">Acessories</a></li>
  </ul>
  <div class="filter-conditon">
    <span>Filter By</span>
    <select name="" id="select">
        <option value="Default">Most Popular</option>
        <option value="LowToHigh">Low to High</option>
        <option value="HighToLow">High to Low</option>
    </select>
  </div>
</header>
<br></br>
<br></br>
      <div className="container portfolio__container">
        {
          item_data.map(({id, image_url, name, category,price,}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image_url} alt={name} />
          </div>
          <h1>{name}</h1>
          <h3>{category}</h3>
          <div className="portfolio__item-cta">
          <button className='btn' target='_blank'>buy now</button>
          <button className='btn btn-primary' target='_blank'>add to cart</button>
          <h1>{'$'+price/100}</h1>
          </div>
        </article>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Altshop
