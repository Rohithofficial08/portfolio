import svgPaths from '../../imports/svg-k5vivsfgoc';

function SocialIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
        <div className="absolute inset-[18.75%_18.75%_18.75%_15.63%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.pa8926c0} fill="#ABB2BF" />
          </svg>
        </div>
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
        <div className="absolute inset-[12.5%_12.5%_15.63%_15.63%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <path clipRule="evenodd" d={svgPaths.p2eb2ce00} fill="#ABB2BF" fillRule="evenodd" />
          </svg>
        </div>
      </a>
      <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
        <div className="absolute inset-[18.75%_28.13%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p9d5ac00} fill="#ABB2BF" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export function SidebarMedia() {
  return (
    <div className="fixed left-[17px] top-0 bg-[#282c33] content-stretch flex flex-col gap-[8px] items-center" data-name="media">
      <div className="flex h-[191px] items-center justify-center relative shrink-0 w-px">
        <div className="flex-none rotate-90">
          <div className="h-px relative w-[191px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191 1">
              <path clipRule="evenodd" d="M191 1H0V0H191V1Z" fill="#ABB2BF" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <SocialIcons />
    </div>
  );
}
