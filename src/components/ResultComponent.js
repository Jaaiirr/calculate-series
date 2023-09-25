import React from "react";

import '../styles/ResultComponent.css';

class ResultComponent extends React.Component {
  render() {
    const { triangularSeries, fibonacciSeries, primeNumber } = this.props.result;

    return (
      <div className="container-cards">
        <div className="triangular">
          <p>Triangular series: </p>
          <p>{triangularSeries}</p>
        </div>
        <div className="fibonacci">
          <p>Fibonacci series: </p>
          <p>{fibonacciSeries}</p>
        </div>
        <div className="prime">
          <p>Prime series: </p>
          <p>{primeNumber}</p>
        </div>
      </div>
    );
  }
};

export default ResultComponent;
