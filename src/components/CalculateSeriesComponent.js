import React from 'react';

import ResultComponent from './ResultComponent';

class CalculateSeries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      triangularSeries: '',
      fibonacciSeries: [],
      primeNumber: [],
    };
  }

  componentDidUpdate(prev) {
    if (prev.inputValue !== this.props.inputValue) {
      const newValue = Number(this.props.inputValue);
      this.setState({
        n: this.props.inputValue,
        triangularSeries: this.calculateTriangular(newValue),
        fibonacciSeries: this.calculateFibonacci(newValue),
        primeNumber: false,
      });
    };
  };

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
