import SearchBar from './shared/SearchBar';

const WelcomeSearchView = async () => {
  const response = await fetch(
    process.env.THEMOVIEDB_API_URL + '/trending/movie/week?language=en-US',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.THEMOVIEDB_ACCESS_TOKEN_AUTH}`,
      },
    }
  );

  const responseData = await response.json();

  const randomNum = Math.floor(Math.random() * 20);

  const backgroundUrl = `${process.env.THEMOVIEDB_IMAGE_URL}w1280${responseData.results[randomNum].backdrop_path}`;

  const sectionStyle = {
    backgroundImage: `url(${backgroundUrl})`,
  };

  return (
    <section
      style={sectionStyle}
      className={`bg-secondary  bg-blend-darken	 h-[300px] bg-cover bg-no-repeat bg-top`}
    >
      <div className="flex justify-start flex-col m-auto py-[50px] px-[40px] text-white">
        <div className="text-5xl font-bold">Welcome.</div>
        <div className=" mb-5 lg:mb-[50px] text-3xl font-semibold">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <SearchBar />
      </div>
    </section>
  );
};

export default WelcomeSearchView;
