function DotRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative shrink-0 size-[4px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="#ABB2BF" r="2" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function BackgroundDots() {
  return (
    <div className="absolute contents left-[-77px] top-[256px] pointer-events-none" data-name="background">
      <div className="absolute content-stretch flex flex-col items-start justify-between left-[1286px] size-[103px] top-[1390px]">
        {[...Array(5)].map((_, i) => <DotRow key={i} />)}
      </div>
      <div className="absolute content-stretch flex flex-col items-start justify-between left-[-51px] size-[103px] top-[1801px]">
        {[...Array(5)].map((_, i) => <DotRow key={i} />)}
      </div>
      <div className="absolute content-stretch flex flex-col h-[49px] items-start justify-between left-[-31px] top-[401px] w-[109px]">
        {[...Array(4)].map((_, i) => <DotRow key={i} />)}
      </div>
      <div className="absolute border border-[#abb2bf] border-solid left-[-77px] size-[155px] top-[1221px]" />
      <div className="absolute border border-[#abb2bf] border-solid left-[1298px] size-[155px] top-[256px]" />
    </div>
  );
}
