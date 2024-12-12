import EmployeeList from "./EmployeeList";

function EmployeeListItems() {
  return (
    <div>
      <div className="employee-info">
        <EmployeeList
          img="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png"
          title="Julie Taylor"
          description="VP for Marketing"
        />
      </div>
      <div className="employee-description">
        <h4>Call Office</h4>
        <p>718-000-0002</p>
        <h4>Call Mobile</h4>
        <p>617-000-0002</p>
        <h4>SMS</h4>
        <p>617-000-0002</p>
        <h4>Email</h4>
        <p>jtaylor@fakemail.com</p>
      </div>
    </div>
  );
}

export default EmployeeListItems;
