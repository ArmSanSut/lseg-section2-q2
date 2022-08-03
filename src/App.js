import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.publicapis.org/categories')
      .then(res => {
        setData(res.data.categories)
      })
      .catch(err => {
        console.log("Error", err)
        return null
      })
  }, []);

  const SearchCategories = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
    }
  }
  return (
    <div className='container' style={{ display: "flex" }}>
      <table>
        <tr>
          <th> Categories </th>
        </tr>
        {data.map((x) => <tr key={x}>{x}</tr>)}
      </table>
      <div>
        <input
          type="text"
          onChange={(e) => SearchCategories(e)}
          placeholder="Enter categories"
          onKeyPress={SearchCategories}
          style={{ height: 50 }}
        />
        { data.includes(search) === true ? <p>{search}</p> : <p>Try to search again</p>}
      </div>
    </div>
  );
}

export default App;
