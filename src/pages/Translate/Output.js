const Output = (props) => {
    const message = props.outputMassage.value;
    const messageArray =  message.toLowerCase().split('');
    
    return ( 
        <div className=" w-full h-full flex justify-center bg-white">
            <div className="w-4/6 h-100 mt-28 drop-shadow-2xl bg-gray-200 rounded-lg relativ">
                <div className="w-full h-5/6 overflow-auto p-2">
                    {
                        messageArray.map((char, index) => char === ' ' 
                            ? <span key={index} className="px-7"></span>
                            : <img key={index} src={`./images/individial_signs/${char}.png`} alt="..." className="inline-block h-16 lg:h-1/5" />
                        )
                    }
                </div>            
                <div className="w-full bg-purple rounded-b-lg absolute bottom-0 h-16">
                    <div className="bg-gray-200 rounded-full h-9 flex align-middle justify-center ml-4 mt-3 px-2 w-28">Translation</div>
                </div>
            </div> 
        </div>
    );
}
 
 
export default Output;