function EmployeeList(props) {
  return (
    <div className={`employee-card`}>
      <div className="employee-flex">
        <img src={props.img} alt="Employee" className="employee-image" />

        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
