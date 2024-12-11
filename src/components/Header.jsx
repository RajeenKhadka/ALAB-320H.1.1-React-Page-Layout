function Header(props) {
  return (
    <div className={props.title}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;
