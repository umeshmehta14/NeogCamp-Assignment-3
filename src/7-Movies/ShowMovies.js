const ShowMovies = ({ movie }) => {
  const { id, title, rating, year } = movie;
  return (
    <>
      <div key={id}>
        <h2>{title}</h2>
        <span> Rating:{rating} </span>-<span> Year:{year}</span>
      </div>
    </>
  );
};
export default ShowMovies;
