import { Link, useLoaderData } from "react-router-dom";

interface MoviesInterface {
  status: "fulfilled";
  value: {
    data: Array<{
      id: number;
      img: string;
    }>;
    genre: string;
  };
}

const Movies = () => {
  const genreLists = useLoaderData() as MoviesInterface[];
  console.log(genreLists);

  const genres = [];
  for (let i = 0; i < genreLists.length; i++) {
    const genreJsx = (
      <div className="movies__subsection" key={i}>
        <h2>{genreLists[i].value.genre}</h2>
        <ul>
          {genreLists[i].value.data.map((data) => {
            return (
              <li key={data.id}>
                <img src={data.img} className="card__rounded" />
              </li>
            );
          })}
        </ul>
      </div>
    );
    genres.push(genreJsx);
  }

  return (
    <main className="movies">
      <div className="wrapper movies__wrapper">
        <header>
          <div className="logo">Super app</div>
          <Link to={"/"} className="home__navlink">
            <img alt="profile" src="/src/assets/images/profile_mini.png" />
          </Link>
        </header>
        <h1>Entertainment according to your choice</h1>
        <section className="movies__section">{genres}</section>
      </div>
    </main>
  );
};

export default Movies;
