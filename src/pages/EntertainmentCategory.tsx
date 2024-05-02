import React, { useState } from "react";
import { CategoryInterface } from "../interfaces";

const categorys: CategoryInterface = {
  entites: ["28", "18", "10749", "53", "37", "27", "14", "10402", "878"],
  data: {
    ["28"]: {
      id: "28",
      name: "Action",
      img: "/src/assets/images/action.png",
    },
    ["18"]: {
      id: "18",
      name: "Drama",
      img: "/src/assets/images/drama.png",
    },
    ["10749"]: {
      id: "10749",
      name: "Romance",
      img: "/src/assets/images/romance.png",
    },
    ["53"]: {
      id: "53",
      name: "Thriller",
      img: "/src/assets/images/thriller.png",
    },
    ["37"]: {
      id: "37",
      name: "Western",
      img: "/src/assets/images/western.png",
    },
    ["27"]: {
      id: "27",
      name: "Horror",
      img: "/src/assets/images/horror.png",
    },
    ["14"]: {
      id: "14",
      name: "Fantasy",
      img: "/src/assets/images/fantasy.png",
    },
    ["10402"]: {
      id: "10402",
      name: "Music",
      img: "/src/assets/images/music.png",
    },
    ["878"]: {
      id: "878",
      name: "Science Fiction",
      img: "/src/assets/images/fiction.png",
    },
  },
};

const dataEntities = Object.entries(categorys.data);

const EntertainmentCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const onChangeHandler = (id: string) => {
    setSelectedCategories((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((prevCatId) => prevCatId !== id);
      }
      return [...prevState, id];
    });
  };

  const onRemoveSelectedHandler = (id: string) => {
    setSelectedCategories((prevState) => {
      return prevState.filter((prevCatId) => prevCatId !== id);
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedCategories.length < 3) {
      setError(true);
      return;
    }
    setError(false);
    const finalizedSelectedCategories = selectedCategories.map(
      (selectedCategory) => {
        return {
          name: categorys.data[selectedCategory].name,
          id: categorys.data[selectedCategory].id,
        };
      }
    );
    localStorage.setItem(
      "categories",
      JSON.stringify(finalizedSelectedCategories)
    );
  };

  return (
    <main className="category">
      <div className="wrapper category__wrapper">
        <div className="category__leftSide">
          <h1 className="logo">Super app</h1>
          <h2 className="sub__heading">
            Choose your <br /> entertainment
            <br /> category
          </h2>
          {selectedCategories.length > 0 && (
            <ul className="category__selected--lists">
              {selectedCategories.map((selectedCategory) => {
                return (
                  <li
                    className="category__selected--item"
                    key={selectedCategory}
                  >
                    <span>{categorys.data[selectedCategory].name}</span>
                    <button
                      type="button"
                      onClick={onRemoveSelectedHandler.bind(
                        null,
                        selectedCategory
                      )}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {error && (
            <small className="category__error">
              <img
                alt="warning"
                src="./src/assets/images/warning.png"
                width="30"
                height="25"
              />
              <span>Minimum 3 category required</span>
            </small>
          )}
        </div>
        <form onSubmit={onSubmitHandler} className="category__rightSide">
          <ul className="category__list">
            {dataEntities.map((category) => {
              return (
                <li className="category__item" key={category[1].id}>
                  <input
                    type="checkbox"
                    name={category[1].name}
                    id={category[1].name}
                    checked={selectedCategories.includes(category[1].id)}
                    onChange={onChangeHandler.bind(null, category[1].id)}
                  />
                  <label
                    htmlFor={category[1].name}
                    aria-placeholder={category[1].name.toLocaleLowerCase()}
                    className="card__rounded"
                  >
                    <p>{category[1].name}</p>
                    <img alt={category[1].name} src={category[1].img} />
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="category__btn--container">
            <button type="submit" className="category__btn">
              Next Page
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EntertainmentCategory;
