import './App.css';
import roomImage from './room-img.jpg';
import {ReactComponent as ReactLogo} from './airbnb-brands.svg';
function App() {
  const bgImageStyle = {
    backgroundImage: `url("${roomImage}")`,
    backgroundSize: "cover",
  };

  return (
    <div className="App">
      {/* <header className="text-center text-xl">
        <ul className="py-6">
          <tr>
            <h1 className="px-6 text-ellipsis">R Company</h1>
            <th className="px-6 text-ellipsis">Home</th>
            <th className="px-6">Products</th>
            <th className="px-6 text-ellipsis">Services</th>
          </tr>
        </ul>
      </header> */}

      <body>
        <div className=" text-white " style={bgImageStyle} >
          <div className="bg-gradient-to-r from-black px-8 py-16">
           


            <div className="grid grid-cols-1 text-left gap-4  max-w-lg">

            <div className="w-12 fill-white mb-5"><ReactLogo/></div>
              <h2 className="text-xl uppercase font-bold">Become a host</h2>
              <h1 className="text-6xl font-bold">Host your space, share your world</h1>
              <p className="text-lg">The art of hosting is rooted in thoughtful design. Share your unique aesthetic with guests and earn extra income on a schedule that works for you.</p>
              <button className="rounded-lg bg-gradient-to-r from-red-700 to-orange-600 px-6 py-3 font-bold text-lg w-48">Try Hosting</button>
            </div>
          </div>
        </div>

        <div className="px-8 py-16 text-left">
          <div className="max-w-lg mb-16">
            <h2 className="text-5xl font-bold">Your next chapter, made possible by Hosting</h2>
          </div>


          <div className="grid grid-cols-2  text-left gap-4 text-slate-700">
            <div>
              <h3 className="text-2xl font-bold mb-2">Share what you love</h3>
              <p className="text-lg">
                Indulge your love for design when you host Airbnb guests, who are drawn to authentic travel in creatively curated spaces.
              </p>
            </div>
            <div >
              <h3 className="text-2xl font-bold mb-2">Host how you want to</h3>
              <p className="text-lg">Airbnb gives you the tools and support to earn extra income, be your own boss and invest in your passions.</p>
            </div>
          </div>

        </div>


      </body>
    </div>
  );
}

export default App;
