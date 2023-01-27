import withAuth from "../../hoc/withAuth"
import Input from "./Input"
import Output from "./Output"
import React, { useEffect, useState } from 'react';
import { useUser } from "../../context/UserContext";
import { updateUser } from "../../api/user";
import { toast } from "react-toastify"
import { storageWrite } from "../../shared/storage";
import { STORAGE_KEY_USER } from "../../const/storageKey";


function Translate() {
  const { user, setUser } = useUser()
  const [input, setInput] = useState({value: ''});
  
  const handleInputChangeOnclick = (data) => {
    setInput(data);
  };

  useEffect(() => {
    if (input.value === '') return;

    const addTranslation = async () => {
      

      const body = { translations: [...user.translations, input.value] }
      const [error, userObject] = await updateUser(user.id, body)
      
      // Nofity user of login/registration process
      const translationToast = toast.loading("Please wait...")
  
      if (error !== null) {
        toast.error("An error occurred...")
        throw new Error(error)
      }
      
      storageWrite(STORAGE_KEY_USER, userObject)
      setUser(userObject)
  
      // Notify user of successful translation
      toast.update(translationToast, {
        render: "Successful translation!",
        type: "success",
        isLoading: false,
        autoClose: 2500
      })
    }

    addTranslation()

    // eslint-disable-next-line
  },[input]);

  return (
    <div className="pt-24 md:pt-20">
      <Input inputClick={ handleInputChangeOnclick }/>
      <Output  outputMassage={input}/>
    </div>
  )
}

export default withAuth(Translate)