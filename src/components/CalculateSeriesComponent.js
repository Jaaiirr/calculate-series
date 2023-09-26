import { Component } from 'react';

import ResultComponent from './ResultComponent';

class CalculateSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      triangularSeries: '',
      fibonacciSeries: [],
      primeNumber: [],
    };
  }

  componentDidUpdate(prev) {
    const { inputValue } = this.props;

    if (prev.inputValue !== this.props.inputValue) {
      const newValue = Number(inputValue);
      this.setState({
        n: inputValue,
        triangularSeries: this.calculateTriangular(newValue),
        fibonacciSeries: this.calculateFibonacci(newValue),
        primeNumber: this.primeNumberUpTo(newValue),
      });
    };
  };

  calculateTriangular(n) {
    return n * (n + 1) / 2;
  };

  calculateFibonacci(n) {
    if (n === 0) return '0';
    if (n === 1) return '0,1';

    let initialFibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
      initialFibonacci.push(initialFibonacci[i - 1] + initialFibonacci[i - 2]);
    }
    return initialFibonacci.join(',');
  };

  isPrimeNumber(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }

    return true;
  };

  primeNumberUpTo(n) {
    let primesArray = [];

    for (let i = 2; i <= n; i++) {
      if (this.isPrimeNumber(i))
        primesArray.push(i);
    }
    return primesArray.join(',');
  };

  handleOnChange = (e) => {
    this.setState({
      n: e.target.value,
    });
  }

  render() {
    return (
      <>
        <ResultComponent result={this.state} />
      </>
    );
  }
}

export default CalculateSeries;
