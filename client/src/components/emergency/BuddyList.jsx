export default function BuddyList() {
  const buddies = ["Sophia M.", "Olivia R.", "Isabella L."];

  return (
    <>
      <h3 className="text-white text-lg font-bold mb-2">Nearby Volunteers</h3>
      {buddies.map((buddy, index) => (
        <div
          key={index}
          className="flex items-center bg-[#2a1f20] p-4 rounded-xl mb-2"
        >
          <p className="text-white">{buddy}</p>
        </div>
      ))}
    </>
  );
}
