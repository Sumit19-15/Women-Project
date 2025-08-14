export default function NearbyAssistance() {
  return (
    <>
      <h2 className="text-white text-xl font-bold mb-3">Nearby Assistance</h2>
      <div className="flex items-center justify-between bg-[#2a1f20] p-4 rounded-xl mb-4">
        <div>
          <p className="text-white font-medium">Police Station: Alpha</p>
          <p className="text-[#b4a2a3] text-sm">Call</p>
        </div>
        <button className="rounded-full bg-[#362b2c] text-white px-4 py-2">
          Call
        </button>
      </div>
    </>
  );
}
