import "./App.css";

import EmployeeList from "./components/EmployeeList";
import EmployeeListItems from "./components/EmployeeListItem";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="container">
        <div className="box" style={{ border: "2px solid orange" }}>
          <div className="header-items">
            <Header title="Employee Directory" />
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>

          <div
            className="employee-container"
            style={{ border: "2px solid purple" }}
          >
            <div className="employees">
              <EmployeeList
                img="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                title="James King"
                description="President and CEO"
              />
            </div>
            <div className="employees">
              <EmployeeList
                img="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png"
                title="Julie Taylor"
                description="VP for Marketing"
              />
            </div>
            <div className="employees">
              <EmployeeList
                img="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp"
                title="Eugene Lee"
                description="CFO"
              />
            </div>
            <div className="employees">
              <EmployeeList
                img="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                title="John Williams"
                description="VP of Engineering"
              />
            </div>
            <div className="employees">
              <EmployeeList
                img="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg"
                title="Ray Moore"
                description="VP of Sales"
              />
            </div>
            <div className="employees">
              <EmployeeList
                img="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                title="Paul Jones"
                description="QA Manager"
              />
            </div>
          </div>
        </div>
        <div className="box2" style={{ border: "2px solid brown" }}>
          <div className="header-items">
            <Header title="Employee" />
          </div>
          <div>
            <EmployeeListItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
