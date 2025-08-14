import { useState, useEffect } from "react";
import LocationPermissionButton from "../components/emergency/LocationPermissionButton";
import LocationInput from "../components/emergency/LocationInput";
import MapView from "../components/emergency/MapView";
import NearbyAssistance from "../components/emergency/NearbyAssistance";
import BuddyList from "../components/emergency/BuddyList";
import SOSButton from "../components/emergency/SOSButton";

export default function Emergency() {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [routeColor, setRouteColor] = useState("blue");

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
          alert("Location Permission Granted!");
        },
        () => {
          alert("Location Permission Denied!");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleFindRoute = async (address) => {
    if (!address || !userLocation) {
      alert("Please enable location and enter destination.");
      return;
    }

    try {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          address
        )}&key=YOUR_API_KEY`
      );
      const data = await res.json();
      if (data.results.length === 0) {
        alert("Destination not found!");
        return;
      }

      const destCoords = [
        data.results[0].geometry.lat,
        data.results[0].geometry.lng,
      ];

      const url = `https://router.project-osrm.org/route/v1/driving/${userLocation[1]},${userLocation[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;
      const routesRes = await fetch(url);
      const routeData = await routesRes.json();

      if (routeData.routes.length > 0) {
        const coords = routeData.routes[0].geometry.coordinates.map(
          ([lon, lat]) => [lat, lon]
        );
        setRouteCoordinates(coords);

        const dist = routeData.routes[0].distance;
        if (dist > 5000) setRouteColor("red");
        else if (dist > 1000) setRouteColor("yellow");
        else setRouteColor("green");
      }
    } catch (error) {
      console.error("Error fetching route:", error);
      alert("Failed to fetch route.");
    }
  };

  const handleSOS = () => {
    alert(
      "SOS Triggered! Police, nearby volunteers, and family will be alerted."
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#171212] flex justify-center items-start px-2 py-3">
      <div className="w-full max-w-3xl bg-[#1f1616] rounded-2xl p-6 sm:p-8 shadow-xl">
        {/* Location Permission Button */}
        <LocationPermissionButton onEnableLocation={handleLocationPermission} />

        {/* Destination Input + Find Route */}
        <LocationInput
          destination={destination}
          setDestination={setDestination}
          onFindRoute={handleFindRoute}
        />

        {/* Map View */}
        <MapView
          userLocation={userLocation}
          routeCoordinates={routeCoordinates}
          routeColor={routeColor}
        />

        {/* Nearby Assistance */}
        <NearbyAssistance />

        {/* Nearby Buddies */}
        <BuddyList />

        {/* SOS Button */}
        <div className="flex justify-end mt-6">
          <SOSButton onSOS={handleSOS} />
        </div>
      </div>
    </div>
  );
}
