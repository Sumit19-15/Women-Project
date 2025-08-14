import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({
  userLocation,
  routeCoordinates,
  routeColor,
}) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
      {userLocation ? (
        <MapContainer
          center={userLocation}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={userLocation}></Marker>
          {routeCoordinates.length > 0 && (
            <Polyline positions={routeCoordinates} color={routeColor} />
          )}
        </MapContainer>
      ) : (
        <div className="bg-[#362b2c] flex items-center justify-center h-full text-[#b4a2a3]">
          Enable location to view map
        </div>
      )}
    </div>
  );
}
