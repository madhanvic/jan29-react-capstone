import { useAsyncValue } from "react-router-dom";
import { Data } from "../../lib/loader/homeLoader";

const NewsCard = () => {
  const data = useAsyncValue() as Data;
  return (
    <>
      <div className="news__card--header">
        <div className="news__card--img">
          <img src={data.news.img} alt="New Article" />
        </div>
        <div className="news__card--question">
          <p>{data.news.title}</p>
        </div>
      </div>

      <div className="news__card--content">
        <p>{data.news.content}</p>
      </div>
    </>
  );
};

export default NewsCard;
