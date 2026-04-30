import svgPaths from '../../imports/svg-k5vivsfgoc';

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
        <div className="absolute inset-[18.75%_18.75%_18.75%_15.63%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.pa8926c0} fill="#ABB2BF" />
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
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
        <div className="absolute inset-[12.5%_12.5%_15.63%_15.63%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <path clipRule="evenodd" d={svgPaths.p2eb2ce00} fill="#ABB2BF" fillRule="evenodd" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#abb2bf] mt-auto">
      <div className="max-w-[1024px] mx-auto px-[32px] py-[32px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="relative shrink-0 size-[16px]">
                <div className="absolute inset-[0_-225%_-225%_0]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
                    <path d={svgPaths.pb5ded80} fill="white" />
                  </svg>
                </div>
              </div>
              <p className="font-['Fira_Code:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
                Revanth
              </p>
              <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] ml-[8px] text-[#abb2bf] text-[16px]">
                revanthofficial08@gmail.com
              </p>
            </div>
            <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] text-[#abb2bf] text-[16px]">
              Web designer and front-end developer
            </p>
          </div>
          <div className="flex flex-col items-end gap-[12px]">
            <h3 className="font-['Fira_Code:Medium',sans-serif] font-medium leading-[normal] text-white text-[24px] whitespace-nowrap">
              Media
            </h3>
            <SocialIcons />
          </div>
        </div>
        <div className="mt-[48px] text-center">
          <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] text-[#abb2bf] text-[16px]">
            © Copyright 2024. Made by Revanth
          </p>
        </div>
      </div>
    </footer>
  );
}
