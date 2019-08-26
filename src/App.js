import React from 'react';

const styleLength = {
  border: '1px solid green',
  color: 'white',
  backgroundColor: 'green',
  borderRadius: '50%',
  padding: '3px',
  display: 'inline-block',
  margin: '0px 0px 0px 10px',
}

const styleChar = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black',
}

const ValidationComponent = ({val, validVal}) => {
  const isValid = val > validVal;
  return (
    <div style={{color: isValid ? 'green' : 'red'}}>
      { isValid ? 'Text long enough' : 'Text too short' }
    </div>
  )
}

const CharComponents = ({char, click}) => {
  return (
    <span onClick={() => click()} style={styleChar}>{char}</span>
  )
}
class App extends React.Component {
  state = {
    string: '',
  };

  setValue = (event) => {
    this.setState({
      string: event.target.value,
    });
  }

  rmChar = (index) => {
    const arrayOfChars = this.state.string.split('');
    arrayOfChars.splice(index, 1);
    this.setState({
      string: arrayOfChars.join(''),
    })
  }

  render() {
    const charArr = this.state.string.split('');
    return (
      <div>
        <input type="text" value={this.state.string} onChange={this.setValue}/>
        <span style={styleLength}>{this.state.string.length}</span>
        <ValidationComponent val={this.state.string.length} validVal={5} />
        <div>
          {charArr.map( (char, index) => <CharComponents key={index} click={() => this.rmChar(index)} char={char} /> )}
        </div>
      </div>
    )
  }
}

export default App;