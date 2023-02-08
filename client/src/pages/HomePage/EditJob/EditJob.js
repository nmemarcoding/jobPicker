import react, {useState} from 'react';
import Navbar from '../../../components/Navbar/Navbar';

 export default function EditJob() {
  // use state to ho;d object of job data {title, description, price, id,Monday:[],Tuesday:[],Wednesday:[],Thursday:[],Friday:[],Saturday:[],Sunday:[],image}
  const [job, setJob] = useState({
    title: '',
    description: '',
    price: '',
    id: '',
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
    image: ''
  });

  const handleChange = (e) => {
    setJob({
    ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
   
  };

  
  
  return (
    <div>
      <Navbar/>
      
      <div className="flex flex-col  py-6 bg-gray-50 sm:px-6 lg:px-8 sm:block lg:block">
      <div className="flex items-center justify-center flex-1 h-full md:px-20">
        <div className="w-full max-w-md">
          <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
              <h1 className="text-xl font-semibold text-gray-200">Edit your job</h1>
              <button className="p-1 text-gray-500 transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* form has input for job title description and price */}
            <form className="flex flex-col p-6 space-y-4">
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="number"
                  step="0.01"
                  className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                />
                <label className="text-sm font-medium text-gray-700">Description
                </label>
                <textarea
                  className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                ></textarea>
                <label className="text-sm font-medium text-gray-700">Price</label>
                <input
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                />
                
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Monday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Tusday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Wednesday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Thursday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Friday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Saturday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="px-4 py-2 text-gray-700 bg-transparent border border-transparent rounded-md focus:border-gray-500 focus:ring-0">
                    Sunday:
                  </span>
                  <div className="flex flex-row space-x-4">
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />  
                    <input
                      type="time"
                      className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                </div>
                <br></br>
                {/* upload a image or drag and drop like the on on pstjob*/}
                <div className="flex flex-row space-x-4">
                
                  <input
                  type="file"
                  className="px-4 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                />
                </div>
                <div className="flex flex-row space-x-4"></div>
                {/* immge holder to show perevius image  */}
                <div className="flex flex-row space-x-4">
                  <img
                  className="w-full h-full object-cover"
                  src="https://source.unsplash.com/random/1600x900?hot"
                  alt=""
                />
                </div>
               
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white transition-
                  colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                > save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 

 )}




