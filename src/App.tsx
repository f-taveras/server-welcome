import { getNAPOD, NasaApodResponse } from './APIs/NAPOD'
import { useEffect, useState } from 'react';
import { APODCard } from './components/APODCard';
import { NavigationDropdown } from './components/projects_dropdown';

function App() {

  const [napod, setNapod] = useState<NasaApodResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNAPOD()
      .then((setNapod))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <span>Error: {error}</span>;
  if (!napod) return <span>Loading...</span>;


  return (

    <div
      id="media"
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col"
      style={{ backgroundImage: `url(${napod.hdurl})` }}
    >
      {/* Overlay */}
        <NavigationDropdown className="absolute top-6 left-6 z-50" />
      <div className="min-h-screen  relative flex flex-col items-center justify-center p-6 gap-8">




        {/* Welcome Message */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl gap-4">
          <h1 className="text-6xl font-bold text-white">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              MilkyWay
            </span>
          </h1>
          

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a href="http://prtflio.info">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                Portfolio
              </button>
            </a>
            <a href="http://blogs.milkyway.fit">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                Blogs | Coming soon...
              </button>
            </a>
            {/* APOD Info */}

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 lg:left-6 lg:transform-none lg:translate-x-0">
              <APODCard napod={napod} />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
