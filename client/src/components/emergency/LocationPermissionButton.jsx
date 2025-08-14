export default function LocationPermissionButton({ onEnableLocation }) {
  return (
    <button
      onClick={onEnableLocation}
      className="w-full mb-4 rounded-xl bg-[#362b2c] text-white py-3 font-medium hover:bg-[#4a3a3b] transition"
    >
      Enable Location Access
    </button>
  );
}
