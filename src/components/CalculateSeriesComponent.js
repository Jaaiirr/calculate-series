import React from 'react';

class CalculateSeries extends React.Component {
  constructor() {
    super();

    this.state = {
      n: 0,
      triangularSeries: 0,
    };
  }

  calculateTriangular(n) {
    return n * (n + 1) / 2;
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
      </>
    );
  }
}

export default CalculateSeries;
