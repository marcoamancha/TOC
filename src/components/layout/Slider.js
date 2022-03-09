import {useEffect, useRef, useState} from 'react'; 
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';

const imagesSlider = [
    '/img/medicina.jpeg',
    '/img/odontologia.jpg',
    '/img/Psicologia.jpg',
    '/img/obstetricia.jpg',
    '/img/comunicacion.jpg',
    '/img/juridica.jpg',
    '/img/QuienesSomos.jpeg',
    '/img/Salud.jpeg',
];
let count = 0;
export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    }
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        //startSlider();
        
    }, []);
    // const startSlider = () => {
    //     setInterval(() => {
    //         handleNextClick();
    //     }, 3000);
    // }
    const handleNextClick = () => {
        count = (count + 1) % imagesSlider.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    }

    const handlePreviusClick = () => {
        const imagesLength = imagesSlider.length;
        count = (currentIndex + imagesLength - 1) % imagesLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    }
  return (
    <div ref={slideRef} className="w-full select-none shadow-sm relative bg-slate-300">
        <div className="aspect-w-16 aspect-h-9">
        <img className='object-contain w-full h-96' src={imagesSlider[currentIndex]} alt="CoverPage" />
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 py-2 px-3 flex justify-between items-center">
            <button className='bg-black text-white p-2 rounded-full bg-opacity-100 transition hover:bg-tomate' 
                    onClick={handlePreviusClick}>
                <AiOutlineVerticalRight size={30} />
            </button>
            <button className='bg-black text-white p-2 rounded-full bg-opacity-100 transition hover:bg-tomate' 
                    onClick={handleNextClick}>
                <AiOutlineVerticalLeft size={30} />
            </button>
        </div>
    </div>
  )
}
