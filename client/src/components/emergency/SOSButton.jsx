export default function SOSButton({ onSOS }) {
  return (
    <button
      onClick={onSOS}
      className="flex items-center gap-2 bg-[#e8b4b7] text-[#171212] font-bold px-6 py-3 rounded-full hover:bg-[#d49ea2] transition-colors"
    >
      <span>SOS</span>
    </button>
  );
}
