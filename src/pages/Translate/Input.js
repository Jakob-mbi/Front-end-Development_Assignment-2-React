
const Input = () => {
    
    return ( 
        <div className="flex justify-center bg-yellow w-full py-9 not-italic text-lg ">
            <div className="w-4/6 relative">
                <input className=" px-16 py-4 rounded-full text-2xl w-full" />
                <img src="https://iconarchive.com/download/i87838/icons8/ios7/Computer-Hardware-Keyboard.ico" className="w-9 h-9 absolute top-3 left-4"/>
                <a href="#" type="submit" className="bg-purple text-white rounded-full p-1 absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>    
        </div>
    );
}
 
export default Input;