import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import Loading from "../components/ui/Loading";

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
interface GenreListInterface {
  setelledpromises: MoviesInterface[];
}

const Movies = () => {
  const { setelledpromises } = useLoaderData() as GenreListInterface;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={setelledpromises}>
        {(genreLists: MoviesInterface[]) => {
          return (
            <main className="movies">
              <div className="wrapper movies__wrapper">
                <header>
                  <div className="logo">Super app</div>
                  <Link to={"/"} className="home__navlink">
                    <img
                      alt="profile"
                      src="/src/assets/images/profile_mini.png"
                    />
                  </Link>
                </header>
                <h1>Entertainment according to your choice</h1>
                <section className="movies__section">
                  {genreLists.map((genreList, i) => {
                    return (
                      <div className="movies__subsection" key={i}>
                        <h2>{genreList.value.genre}</h2>
                        <ul>
                          {genreList.value.data.map((data) => {
                            return (
                              <li key={data.id}>
                                <img src={data.img} className="card__rounded" />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </section>
              </div>
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Movies;
