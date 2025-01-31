import { useState } from 'react'
import StarAiIcon from '/images/star-ai.png'

const Generator = () => {
  const [prompt, setPrompt] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!prompt.trim()) {
      setIsModalOpen(true)
      return;
  }
    alert("Ai is generating...")
  }
  return (
    <section className="container">
      <div className="mt-[30px] min-[450px]:mt-[40px] flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="min-[360px]:w-[85%] lg:w-[100%] font-bold text-[16px] min-[360px]:text-[18px] min-[450px]:text-[19px] min-[500px]:text-[21px] sm:text-[23px] md:text-[25px] lg:text-[31px] xl:text-[34px] text-center">Smart AI Creator – Generate Anything Instantly</h1>
          <p className="w-[80%] text-center text-[10px] min-[450px]:text-[12px] md:text-[14px] xl:text-[18px]">Unlock limitless possibilities with AI-powered creativity.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-1 w-[90%] flex flex-col gap-2 items-center justify-center">
          <textarea value={prompt}
            onChange={(e) => setPrompt(e.target.value)} className="bg-transparent border-[1px] border-[#28334AFF] w-[95%] h-[160px] sm:h-[160px] md:h-[180px] lg:h-[220px] resize-none outline-1 outline-[#A89C94FF] sm:w-[75%] lg:w-[55%] p-2 text-[12px] sm:p-3 sm:text-[14px] md:text-[16px] rounded-md" placeholder="Describe what you need, and AI will create it for you!"></textarea>
          <button type="submit" className="bg-[#EAC435] hover:bg-[#dab631d9] flex items-center justify-center gap-1 w-[95%] h-[30px] text-[11px] min-[530px]:text-[14px] lg:text-[16px] min-[350px]:text-[12px] min-[500px]:h-[35px] md:h-[40px] sm:w-[75%] lg:w-[55%] rounded-md">
            <span>Generate image</span>
            <img className='w-[15px] h-[15px] min-[530px]:w-[20px] min-[530px]:h-[20px]' src={StarAiIcon} alt="star icon" />
          </button>
        </form>
      </div>
      {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white flex flex-col items-center justify-center rounded-lg p-6 w-[80%] sm:w-[400px] shadow-lg">
                        <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-gray-800">Error!</h2>
                        <p className="text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] text-center mt-2">You have not entered anything. Please describe your image to produce the best quality images!</p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Understandable
                        </button>
                    </div>
                </div>
            )}
    </section>
  )
}

export default Generator