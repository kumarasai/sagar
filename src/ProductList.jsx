// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { productData } from "./data";

// const ProductList = () => {
//   const [filters, setFilters] = useState({
//     category: "",
//     minPrice: "",
//     maxPrice: "",
//     inStockOnly: false,
//   });

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFilters({
//       ...filters,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const filteredProducts = productData.filter((product) => {
//     const { category, minPrice, maxPrice, inStockOnly } = filters;
//     const categoryMatch = category ? product.category === category : true;
//     const minPriceMatch = minPrice ? product.price >= parseFloat(minPrice) : true;
//     const maxPriceMatch = maxPrice ? product.price <= parseFloat(maxPrice) : true;
//     const stockMatch = inStockOnly ? product.inStock : true;
//     return categoryMatch && minPriceMatch && maxPriceMatch && stockMatch;
//   });

//   return (
//     <div className="container">
//       <aside className="filters">
//         <h2>Filters</h2>
//         <label>
//           Category:
//           <select name="category" value={filters.category} onChange={handleFilterChange}>
//             <option value="">All</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Clothing">Clothing</option>
//             <option value="Home Appliances">Home Appliances</option>
//           </select>
//         </label>
//         <label>
//           Min Price:
//           <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} />
//         </label>
//         <label>
//           Max Price:
//           <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
//         </label>
//         <label className="checkbox">
//           <input
//             type="checkbox"
//             name="inStockOnly"
//             checked={filters.inStockOnly}
//             onChange={handleFilterChange}
//           />
//           Show In-Stock Only
//         </label>
//       </aside>

//       <main className="product-list">
//         <h2>Products</h2>
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <Link key={product.id} to={`/product/${product.id}`} className="product-card">
//               <div className="product-image">📦</div>
//               <h3>{product.name}</h3>
//               <p>₹{product.price}</p>
//               <p>{product.category}</p>
//               <p className={product.inStock ? "in-stock" : "out-of-stock"}>
//                 {product.inStock ? "In Stock" : "Out of Stock"}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductList;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "./data";

const ProductList = () => {
  const defaultFilters = {
    category: "",
    minPrice: "",
    maxPrice: "",
    inStockOnly: false,
  };

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const clearAllFilters = () => {
    setFilters(defaultFilters);
  };

  const filteredProducts = productData.filter((product) => {
    const { category, minPrice, maxPrice, inStockOnly } = filters;

    const categoryMatch = category ? product.category === category : true;
    const minPriceMatch = minPrice ? product.price >= parseFloat(minPrice) : true;
    const maxPriceMatch = maxPrice ? product.price <= parseFloat(maxPrice) : true;
    const stockMatch = inStockOnly ? product.inStock : true;

    return categoryMatch && minPriceMatch && maxPriceMatch && stockMatch;
  });

  return (
    <div className="container">
      <aside className="filters">
        <h2>Filters</h2>
        <label>
          Category:
          <select name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </label>
        <label>
          Min Price:
          <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} />
        </label>
        <label>
          Max Price:
          <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            name="inStockOnly"
            checked={filters.inStockOnly}
            onChange={handleFilterChange}
          />
          Show In-Stock Only
        </label>

        {/* ✅ Clear Filters Button */}
        <button onClick={clearAllFilters} className="clear-filters-btn">🧹 Clear Filters</button>
      </aside>

      <main className="product-list">
        <h2>Products</h2>
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                <div className="product-image">📦</div>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <p>{product.category}</p>
                <p className={product.inStock ? "in-stock" : "out-of-stock"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </Link>
            ))
          ) : (
            <p>No products match your filters.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
