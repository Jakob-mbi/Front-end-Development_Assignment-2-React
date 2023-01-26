const Output = () => {
    //const input = props.input;
    //const inputArray = input.split('')
    //const [matchArray, setMatchArray] = useState(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"])



   

    return ( 
        <div className=" w-full h-full flex justify-center bg-gray-200">
            <div className="w-4/6 h-96 mt-28 drop-shadow-2xl bg-gray-200 rounded-lg relativ">
                <div className="w-full h-5/6 overflow-auto p-2">
                    
                </div>            
                <div className="w-full bg-purple rounded-b-lg absolute bottom-0 h-1/6">
                    <button href="#"className="bg-gray-200 rounded-full h-9 align-middle ml-4 mt-3 px-2">Translation</button>
                </div>
            </div> 
        </div>
    );
}
 
 
export default Output;