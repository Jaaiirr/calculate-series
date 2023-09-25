import React from 'react';

import CalculateSeries from './CalculateSeriesComponent';
import '../styles/MainFormComponent.css';

class MainFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: '',
    };
  };

  handleOnchange = (e) => {
    this.setState({
      n: e.target.value,
    });
  };

  render() {
    return (
      <div className='main-container'>
        <p className='tittle-text'>Calculate series</p>
        <span className='message'>Triangular/Primo/Fibonacci</span>
        <div className='action-container'>
          <input
            className='number-input'
            type='number'
            placeholder='Ingresa un número'
            value={this.state.n}
            onChange={this.handleOnchange}
          />
        </div>
        <CalculateSeries inputValue={this.state.n} />
      </div>
    );
  }
};

export default MainFormComponent;
