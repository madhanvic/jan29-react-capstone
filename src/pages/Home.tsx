import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import NewsCard from "../components/home/NewsCard";
import NotesCard from "../components/home/NotesCard";
import TimerCard from "../components/home/TimerCard";
import UserCard from "../components/home/UserCard";
import WeatherCard from "../components/home/WeatherCard";
import { Data } from "../lib/loader/homeLoader";
import Loading from "../components/ui/Loading";

const Home = () => {
  const data = useLoaderData() as Data;
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        <main className="home">
          <div className="wrapper">
            <div className="home__grid">
              <div className="profile__card card__rounded">
                <UserCard />
              </div>
              <div className="weather__card card__rounded">
                <WeatherCard />
              </div>
              <div className="notes__card card__rounded">
                <NotesCard />
              </div>
              <div className="timer__card card__rounded">
                <TimerCard />
              </div>
              <div className="news__card card__rounded">
                <NewsCard />
              </div>
              <div className="home__browse">
                <button className="home__browse--btn" type="button">
                  Browse
                </button>
              </div>
            </div>
          </div>
        </main>
      </Await>
    </Suspense>
  );
};

export default Home;
