import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    searchDataBase,
    categoryOptions,
    ratingOptions,
    filterClick,
    ratingClick,
    changeInput,
    clearFilters,
    titleSearch,
    rating,
    category,
  } = props

  const searchBased = e => {
    if (e.key === 'Enter') {
      searchDataBase()
    }
  }

  const searchInput = e => {
    changeInput(e.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="searchbar-holder">
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          onChange={searchInput}
          onKeyDown={searchBased}
          value={titleSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(item => (
          <li key={item.categoryId} className="category-item">
            <button
              type="button"
              className={`category-btn ${
                item.categoryId === category ? 'add-color' : ''
              }`}
              onClick={() => filterClick(item.categoryId)}
            >
              <p>{item.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category">Rating</h1>
      <ul className="category-list">
        {ratingOptions.map(item => (
          <li key={item.ratingId} className="category-item">
            <button
              type="button"
              className={`category-btn ${
                item.ratingId === rating ? 'add-color' : ''
              }`}
              onClick={() => ratingClick(item.ratingId)}
            >
              <img
                src={item.imageUrl}
                className="rating-image"
                alt={`rating ${item.ratingId}`}
              />
              <span className="up">&up</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
