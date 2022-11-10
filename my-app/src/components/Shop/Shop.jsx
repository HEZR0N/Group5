import React from 'react'
import './Shop.css'
import clouds from '../../assets/storm.png'
import { Component } from 'react';
import l from './filter.js'

const data = [
    {
      id: 1,
      image: clouds,
      title: 'Crypto Currency Dashboard & Finnancial Visualization',
      github: 'https://github.com',
      demo: 'https://www.youtube.com/',
    },
    {
      id: 2,
      image: clouds,
      title: 'Crypto Currency Dashboard & Finnancial Visualization',
      github: 'https://github.com',
      demo: 'https://www.youtube.com/',
    },
    {
      id: 3,
      image: clouds,
      title: 'Crypto Currency Dashboard & Finnancial Visualization',
      github: 'https://github.com',
      demo: 'https://www.youtube.com/',
    },
    {
      id: 4,
      image: clouds,
      title: 'Crypto Currency Dashboard & Finnancial Visualization',
      github: 'https://github.com',
      demo: 'https://www.youtube.com/',
    },
    {
      id: 5,
      image: clouds,
      title: 'Crypto Currency Dashboard & Finnancial Visualization',
      github: 'https://github.com',
      demo: 'https://www.youtube.com/',
    },
    {
      id: 6,
      image: clouds,
      title: 'Crypto Currency Dashboard & Finnancial Visualization',
      github: 'https://github.com',
      demo: 'https://www.youtube.com/',
    },
  ]


export const Shop = () => {
    l();
    //  const Printline = () => {
    //      console.log("hello world");
    //      l();
    //  }  

  return (
    
    <>
    <div id='shoponly'>
    <main>
        <button>Click me</button>
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
<div class="product-field">
    <ul class="items">
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Watch</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$45.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Blazer</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$35.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Watch</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$40.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Blazer</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$42.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Watch</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$46.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Blazer</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$55.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Shoes</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$25.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Mobile</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$20.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Shoes</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$15.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>shoes</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$22.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Mobile</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$33.78</h4>
        </li>
        <li data-category="" data-price="">
            <picture>
                <img src={clouds} alt=""/>
            </picture>
            <div class="detail">
                <p class = "icon">
                    <span><i class = "far fa-heart"></i></span>
                    <span><i class = "far fa-share-square"></i></span>
                    <span><i class = "fas fa-shopping-basket"></i></span>
                </p>
                <strong>Watch</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <small>Buy Now</small>
            </div>
            <h4>$20.78</h4>
        </li>
    </ul>
</div>
</main>
</div>
<script type ="text/javascript" src="sort.js"></script>
<script type ="text/javascript" src="filter.js"></script>
    </>
  )
}

export default Shop