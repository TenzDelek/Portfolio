import Image from "next/image";
import image1 from "../../../public/tech/1.png";
import image2 from "../../../public/tech/2.png";
import image3 from "../../../public/tech/3.png";
import image4 from "../../../public/tech/4.png";
import image5 from "../../../public/tech/5.png";
import image6 from "../../../public/tech/6.png";
import image7 from "../../../public/tech/7.png";
import image8 from "../../../public/tech/8.png";
import image9 from "../../../public/tech/9.png";
const Tech = () => {
  const imagelist = [
    { imag: image1 },
    { imag: image2 },
    { imag: image3 },
    { imag: image4 },
    { imag: image5 },
    { imag: image6 },
    { imag: image7 },
    { imag: image8 },
    { imag: image9 },
  ];
  return (
    <div className=" lg:w-[600px] mx-auto text-center   grid grid-cols-3 rounded-lg overflow-hidden border">
      {imagelist.map((data,index)=>(
        <div key={index} className=" border"> <Image  className="grayscale hover:grayscale-0 transition duration-300 ease-in-out" src={data.imag} width={300} height={200}  alt="images tech "/></div>
      ))}
      {/* <div className='flex flex-col lg:p-4 p-1 mt-4' >
            <p className=' text-lg  px-2 font-semibold max-md:text-center'>TechStack Info</p>
            <p className='max-md:ml-5 text-sm px-2'>Development</p>
            <p className=' flex lg:flex-nowrap flex-wrap px-2 gap-y-2 text-sm mt-2 max-md:ml-5'>
            <TextCard name="Nextjs14"/>
            <TextCard name="React"/>
            <TextCard name="Supabase"/>
            <TextCard name="NextAuth"/>
            <TextCard name="MongoDB"/>
            <TextCard name="TailwindCSS"/>
            </p>

            <p className='max-md:ml-5 text-sm mt-2 px-2'>Design</p>
            <p className=' flex flex-wrap px-2 gap-2 text-sm mt-2 max-md:ml-5'>
            <TextCard name="Figma"/>
            <TextCard name="Blender"/>
            <TextCard name="Adobe Suite"/>
            </p>
        </div> */}
    </div>
  );
};

export default Tech;
