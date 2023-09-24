import React from 'react';

class CalculateSeries extends React.Component {
  constructor() {
    super();

    this.state = {
      n: 0,
      triangularSeries: 0,
      fibonacciSeries: [],
      primeNumber: [],
    };
  }

  calculateTriangular(n) {
    return n * (n + 1) / 2;
  };

  calculateFibonacci(n) {
    let initialFibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      initialFibonacci[i] = initialFibonacci[i - 1] + initialFibonacci[i - 2]
    }
    return initialFibonacci.join(',');
  };

  isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n;
  }

  createArrayPrimeNumber(n) {
    let primeNumberArray = [];
    for (let i = 2; i < n; i++) {
      if (this.isPrimeNumber(n)) {
        primeNumberArray.push(n);
      }
    }
    return primeNumberArray.join(',');
  };

  handleOnChange = (e) => {
    this.setState({
      n: e.target.value,
    });
  }

  handleOnClick = () => {
    const newValue = parseInt(this.state.n, 10);
    this.setState({
      n: newValue,
      triangularSeries: this.calculateTriangular(newValue),
      fibonacciSeries: this.calculateFibonacci(newValue),
      primeNumber: this.createArrayPrimeNumber(newValue),
    });
  };

  render() {
    return (
      <>
        <input
          type="number"
          value={this.state.n}
          onChange={this.handleOnChange}
          placeholder="Ingresa un número"
        />

        <button
          type="buton"
          onClick={this.handleOnClick}
        >
          Click me!
        </button>
        <p>Triangular: {this.state.triangularSeries}</p>
        <p>Fibonacci: {this.state.fibonacciSeries}</p>
        <p>Primo: {this.state.primeNumber}</p>
      </>
    );
  }
}

export default CalculateSeries;
