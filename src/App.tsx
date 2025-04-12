import React from 'react';
import  {getNAPOD, NasaApodResponse} from './APIs/NAPOD'
import { useEffect, useState } from 'react';
import { User, Server, Cpu, MemoryStick as Memory, Network } from 'lucide-react';

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
    <div id="media" className="min-h-screen bg-[url(${data.url})] bg-cover bg-center bg-fixed">
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        {/* Server Info Box */}
        <div className="absolute top-4 left-4 bg-slate-900/90 p-6 rounded-lg shadow-xl border border-purple-500/30 backdrop-blur-md w-80">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
            />
            <div>
              
              <h2 className="text-xl font-bold text-white">Mt. Toro</h2>
              <p className="text-purple-300 text-sm">Server Master</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <Server className="w-4 h-4 text-purple-400" />
              <span>Server Status: </span>
              <span className="text-green-400">Online</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>CPU Usage: </span>
              <span>35%</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <Memory className="w-4 h-4 text-purple-400" />
              <span>Memory: </span>
              <span>3.2/8 GB</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <Network className="w-4 h-4 text-purple-400" />
              <span>Network: </span>
              <span>1.2 Gbps</span>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-6xl font-bold text-white mb-6 text-center">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              MilkyWay
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl text-center leading-relaxed">
            Embark on a cosmic journey through our digital galaxy. If you are here, you already know the reason why, so please proseed . If you have the time, please check my portfolio and my GitHub repository. I am always looking for new opportunities and challenges in the tech world.
          </p>

          <div className="mt-8 space-x-4">
            <a href="http://prtflio.info">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full 
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                Portfolio
              </button>
            </a>
            <a href="http://blogs.milkyway.fit">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full 
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                Blogs | comming soon...
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
