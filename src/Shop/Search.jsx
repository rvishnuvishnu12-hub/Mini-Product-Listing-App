import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Search = ({ products = [] }) => {
  const [searchTeam, setSearchTeam] = useState("")
  const filteredproducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTeam.toLowerCase())
  )

  return (
    <div className='widget widget-search'>
      <form className='search-wrapper mb-3' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='search...'
          value={searchTeam}
          onChange={(e) => setSearchTeam(e.target.value)}
        />
        <button type='submit'>
          <i className='icofont-search-2'></i>
        </button>
      </form>

      {/* showing search result */}
      <div>
        {searchTeam &&
          filteredproducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className='d-flex gap-3 p-3'>
                <div>
                  <div className='pro-thumb h-25'>
                    <img src={product.img} alt='' width={70} className='flex-shrink-0' />
                  </div>
                </div>

                <div className='product-content'>
                  <p>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </p>
                  <h6>${product.price}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Search