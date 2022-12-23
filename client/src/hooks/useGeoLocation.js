import React,{ useState, useEffect} from 'react'

export default function useGeoLocation() {
    const [location,setLocation] = useState({
        loaded: false,
        coordinates:{lat:"",lng:""}
    });
    const [address,setAddress] = useState("")
    const [error, setError] = useState(null)

    const onSuccess= location=>{
        
        setLocation({
            loaded: true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,

            }
        })
    }

    const onError=error=>{
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
                code:0,
                message:"Geolocation not supported"
            })
        }else{
            navigator.geolocation.getCurrentPosition(onSuccess,onError);
           
        }
    },[])
    useEffect(() => {
        if (location.coordinates.lat && location.coordinates.lng) {
            try {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates.lat},${location.coordinates.lng}&key=AIzaSyDImOGv0owLXzAe6i49fIsFM_dUyuHEfDo`)
                .then((response) => response.json())
                .then((data) => setAddress(data?.results[0]?.formatted_address)
                    );
            } catch (error) {
                setError(error)
            }
        }
    },[location])

    if(error){
        return {error}
    }
    if(address){
        return {address: address,
        lat: location.coordinates.lat,
        long: location.coordinates.lng
    }
    }
}
