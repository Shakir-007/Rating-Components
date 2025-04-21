import { FaStar } from "react-icons/fa6";
import './App.css'

function App() {

  return (
    <>
      <div className="bg-[#111317] h-screen flex justify-center items-center">
        <div className="bg-[#1E232B] [#ED6F14] rounded-2xl p-8 ">
            <div className="bg-[#262f38] rounded-full w-10 h-10 flex justify-center items-center">
                <FaStar fill="#ED6F14"  />
            </div>
            <div>
              <h1 className="text-white text-2xl font-medium py-4">How did we do?</h1>
              <p className="text-[#949BA3] font-normal w-[345px]">Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="grid grid-cols-5 gap-4 py-4">
              <div className="w-10 h-10 rounded-full text-[#949BA3] hover:bg-white cursor-pointer hover:text-black bg-[#262f38] flex justify-center items-center">1</div>
              <div className="w-10 h-10 rounded-full text-[#949BA3] hover:bg-white cursor-pointer hover:text-black bg-[#262f38] flex justify-center items-center">2</div>
              <div className="w-10 h-10 rounded-full text-[#949BA3] hover:bg-white cursor-pointer hover:text-black bg-[#262f38] flex justify-center items-center">3</div>
              <div className="w-10 h-10 rounded-full text-[#949BA3] hover:bg-white cursor-pointer hover:text-black bg-[#262f38] flex justify-center items-center">4</div>
              <div className="w-10 h-10 rounded-full text-[#949BA3] hover:bg-white cursor-pointer hover:text-black bg-[#262f38] flex justify-center items-center">5</div>
            </div>
            <button className="bg-[#ED6F14] w-[330px] mx-1 mt-2 
            hover:bg-white hover:text-black font-semibold uppercase rounded-full h-8 ">Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
