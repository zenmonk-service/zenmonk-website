import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { countries } from "@/assets/icons/contact-us";
import { LocationMarker } from "@/assets/icons";
import "./styles.scss"

// Custom Marker Icon
const markerIcon = new L.Icon({
  iconUrl: LocationMarker.src,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      zoomControl={false}
      touchZoom={false}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution="© Stadia Maps"
      />

      {countries.map((country) => (
        <Marker
          draggable
          alt={country.name}
          key={country.id}
          position={[country.lat, country.lng]}
          icon={markerIcon}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
