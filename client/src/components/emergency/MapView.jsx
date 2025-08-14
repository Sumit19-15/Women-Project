import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom dark marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView({
  userLocation,
  routeCoordinates,
  routeColor,
}) {
  return (
    <div className="mt-6 rounded-2xl overflow-hidden border border-[#2a1d1d] shadow-lg h-[400px] bg-[#1f1616]">
      {userLocation ? (
        <MapContainer
          center={userLocation}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          className="z-0"
        >
          {/* Dark Theme Tile Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />

          {/* User Marker */}
          <Marker position={userLocation} icon={customIcon}>
            <Popup>
              <span className="text-black font-semibold">You are here</span>
            </Popup>
          </Marker>

          {/* Draw Route */}
          {routeCoordinates.length > 0 && (
            <Polyline
              positions={routeCoordinates}
              color={routeColor}
              weight={5}
            />
          )}
        </MapContainer>
      ) : (
        // Loading placeholder until location is granted
        <div className="flex items-center justify-center h-full">
          <span className="text-gray-400 text-lg">Loading map...</span>
        </div>
      )}
    </div>
  );
}
