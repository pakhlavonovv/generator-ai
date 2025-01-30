import { Link } from "react-router-dom"
import Images from "../../components/images"

const Index = () => {
  return (
    <div className="container flex flex-col gap-2 justify-center pt-8">
      <h1 className="font-bold text-center w-[100%] text-[16px] min-[350px]:text-[18px] min-[450px]:text-[20px] min-[550px]:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px]">Why isn't the picture coming out the way you want it to?
      </h1>
      <p className="w-[100%] md:text-center p-2 sm:w-[90%] mt-[10px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">-Describe the image you want to create as accurately and without errors as possible:

Guidelines for creating an image prompt
- Be clear and concise: Accurately describe the object or scene you want to see.
- Add details: Include colors, style, background, or atmosphere.
- Set the purpose or mood: Set the mood, purpose, or style of the image.
- Examples:
1. A landscape sparkling under the bright sun, surrounded by colorful flowers against a clear blue sky, with a gentle breeze and a clear body of water sparkling in the rays of light.
2. The central square of a large city, shining under the midday sun, decorated with colorful advertising billboards and bright neon lights, harmoniously combined with modern buildings and shopping arcades, creating a bright and impressive sight.</p>
<Link to={'/'} className="flex items-center justify-center bg-[#28334AFF] w-[180px] md:w-[200px] xl:w-[220px] h-[40px] text-[12px] md:text-[14px] text-white rounded-sm">Understandable, go back</Link>
<div className="mt-[30px]">
<h2 className="font-bold text-center w-[100%] text-[16px] min-[350px]:text-[18px] min-[450px]:text-[20px] min-[550px]:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px]">Images created by AI</h2>
<Images/>
</div>
    </div>
  )
}

export default Index