import iconSearch from "../assets/images/icon-search.svg";
export default function Navigation() {
  return (
    <form className="flex lg:gap-4">
      <div className="flex lg:gap-2 lg:px-4 lg:py-2 lg:min-w-96 rounded-lg bg-card-bg">
        <img src={iconSearch} className="lg:size-4" />
        <input
          type="text"
          placeholder="Search for a place..."
          name="search"
        ></input>
      </div>
      <button className="bg-Blue-500 lg:px-4 rounded-lg" type="submit">
        Search
      </button>
    </form>
  );
}
