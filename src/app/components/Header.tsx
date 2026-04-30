import { Link, useLocation } from 'react-router';
import svgPaths from '../../imports/svg-k5vivsfgoc';

function Logo() {
  return (
    <Link to="/" className="content-stretch flex gap-[8px] items-center relative shrink-0">
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
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="flex items-center justify-between px-[32px] py-[32px] w-full max-w-[1024px] mx-auto">
      <Logo />
      <nav className="content-stretch flex gap-[32px] items-start relative shrink-0">
        <Link
          to="/"
          className="content-stretch flex font-['Fira_Code:Medium',sans-serif] items-start leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap hover:text-white transition-colors"
        >
          <span className="relative shrink-0 text-[#c778dd]">#</span>
          <span className={`relative shrink-0 ${isActive('/') ? 'text-white font-medium' : 'text-[#abb2bf] font-normal'}`}>
            home
          </span>
        </Link>
        <Link
          to="/works"
          className="content-stretch flex font-['Fira_Code:Regular',sans-serif] items-start leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap hover:text-white transition-colors"
        >
          <span className="relative shrink-0 text-[#c778dd]">#</span>
          <span className={`relative shrink-0 ${isActive('/works') ? 'text-white font-medium' : 'text-[#abb2bf] font-normal'}`}>
            works
          </span>
        </Link>
        <Link
          to="/about-me"
          className="content-stretch flex font-['Fira_Code:Regular',sans-serif] items-start leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap hover:text-white transition-colors"
        >
          <span className="relative shrink-0 text-[#c778dd]">#</span>
          <span className={`relative shrink-0 ${isActive('/about-me') ? 'text-white font-medium' : 'text-[#abb2bf] font-normal'}`}>
            about-me
          </span>
        </Link>
        <Link
          to="/contacts"
          className="content-stretch flex font-['Fira_Code:Regular',sans-serif] items-start leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap hover:text-white transition-colors"
        >
          <span className="relative shrink-0 text-[#c778dd]">#</span>
          <span className={`relative shrink-0 ${isActive('/contacts') ? 'text-white font-medium' : 'text-[#abb2bf] font-normal'}`}>
            contacts
          </span>
        </Link>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['Fira_Code:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#abb2bf] text-[16px] whitespace-nowrap">
            EN
          </p>
        </div>
      </nav>
    </header>
  );
}
