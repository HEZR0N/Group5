import React, {useEffect, useState} from 'react'
import './Altshop.css'
import clouds from '../../assets/storm.png'
import { useCart } from "react-use-cart";
const data = [
    {
      id: 1,
      image: clouds,
      title: 'CALL OF DUTY',
      description: 'adventure game',
      price: 30.54 ,
      quantity:6,
    },
    {
      id: 2,
      image: clouds,
      title: 'GTA 5',
      description: 'adventure game',
      price: 5.5 ,
      quantity:5,
    },
    {
      id: 3,
      image: clouds,
      title: 'MULTIVERSUS',
      description: 'adventure game',
      price: 2.5 ,
      quantity:5,
    },
    {
      id: 4,
      image: clouds,
      title: 'THE LEGEND OF ZELDA',
      description: 'adventure game',
      price:39.5,
      quantity:5,
    },
    {
      id: 5,
      image: clouds,
      title: 'SAMPLE GAME',
      description: 'adventure game',
      price:200.5,
      quantity:5,
    },
    {
      id: 6,
      image: clouds,
      title: 'SAMPLE GAME',
      description: 'adventure game',
      price:39.5,
      quantity:5,
    },
  ]

const Altshop = () => {
  const [query, setQuery] = useState("");
  const { addItem, inCart,} = useCart();
  const [dat, setData] = useState([]);
  const [sortType, setSortType] = useState('data');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        price: 'price',
        nprice:'price',
        quantity: 'title',
      };
      const sortProperty = types[type];
      const rsorted = [...data].sort((b, a) => b[sortProperty] - a[sortProperty]);
      const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
      if(type=='nprice'){
        setData(rsorted);
      }
      else{
      setData(sorted);
      }
    };

    sortArray(sortType);
  }, [sortType]); 
  return (
    <>
    <div id="altshoponly">
    <header>
  <div class="filter-conditon">

    <input
        className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>Filter By</span>
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option >none</option>
        <option value="price">Highest to lowest</option>
        <option value="nprice">lowest to Highest</option>
        <option value="quantity">quantity</option>
      </select>
  </div>
</header>
<br></br>
<br></br>
      <div className="container portfolio__container">
        
          {dat.filter((asd) => asd.title.toLowerCase().includes(query)
        ).map((p) =>{
            const alreadyAdded = inCart(p.id);
            return(
              <article key={p.id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={clouds} alt = {p.image} />
          </div>
          <h1>{p.title}</h1>
          <h3>{p.description}</h3>
          <div className="portfolio__item-cta">
          <button className='btn btn-primary' onClick={() => addItem(p)}>{alreadyAdded ? "Add again" : "Add to Cart"}</button>
          <h1>{p.price}$</h1>
          </div>
        </article>
            )
          })}
      </div>
    </div>
    <script type ="text/javascript" src="sort.js"></script>
    <script type ="text/javascript" src="filter.js"></script>
    </>
  )
}

export default Altshop