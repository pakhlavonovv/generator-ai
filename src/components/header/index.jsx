import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(localStorage.getItem('selectedModel') || 'dalle-2');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
  return (
    <>
      <header className="container flex items-center justify-between">
        <div>
          <h2 className="cursor-pointer font-bold text-[16px] min-[370px]:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">Image Generator</h2>
        </div>
        <div className='flex items-center gap-3'>
          <span className='hidden md:flex text-[16px] lg:text-[18px]'>Menu</span>
          <i
            className="fa-solid fa-bars fa-lg cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-[75%] z-50 sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]' : 'w-0'
          } overflow-hidden`}
      >
        <div className="flex justify-end p-4">
          <i
            className="fa-solid fa-xmark text-xl cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>

        <ul className="p-4 flex flex-col gap-2">
        <Link className='text-[14px] sm:text-[16px]' to={'/'}>Home</Link>
          <Link className='text-[14px] sm:text-[16px]' target='_blank' to={'/contact'}>Contact</Link>
          <Link className='text-[14px] sm:text-[16px]' target='_blank' to={'https://t.me/slaydtopbot'}>Telegram bot</Link>
          <select onChange={handleModelChange} className="bg-white border-none text-[14px] sm:text-[16px] text-black px-2 w-[80%] h-[30px] rounded-2xl flex items-center justify-center outline-none" defaultValue="dalle-2">
          <option className='text-black' value="dalle-2">Dall-e 2</option>
          </select>
        </ul>
      </div>
    </>
  );
};

export default Header;
