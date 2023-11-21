import {AiOutlineArrowLeft} from 'react-icons/ai'

const Back = () => {
  return (
        <div className=" font-sans font-bold absolute top-0 left-0 azul py-2 pr-5 pl-9 mt-14 ml-[7%] border-solid border border-white rounded-full text-center transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300" >
            Regresar
            <div className='absolute left-3 top-[50%] translate-y-[-50%]'><AiOutlineArrowLeft/></div>
        </div>
    
  )
}

export default Back