import React, { useEffect, useState, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onAddIngredients } = props;
  const [ searchValue, useSearchValue ] = useState('');
  const inputRef = useRef();
  
  useEffect(() => {
    const timerID = setTimeout(() => {
      const value = inputRef.current.value;
      const query = value !== '' ? `?orderBy="title"&equalTo="${value}"` : '';
      fetch(`https://react-cg.firebaseio.com/ingreds.json${query}`)
      .then(res => res.json())
      .then(data => {
        const ingredients = [];
        for (const key in data) {
          ingredients.push({...data[key], id: key,})
        }
        onAddIngredients([...ingredients]); 
      });
    }, 500);

    return () => {
      clearTimeout(timerID);
    }

  }, [searchValue, onAddIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={evt => useSearchValue(evt.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
