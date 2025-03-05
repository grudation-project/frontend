import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import dash from '../../assets/images/dash.png';
import { Services } from './services';

export default function LandingPage() {
  return (
    <>
      {/* Main section with background */}
      <div className="relative bg-primary text-white py-5 pb-24 min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(circle,_#081D66,_#03091E)] text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-16 md:mt-24 leading-snug">
          Make your working process easier <br className="hidden md:block" /> with Your Ticket
        </h1>
        <p className="text-base md:text-lg mt-4 max-w-2xl">
          Its much easier now to create, assign, manage, and resolve <br className="hidden md:block" />
          tickets with Your Ticket. Just host this web <br className="hidden md:block" />
          application on any hosting server of your choice and use it.
        </p>

        {/* Navigation buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <Link
            className="px-6 py-2 rounded-lg text-white transition duration-300 text-lg"
            style={{ background: 'linear-gradient(90deg, #0B76C2, #13D6D6)' }}
            to="/login"
          >
            Login
          </Link>
          <Link
              className="px-6 py-2 rounded-md transition duration-300 text-white border-2"
              style={{
                borderImage: 'linear-gradient(90deg, #0B76C2, #13D6D6) 1',
                background: 'transparent',
              }}
              to="/register"
            >
              Register
            </Link>
        </div>
      </div>

      {/* Image between sections */}
      <div className="relative flex justify-center mt-12 md:mt-20">
        <img
          src={dash}
          className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 mx-auto absolute -top-20 md:-top-40 shadow-lg rounded-lg"
          alt="Dashboard"
        />
      </div>

      {/* Services section */}
      <div className="pt-64 md:pt-80 bg-gray-100 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">Looking For Help?</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Here is an example of our services.</p>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 py-8">
            {Services.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <i className={`fa-solid ${item.icon} text-4xl ${item.color}`}></i>
                <h3 className="text-lg md:text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
