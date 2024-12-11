import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeListItems from "./components/EmployeeListItem";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="item-flex">
        {/* <EmployeeList />
        <EmployeeListItems /> */}
        <div>
          <Header title="Employee Directory" />
          <SearchBar />
        </div>
        <div>
          <Header title="Employee" />
        </div>
      </div>
    </>
  );
}

export default App;
