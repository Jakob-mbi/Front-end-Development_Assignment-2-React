import { useForm } from "react-hook-form";


const Input = (props) => {
    
    
    const {register,handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {props.inputClick(data);}

    return ( 
        <div className="flex justify-center bg-yellow w-full py-9 not-italic text-lg ">
            <div className="w-4/6 relative">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("value",{required: 'This is required',pattern:/^[a-zA-Z/\s/ ]+$/i})} className=" px-16 py-4 rounded-full text-2xl w-full" type="text"/>
                    <img src="https://iconarchive.com/download/i87838/icons8/ios7/Computer-Hardware-Keyboard.ico" alt="Keyboard icon" className="w-9 h-9 absolute top-3 left-4"/>
                    <button type="submit" className="bg-purple text-white rounded-full p-1 absolute top-2 right-2 lg:hover:bg-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    {errors.value && <p className="text-red-500">Only letters a-z with or with out whitespace is allowd!</p>}
                </form> 
            </div>    
        </div>
    );
}

export default Input;