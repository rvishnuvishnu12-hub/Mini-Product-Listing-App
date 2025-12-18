import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import productData from '../products.json'
import SelectedCategory from '../components/SelectedCategory'



const title =(
  <h2>Search your one from <span>thousand</span> of products</h2>
)
const desc = "we have the largest collection of products"
const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterproducts, setFilterProducts] = useState("productData");
//console.log(productData)

//search functionality
const handleSearch = e => {
  const sreachTerm = e.target.value;
  setSearchInput(sreachTerm);

  //filter products based on search 
  const filteredProducts = productData.filter((product) => product.name.toLowerCase().includes(sreachTerm.
    toLowerCase()));

  setFilterProducts (filteredProducts);
}

  return (
    <div className="banner-section style-4">
    <div className="container">
      <div className="banner-content">
        {title}
        <form>
          <SelectedCategory select={"all"}/>
          <input type="text" name="search" id="search" placeholder="Search your product" 
          value={searchInput} onChange={handleSearch}/>
          <button type="submit">
            <i class="icofont-search"></i>
          </button>
        </form>
        <p>{desc}</p>
        <ul className='lab-ul'>
          {
            searchInput && filterproducts.map((product, i) => <li key={i}>
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </li>)
          }
          </ul>
      </div>
    </div>
      </div>
    );
  
};

export default Banner