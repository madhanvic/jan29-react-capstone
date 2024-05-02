import NewsCard from "../components/home/NewsCard";
import NotesCard from "../components/home/NotesCard";
import TimerCard from "../components/home/TimerCard";
import UserCard from "../components/home/UserCard";
import WeatherCard from "../components/home/WeatherCard";

const Home = () => {
  return (
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
  );
};

export default Home;
