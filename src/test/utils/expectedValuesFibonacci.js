const expectValueFibonacci = (n) => {
  if (n === 0) return '0';
  if (n === 1) return '0,1';

  let initialFibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    initialFibonacci.push(initialFibonacci[i - 1] + initialFibonacci[i - 2]);
  }
  return initialFibonacci.join(',');
};

export default expectValueFibonacci;