export function Search(props) {
  return (
    <form className="search-form">
      <input
        placeholder="Search"
        type="text"
        className="search-input"
        onChange={props.onChangeSearch}
      ></input>
    </form>
  );
}
