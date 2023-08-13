import CostItem from './components/costItem';





function App() {

    const costs = [
      {
        date: new Date(2023, 1, 7),
        description: "Some Item1",
        amount: 100
      },

      {
        date: new Date(2023, 2, 7),
        description: "Some Item2",
        amount: 200
      },

      {
        date: new Date(2023, 3, 7),
        description: "Some Item3",
        amount: 300
      }
    ];

  return (
    <div>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}/>
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}/>
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}/>

    
      
    </div>
  );
}

export default App;
