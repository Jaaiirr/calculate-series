import { Component } from 'react';
import Swal from 'sweetalert2'

import CalculateSeries from './CalculateSeriesComponent';
import '../styles/MainFormComponent.css';

class MainFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n: '',
    };
  };

  handleOnchange = (e) => {
    const { value } = e.target;

    if (value <= 10) {
      this.setState({
        n: value,
      });
    } else if (value > 10) {
      Swal.fire({
        title: 'Error!',
        text: 'El número ingresado no debe ser mayor a 10.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    };
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
