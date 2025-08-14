// client/components/emergency/NearbyAssistance.jsx
export default function NearbyAssistance({ nearestPolice }) {
  return (
    <div className="mt-6 rounded-2xl p-4 bg-[#201818] border border-[#2a1d1d]">
      <h2 className="text-lg font-semibold text-white mb-3">
        Nearby Assistance
      </h2>

      {/* NEW: Nearest Police (auto after location permission) */}
      <div className="text-sm text-gray-200 mb-3">
        <div className="font-medium">Nearest Police Station</div>
        {nearestPolice ? (
          <div className="mt-1">
            <div className="opacity-90">{nearestPolice.name}</div>
            <div className="mt-0.5">
              📞{" "}
              {nearestPolice.phone &&
              nearestPolice.phone !== "Not available" ? (
                <a
                  href={`tel:${nearestPolice.phone}`}
                  className="text-blue-400 underline"
                >
                  {nearestPolice.phone}
                </a>
              ) : (
                <span className="opacity-70">Phone not available</span>
              )}
            </div>
          </div>
        ) : (
          <div className="opacity-70">
            Enable location to see the nearest police contact.
          </div>
        )}
      </div>

      {/* …keep your existing assistance items below */}
      {/* e.g., emergency helplines, ambulance, NGOs, etc. */}
    </div>
  );
}
