export default function LocationInput({
  destination,
  setDestination,
  onFindRoute,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <input
        type="text"
        placeholder="Where do you want to go?"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="flex-1 rounded-xl text-white border-none bg-[#362b2c] h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none"
      />
      <button
        onClick={() => onFindRoute(destination)}
        className="w-full sm:w-auto rounded-full bg-[#e8b4b7] text-[#171212] font-bold px-6 py-3 hover:bg-[#d49ea2] transition-colors"
      >
        Find Routes
      </button>
    </div>
  );
}
