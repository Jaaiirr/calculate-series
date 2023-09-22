import React from 'react';
import './App.css';

class MainFormComponent extends React.Component {
  render() {
    return <div className='main-container'>
      <p className='tittle-text'>Calculate series</p>
      <span className='message'>Triangular/Primo/Fibonacci</span>
      <div className='container-input-radio'>
        <div>
          <label for="one" className='general-text'>Opcion 1</label>
          <input type="radio" name="one" value="one" id='one'></input>
        </div>

        <div>
          <label for="two" className='general-text'>Opcion 2</label>
          <input type="radio" name="two" value="two" id='two'></input>
        </div>

      </div>
      <input className='number-input' type='number' placeholder='Ingresa un número'></input>
    </div>;
  }
};

export default MainFormComponent;
