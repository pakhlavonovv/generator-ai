import { useEffect, useState } from 'react'
import StarAiIcon from '/images/star-ai.png'
import Loading from '../loading';

const Generator = () => {
  const [prompt, setPrompt] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(localStorage.getItem('selectedModel') || 'dalle-2');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    const apiUrl = 'https://api.openai.com/v1/images/generations';
    const apiKey = import.meta.env.VITE_API_KEY;

    const requestBody = {
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        if (data?.data[0]?.url) {
          setImageUrl(data.data[0].url);
        }
      })
      .catch(error => {
        console.error("Error fetching image:", error);
        setError(true)
        setLoading(false)
      });
  };

  useEffect(() => {
    const savedModel = localStorage.getItem('selectedModel');
    if (savedModel) {
      setSelectedModel(savedModel);
    }
  }, []);

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    localStorage.setItem('selectedModel', model);
  };

  
  const handleDownload = async (imageUrl) => {
    window.open(`http://generator-ai-six.vercel.app/download?url=${encodeURIComponent(imageUrl)}`, "_blank");
  };
  
  
  
  
  return (
    <section className="container">
      <div className="mt-[30px] min-[450px]:mt-[40px] flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="min-[360px]:w-[85%] lg:w-[100%] font-bold bg-gradient-to-r from-purple-600 via-red-600 to-gray-600 bg-clip-text text-transparent text-[16px] min-[360px]:text-[19px] min-[450px]:text-[20px] min-[500px]:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[31px] xl:text-[36px] text-center">
            Smart AI Creator – Generate Anything Instantly
          </h1>
          <p className="w-[80%] text-center text-[10px] min-[450px]:text-[12px] md:text-[14px] xl:text-[18px]">
            Unlock limitless possibilities with AI-powered creativity.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-1 w-[90%] flex flex-col gap-2 items-center justify-center">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-transparent border-[1px] border-[#28334AFF] w-[95%] h-[160px] sm:h-[160px] md:h-[180px] lg:h-[220px] resize-none outline-1 outline-[#A89C94FF] sm:w-[75%] lg:w-[55%] p-2 text-[12px] sm:p-3 sm:text-[14px] md:text-[16px] rounded-md"
            placeholder="Describe what you need, and AI will create it for you!"
          />
          <select
            onChange={handleModelChange}
            className="bg-transparent border-[1px] border-black w-[95%] h-[33px] p-2 text-[12px] sm:h-[40px] sm:text-[16px] text-black rounded-2xl flex items-center justify-center outline-none sm:w-[75%] lg:w-[55%]"
            value={selectedModel}
          >
            <option className="text-black" value="dalle-2">Dall-e 2</option>
          </select>
          <button disabled={loading} type="submit" className="bg-[#EAC435] hover:bg-[#dab631d9] flex items-center justify-center gap-1 w-[95%] h-[30px] text-[11px] min-[530px]:text-[14px] lg:text-[16px] min-[350px]:text-[12px] min-[500px]:h-[35px] md:h-[40px] sm:w-[75%] lg:w-[55%] rounded-md">
            <span>{loading ? 'Generating...' : 'Generate Image'}</span>
            <img className="w-[15px] h-[15px] min-[530px]:w-[20px] min-[530px]:h-[20px]" src={StarAiIcon} alt="star icon" />
          </button>
          {error ? <p className='text-red-600'>Error! Please double-check the entered image and try again.</p> : ''}
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white flex flex-col items-center justify-center rounded-lg p-6 w-[80%] sm:w-[400px] shadow-lg">
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-gray-800">Error!</h2>
            <p className="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] text-center mt-2">
              You have not entered anything. Please describe your image to produce the best quality images!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-[12px] sm:text-[14px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Understandable
            </button>
          </div>
        </div>
      )}
      {/* Download button */}
      {imageUrl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 flex flex-col items-center justify-center rounded-lg p-6 w-[80%] sm:w-[450px] shadow-lg">
            <h2 className="text-[16px] text-center sm:text-[18px] md:text-[22px] font-semibold text-gray-800">Generated image with quality</h2>
            <img loading={<Loading/>} src={imageUrl} alt="Generated AI Image" className="mt-4 max-w-[100%] max-h-[300px] object-contain rounded-md shadow-2xl" />
            <div className="w-full flex items-center gap-1">
              <button
                 onClick={handleDownload}
                 disabled={loading}
                className="mt-4 text-[9px] min-[350px]:text-[11px] sm:h-[40px] w-[100%] h-[30px] p-2 sm:text-[12px] md:text-[14px] flex items-center justify-center bg-teal-400 hover:bg-teal-500 text-white rounded-md"
              >
                Download Image
              </button>


              <button
                onClick={() => setImageUrl(null)}
                className="mt-4 text-[9px] min-[350px]:text-[11px] sm:h-[40px] sm:text-[14px] md:text-[16px] bg-pink-600 hover:bg-pink-700 text-white w-[100%] h-[30px] px-2 py-1 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Generator;
