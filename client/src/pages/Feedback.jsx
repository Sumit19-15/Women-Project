export default function Feedback() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-start px-2 py-3">
      <div className="w-full max-w-3xl border-4 border-white rounded-2xl p-6 sm:p-8 shadow-xl">
        <h2 class="text-[#171212] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Share Your Route Experience
        </h2>
        <p class="text-[#171212] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Your feedback helps us improve safety for everyone. Please share your
          experience about a specific route.
        </p>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#171212] text-base font-medium leading-normal pb-2">
              Full Name
            </p>
            <input
              placeholder="Enter your full name"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border border-[#e4dddd] bg-white focus:border-[#e4dddd] h-14 placeholder:text-[#82686a] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#171212] text-base font-medium leading-normal pb-2">
              Username
            </p>
            <input
              placeholder="Enter your username"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border border-[#e4dddd] bg-white focus:border-[#e4dddd] h-14 placeholder:text-[#82686a] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#171212] text-base font-medium leading-normal pb-2">
              Feedback about the route
            </p>
            <textarea
              placeholder="Describe your experience on the route"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border border-[#e4dddd] bg-white focus:border-[#e4dddd] min-h-36 placeholder:text-[#82686a] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#171212] text-base font-medium leading-normal pb-2">
              How's the Route ?
            </p>
            <select class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border border-[#e4dddd] bg-white focus:border-[#e4dddd] h-14 bg-[image:--select-button-svg] placeholder:text-[#82686a] p-[15px] text-base font-normal leading-normal">
              <option value="one">Danger</option>
              <option value="two">Alone</option>
              <option value="three">Less Light</option>
            </select>
          </label>
        </div>
        <div class="flex px-4 py-3 justify-center">
          <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] hover:opacity-75 text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span class="truncate">Submit Feedback</span>
          </button>
        </div>
      </div>
    </div>
  );
}
