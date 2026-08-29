
import { useEffect } from "react";
import { useRef } from "react";
function useOutsideClick(closeModal,listenCapturing=true){

    const ref=useRef(null);

    useEffect(function(){
function handleClickOutside(event){
    if(ref.current && !ref.current.contains(event.target)){
    closeModal();
    }
}
document.addEventListener("click",handleClickOutside,listenCapturing);
return ()=>document.removeEventListener("click",handleClickOutside,listenCapturing);
},[closeModal,listenCapturing]);
return ref;
};
export default useOutsideClick;