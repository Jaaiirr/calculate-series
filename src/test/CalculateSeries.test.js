import CalculateSeries from '../components/CalculateSeriesComponent';
import expectValueFibonacci from './utils/expectedValuesFibonacci';

describe('CalculateSeries TEST', () => {

  const component = new CalculateSeries();

  for (let i = 1; i <= 10; i++) {
    const expectedValueTriangular = i * (i + 1) / 2;

    test(`Should Get ${expectedValueTriangular} when calculateTriangular(${i}) is called`, () => {
      const result = component.calculateTriangular(i);
      expect(result).toBe(expectedValueTriangular);
    });

    test(`Should success when calculateFibonacci(${i}) is called`, () => {
      const result = component.calculateFibonacci(i);
      expect(result).toBe(expectValueFibonacci(i));
    });
  }
});
