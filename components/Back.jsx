import {AiOutlineArrowLeft} from 'react-icons/ai'

const Back = () => {
  return (
        <div className=" font-sans font-bold absolute top-0 left-0 bg-blue-500 py-3 pr-5 pl-9 mt-14 ml-[7%] border-solid border border-gray-600 rounded-full text-center hover:border-sky-500" >
            Regresar
            <div className='absolute left-3 top-[50%] translate-y-[-50%]'><AiOutlineArrowLeft/></div>
        </div>
    
  )
}

export default Back