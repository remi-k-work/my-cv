import styles from "./ContactMap.module.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function ContactMap() {
  return (
    <div className={styles["contact-map"]}>
      <MapContainer center={[50.05142444038861, 21.98322537033913]} zoom={17}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[50.05142444038861, 21.98322537033913]}>
          <Popup>
            Let us talk about some projects
            <br />
            over a cup of coffee &#128516;
          </Popup>
        </Marker>
      </MapContainer>
      <div className={styles["contact-map__overlay"]}>
        Remi
        <br />
        Broniewskiego 24
        <br />
        35-206 Rzeszów
        <br />
        Poland
        <br />
        <br />
        remi.k.work@gmx.com
      </div>
    </div>
  );
}

export default ContactMap;
