import iconSearch from "../assets/images/icon-search.svg";
export default function Navigation() {
  return (
    <form className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
      <div className="flex gap-2 px-4 py-2 md:min-w-96 rounded-lg bg-card-bg">
        <img src={iconSearch} className="size-4" />
        <input
          type="text"
          placeholder="Search for a place..."
          name="search"
        ></input>
      </div>
      <button className="bg-Blue-500 p-2 md:px-4 rounded-lg" type="submit">
        Search
      </button>
    </form>
  );
}
