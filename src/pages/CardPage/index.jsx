
import { CiHeart } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import bmw from '../../assets/images/bmw.avif'
import pp from '../../assets/images/pp.jpg'
import logo from '../../assets/images/logo.png'
import { useParams } from 'react-router-dom';



const CardPage = () => {

    const { id } = useParams();

    

    

  return (
    <div>
        <div className="w-[65%] mt-[20px] mb-[20px] ml-auto mr-auto relative">
            <div className="h-[60px] flex justify-between bg-white sticky top-0">
                <div className="flex items-center gap-[10px]">
                    <div>
                        <img src={logo} alt="logo" className='w-[43px] h-[40px] rounded-[10px]'/>
                    </div>
                    <p className='text-[20px] font-600'>BMW X5, 2021 il, 35000 km</p>
                </div>
                <div className="flex justify-around gap-[10px]">
                    <div className="flex gap-[10px] items-center">
                        <div>
                            <CiHeart style={{width:'40px'}}/>
                        </div>
                        <p className='text-[17px]'>Seçilmişlərdə saxla</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <div>
                            <CiFlag1 style={{width:'40px'}}/>
                        </div>
                        <p className='text=[17px]'>Şikayət et</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src = {bmw} alt="Car Image" className="rounded-[10px]"/>
                </div>

            </div>
            <div className="mt-[20px] flex flex-col flex-wrap h-[180px] gap-[15px]">
                <p className="text-gray-500 text-[20px]">Şəhər <span className="text-black text-[20px]">Bakı</span></p>
                <p className="text-gray-500 text-[20px]">Marka <span className="text-black text-[20px]">BMW</span></p>
                <p className="text-gray-500 text-[20px]">Model <span className="text-black text-[20px]">X5</span></p>
                <p className="text-gray-500 text-[20px]">Buraxılış ili <span className="text-black text-[20px]">2021</span></p>
                <p className="text-gray-500 text-[20px]">Rəng <span className="text-black text-[20px]">Qara</span></p>
                <p className="text-gray-500 text-[20px]">Mühərrik <span className="text-black text-[20px]">3.0L I6 Turbo</span></p>
                <p className="text-gray-500 text-[20px]">Yürüş <span className="text-black text-[20px]">35000</span></p>
            </div>

            <div className="absolute top-[60px] right-[20px] w-[330px]">
                <div className="sticky top-[20px] bg-gray-100 p-[15px] rounded-[10px]">
                    <p className="text-[20px] font-bold">52000$</p> 
                    <div className="flex justify-between mt-[20px] mb-[20px]">
                        <div>
                            <p className="text-[20px]">Ismət</p>
                            <p className="text-gray mb-[5px] text-[20px]">Ağsu</p>
                        </div>
                        <div>
                            <img src={pp} alt="Profile Photo"  className="size-[80px] rounded-[100px]"/>
                        </div>
                    </div>
                    <button className="bg-green-800 rounded-[10px] w-full h-10 text-white text-[25px]">Call</button>
                </div>

            </div>
        </div>


    </div>
  )
}

export default CardPage