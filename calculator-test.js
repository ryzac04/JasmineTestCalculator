
it('should calculate the monthly rate correctly', function () {
  const values = {
     amount: 395000, years: 30, rate: 3.7
  }
  expect(calculateMonthlyPayment(values)).toEqual('1818.12')
});


it("should return a result with 2 decimal places", function() {
    const values = {
     amount: 400000, years: 30, rate: 8.0
  }
  expect(calculateMonthlyPayment(values)).toEqual('2935.06')
});


