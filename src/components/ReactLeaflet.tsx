// component css styles
import "leaflet/dist/leaflet.css";

// other libraries
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGlobalContext } from "@/lib/GlobalContext";

export default function ReactLeaflet() {
  const { localizedContent } = useGlobalContext();

  return (
    <MapContainer center={[50.05142444038861, 21.98322537033913]} zoom={17} className="z-0 size-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[50.05142444038861, 21.98322537033913]}>
        <Popup>
          {localizedContent["contactMap"]["letUsTalk"]}
          <br />
          {localizedContent["contactMap"]["overCup"]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
