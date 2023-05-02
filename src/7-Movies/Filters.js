const Filters = ({ HandleCategory, Categories, Ratings, HandleRatings }) => {
  return (
    <>
      <div>
        <form>
          Category Filter:
          {Categories.map((item) => {
            return (
              <label key={item}>
                <input
                  type="radio"
                  name="category"
                  value={item}
                  onChange={HandleCategory}
                />
                {item}
              </label>
            );
          })}
        </form>
        <div>
          <span>Rating Filter : </span>
          <select className="bg-select" onChange={HandleRatings}>
            {Ratings.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <h1>Movies List</h1>
        <div></div>
      </div>
    </>
  );
};

export default Filters;
