import React, { useState, useMemo, useCallback } from 'react';

// 1. React.memo prevents this child component from re-rendering 
// unless its props (items or onItemClick) actually change.
const ProductList = React.memo(({ items, onItemClick }) => {
  console.log("🎨 [Render] ProductList component");
  
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item.name)} style={{ cursor: 'pointer', margin: '5px 0' }}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
});

// Setting a display name for debugging clarity
ProductList.displayName = 'ProductList';


export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Mock dataset
  const allProducts = [
    { id: 1, name: 'Apple iPhone', price: 999 },
    { id: 2, name: 'Samsung Galaxy', price: 899 },
    { id: 3, name: 'Google Pixel', price: 799 },
    { id: 4, name: 'MacBook Pro', price: 1999 },
    { id: 5, name: 'Dell XPS', price: 1499 },
  ];

  // 2. useMemo caches the filtered results. 
  // It will ONLY re-run the filtering logic when 'searchTerm' changes.
  // Toggling dark mode will NOT trigger this expensive array filtering.
  const filteredProducts = useMemo(() => {
    console.log("⚙️ [Compute] Filtering products...");
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // Dependency array

  // 3. useCallback caches the function instance.
  // Without useCallback, this function is recreated on every single render.
  // If a new reference were passed, React.memo on ProductList would fail and cause a re-render.
  const handleProductClick = useCallback((name) => {
    alert(`You clicked on ${name}`);
  }, []); // Empty dependency array means the function reference never changes
//   const handleProductClick = (name) => {
//     console.log(`You clicked on ${name}`);
//     alert(`You clicked on ${name}`);
//   }; 

  return (
    <div style={{
      padding: '20px',
      backgroundColor: isDarkMode ? '#222' : '#fff',
      color: isDarkMode ? '#fff' : '#222',
      minHeight: '100vh'
    }}>
      <h1>Product Dashboard</h1>
      
      {/* Theme Toggle Controls */}
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      
      <hr />

      {/* Search Input Controls */}
      <div>
        <label htmlFor="search">Search Products: </label>
        <input 
          id="search"
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Type to filter..."
        />
      </div>

      <h3>Products Available:</h3>
      {/* 
        Because filteredProducts is memoized with useMemo 
        and handleProductClick is memoized with useCallback, 
        ProductList will NOT re-render when you click "Toggle Dark Mode".
      */}
      <ProductList items={filteredProducts} onItemClick={handleProductClick} />
    </div>
  );
}
