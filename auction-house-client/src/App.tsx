import "./App.css";

function App() {
  const handleTestApi = async () => {
    const user = await (await fetch("http://localhost:8080/users/1000")).json();
    console.log(user);
  };
  return (
    <>
      <div className="flex gap-4 ">
        <div className="px-4 py-2 bg-blue-500 rounded-md font-bold active:bg-blue-600 cursor-pointer">
          Login
        </div>
        <div className="px-4 py-2 bg-blue-500 rounded-md font-bold active:bg-blue-600 cursor-pointer">
          Register
        </div>
        <div
          className="px-4 py-2 bg-blue-500 rounded-md font-bold active:bg-blue-600 cursor-pointer"
          onClick={handleTestApi}
        >
          Test api
        </div>
      </div>
    </>
  );
}

export default App;
