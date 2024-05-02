export const loader = async () => {
  const response = localStorage.getItem("categories");
  if (response !== null) {
    const categories = await JSON.parse(response);
    const genreList = categories.map(
      async (catogory: { name: string; id: string }, i: number) => {
        return new Promise((resolve) => {
          setTimeout(async () => {
            const response = await fetch(
              `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${catogory.id}&page=1`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Key":
                    "25e07d1aecmsha84dd19c8a513b1p1fd1f9jsn3e31d666211e",
                  "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
                },
              }
            );
            const datas = await response.json();
            const finalizedData = [];
            for (let i = 0; i < datas.results.length; i++) {
              if (i > 3) {
                break;
              }
              finalizedData.push({
                id: datas.results[i].id,
                img: datas.results[i].backdrop_path,
              });
            }

            resolve({ data: finalizedData, genre: catogory.name });
          }, i * 2000);
        });
      }
    );
    console.log(genreList);

    const setelledpromises = await Promise.allSettled(genreList);
    return setelledpromises;
  }
};
