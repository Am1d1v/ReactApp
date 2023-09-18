import Costs from "./components/Costs";





function App() {

    const costs = [
      {
        date: new Date(2023, 7, 1),
        description: "Some Item1",
        amount: 100
      },

      {
        date: new Date(2023, 7, 2),
        description: "Some Item2",
        amount: 200
      },

      {
        date: new Date(2023, 7, 3),
        description: "Some Item3",
        amount: 300
      }
    ];

  return (
    <div>
      <Costs costs={costs[0]}/>
      <Costs costs={costs[1]}/>
      <Costs costs={costs[2]}/>
    </div>
  );
}

export default App;
