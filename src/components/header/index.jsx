import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="container flex items-center justify-between">
        <div>
            <h2 className="cursor-pointer font-bold text-[16px] min-[370px]:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">Image Generator</h2>
        </div>
        <div>
            <Link target="_blank" to={'https://t.me/aislidebot'} className="bg-[#669DB3FF] text-white text-[10px] p-2 px-4 w-[100px] h-[30px] min-[370px]:text-[12px] min-[370px]:w-[120px] sm:text-[14px] sm:px-3 md:text-[16px] md:px-5 lg:px-7 rounded-md">Telegram bot</Link>
        </div>
    </header>
  )
}

export default Header