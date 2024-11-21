"use client";

// component css styles
import styles from "./ContactMap.module.css";

// other libraries
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGlobalContext } from "@/lib/GlobalContext";

export default function ContactMap() {
  const { localizedContent } = useGlobalContext();

  return (
    <div className={styles["contact-map"]}>
      <MapContainer center={[50.05142444038861, 21.98322537033913]} zoom={17}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[50.05142444038861, 21.98322537033913]}>
          <Popup>
            {localizedContent["contactMap"]["letUsTalk"]}
            <br />
            {localizedContent["contactMap"]["overCup"]}
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
        {localizedContent["contactMap"]["poland"]}
        <br />
        <br />
        <a href="mailto:remi.k.work@proton.me">remi.k.work@proton.me</a>
      </div>
    </div>
  );
}
