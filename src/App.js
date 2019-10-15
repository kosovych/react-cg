import React from 'react';

const mok = [
  {
    title: '1',
  },
  {
    title: '2',
  },
  {
    title: '3',
  },
  {
    title: '4',
  },

  {
    title: '5',
  },

  {
    title: '6',
  },

  {
    title: '7',
  },

  {
    title: '8',
  },

  {
    title: '9',
  },

  {
    title: '10',
  },

  {
    title: '11',
  },

  {
    title: '12',
  },
];

class List extends React.Component {
  render() {
    const {title} = this.props.list;
    const arr = new Array(Math.floor((Math.random() * 10)));
    arr.fill('blah');

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {arr.map( i => <li key={i}>{i}</li>)}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    console.log(sortCol(mok, 1, 3));
    console.log(sortCol(mok, 2, 3));
    console.log(sortCol(mok, 3, 3));
    
    return (
      <div className="container">
        <div className="col">
          {sortCol(mok, 1, 3).map(e => <List key={e.title} list={e}/>)}
        </div>
        <div className="col">
          {sortCol(mok, 2, 3).map(e => <List key={e.title} list={e}/>)}
        </div>
        <div className="col">
          {sortCol(mok, 3, 3).map(e => <List key={e.title} list={e}/>)}
        </div>
      </div>
    )
  }
}

function sortCol(array, colNumber, colAmount) {
  let currentCol = 0;
  let newArray = array.slice(colNumber - 1);
  return newArray.filter((el, i) => {
    if(currentCol === colAmount) {
      currentCol = 0;
    }
    if(currentCol === 0) {
      currentCol++;
      return el;
    }
    else {
      currentCol++;
    }
  });
}

export default App;
