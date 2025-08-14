import { useState, useEffect } from "react";
import LocationPermissionButton from "../components/emergency/LocationPermissionButton";
import LocationInput from "../components/emergency/LocationInput";
import MapView from "../components/emergency/MapView";
import NearbyAssistance from "../components/emergency/NearbyAssistance";
import BuddyList from "../components/emergency/BuddyList";
import SOSButton from "../components/emergency/SOSButton";

export default function Emergency() {
  const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY;
  const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY; // must be set in women-client/.env

  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [routeColor, setRouteColor] = useState("blue");

  // NEW: load Google Places JS once & hold the nearest police station info
  const [googleReady, setGoogleReady] = useState(false); // NEW
  const [nearestPolice, setNearestPolice] = useState(null); // NEW

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [position.coords.latitude, position.coords.longitude];
          setUserLocation(coords);
          alert("Location Permission Granted!");
          // fetching of nearest police will happen automatically when googleReady && userLocation via useEffect
        },
        () => {
          alert("Location Permission Denied!");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // NEW: Load Google Maps JS (Places library) so we can call PlacesService without CORS issues
  useEffect(() => {
    if (!googleApiKey) return;
    if (window.google?.maps?.places) {
      setGoogleReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => setGoogleReady(true);
    document.body.appendChild(script);
  }, [googleApiKey]);

  // NEW: when both Google is ready and we have location, fetch nearest police station
  useEffect(() => {
    if (googleReady && userLocation) fetchNearestPolice(userLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleReady, userLocation]);

  // NEW: use PlacesService (no CORS problems) and get the closest station + phone
  const fetchNearestPolice = ([lat, lng]) => {
    try {
      const center = new window.google.maps.LatLng(lat, lng);
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.nearbySearch(
        {
          location: center,
          rankBy: window.google.maps.places.RankBy.DISTANCE, // nearest first
          type: "police",
        },
        (results, status) => {
          if (
            status !== window.google.maps.places.PlacesServiceStatus.OK ||
            !results?.length
          ) {
            console.warn("No police stations found");
            return;
          }
          const nearest = results[0];
          service.getDetails(
            {
              placeId: nearest.place_id,
              fields: [
                "name",
                "formatted_phone_number",
                "international_phone_number",
              ],
            },
            (details, s2) => {
              if (
                s2 === window.google.maps.places.PlacesServiceStatus.OK &&
                details
              ) {
                setNearestPolice({
                  name: details.name || nearest.name,
                  phone:
                    details.formatted_phone_number ||
                    details.international_phone_number ||
                    "Not available",
                });
              } else {
                setNearestPolice({
                  name: nearest.name,
                  phone: "Not available",
                });
              }
            }
          );
        }
      );
    } catch (e) {
      console.error("PlacesService error:", e);
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
        )}&key=${apiKey}`
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

        {/* Nearby Assistance — now receives nearest police info */}
        <NearbyAssistance nearestPolice={nearestPolice} />

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
