describe("main.js", () => {
  let expectedOutput = [
    { 
      name: 'Chelsea - Arsenal',
      score: '2:1' 
    },
    {
      name: 'Germany - France',
      score: 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'
    },
    { 
      name: 'Pogoń Szczeciń vs Azoty Puławy',
      score: '34:26'
    },
    { 
      name: 'GKS Tychy - GKS Katowice',
      score: '9:7,2:1,5:3,9:9' 
    },
    {
      name: 'Maria Sharapova vs Serena Williams',
      score: 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)'
    }
  ];
  
  it('writes expected output to the stdout', () => {
    console.log = jest.fn();
  
    require('../dist/src/main');
  
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });
});
