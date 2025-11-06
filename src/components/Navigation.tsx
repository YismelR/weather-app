import iconSearch from "../assets/images/icon-search.svg";
export default function Navigation() {
  return (
    <form className="flex gap-4">
      <div className="flex gap-2 px-4 py-2 min-w-96 rounded-lg bg-card-bg">
        <img src={iconSearch} className="size-4" />
        <input
          type="text"
          placeholder="Search for a place..."
          name="search"
        ></input>
      </div>
      <button className="bg-Blue-500 px-4 rounded-lg" type="submit">
        Search
      </button>
    </form>
  );
}
