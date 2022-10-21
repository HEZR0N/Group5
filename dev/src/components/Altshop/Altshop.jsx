import React, { useState } from 'react'
import './Altshop.css'
import clouds from '../../assets/storm.png'

const data = [
    {
      id: 1,
      image: clouds,
      title: 'CALL OF DUTY',
      description: 'adventure game',
      price:'39.54$',
    },
    {
      id: 2,
      image: clouds,
      title: 'GTA 5',
      description: 'adventure game',
      price:'39.5$',
    },
    {
      id: 3,
      image: clouds,
      title: 'MULTIVERSUS',
      description: 'adventure game',
      price:'39.5$',
    },
    {
      id: 4,
      image: clouds,
      title: 'THE LEGEND OF ZELDA',
      description: 'adventure game',
      price:'39.5$',
    },
    {
      id: 5,
      image: clouds,
      title: 'SAMPLE GAME',
      description: 'adventure game',
      price:'39.5$',
    },
    {
      id: 6,
      image: clouds,
      title: 'SAMPLE GAME',
      description: 'adventure game',
      price:'39.5$',
    },
  ]

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
          data.map(({id, image, title, description,price,}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div className="portfolio__item-cta">
          <button className='btn' target='_blank'>buy now</button>
          <button className='btn btn-primary' target='_blank'>add to cart</button>
          <h1>{price}</h1>
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