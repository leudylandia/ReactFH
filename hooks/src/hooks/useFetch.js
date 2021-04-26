import { useEffect, useState, useRef } from "react"


export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        //Para activar el loading mientra realiza la peticion
        setstate({
            data: null,
            loading: true,
            error: null
        })

        fetch(url).then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if(isMounted.current){
                        setstate({
                            data: data,
                            loading: false,
                            error: null
                        })
                    }
                    else{
                        console.log('setState no se llamo')
                    }
                }, 4000)
                
            })
       
    }, [url])

    return state;
}
