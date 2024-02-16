import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";


function Mapfunc() {
    const position = { lat: 57.7470384, lng: 12.0329031 };
  const [open, setOpen] = useState(false);
  
return (
    <>
      <div className="conainer">
        <div className="section">
            <div className="section_text direction_text">
                <h3>Vägbeskrivning</h3>
                <h2>Hitta hit</h2>
                <p>Lokalen ligger snett mitt emot brödfabriken i josered och det finns olika sätt att ta sig dit antingen med bil/taxi/uber  eller med pendeltåg.
                    <br />  <br />
                    Klicka på knappen för att komma vidare till karta  <br /></p>
                <a className="button" href="https://www.google.com/maps/dir//Fabriksstr%C3%A5ket+Jonsered,+Fabriksstr%C3%A5ket+36,+433+76+Jonsered/@57.7470384,12.0329031,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x464ff78d3f6897c3:0xaffee2e763751daa!2m2!1d12.1756818!2d57.7480542?entry=ttu" target='_blank'>Vägbeskrivning</a>
            </div>
        </div>
      </div>
      <APIProvider apiKey="AIzaSyDI_y2IAGGdKvV12kglYN5I4z308XMfPpA">
            <div style={{ height: "80vh", width: "100%" }}>
                <Map 
                  zoom={16} 
                  center={position} 
                  mapId="ec7fddfc9fde637d"
                  options={{
                    streetViewControl: false, // This disables Street View
                    mapTypeControl: false,
                    fullscreenControl: false, // This disables the map type control (e.g., Satellite View)
                    // Add any additional options here
                  }}// Apply the styles here
                >
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin
                            background={"black"}
                            borderColor={"#fff"}/>
                    </AdvancedMarker>

                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>Här gifter vi oss!</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    </>
);  
};

export default Mapfunc;