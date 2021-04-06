function factoralize(n) {
  if (n == 1) {
    return 1;
  }
  return n * factoralize(n - 1);
}

console.log(factoralize(5));
