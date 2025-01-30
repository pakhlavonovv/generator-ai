import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-[30vh] gap-2">
        <h1 className="font-bold text-center w-[90%] text-[14px] min-[350px]:text-[16px] min-[450px]:text-[18px] min-[550px]:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">Why isn't the picture coming out the way you want it to?</h1>
        <Link to={'/why'} className="underline text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">To know why</Link>
    </footer>
  )
}

export default Footer