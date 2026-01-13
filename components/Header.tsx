import Image from 'next/image';
import Link from 'next/link';

const STUDIO_BANNER = 'https://johnkeanestudios.com/Images/StudioBanner.png';
const BRAND = 'John Keane';

export default function Header(): JSX.Element {
  const banner = encodeURI(STUDIO_BANNER);

  return (
    <header className="glass sticky top-4 z-30 mx-4 md:mx-8 p-4 flex items-center justify-between shadow-layered">
      <div className="flex items-center gap-4">
        <div className="w-36 h-10 relative">
          <Image src={banner} alt="John Keane Studios" fill unoptimized style={{ objectFit: 'contain' }} />
        </div>
        <div className="hidden md:block">
          <span className="text-sm font-heading">{BRAND}</span>
        </div>
      </div>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="https://johnkeanestudios.com/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link href="https://johnkeanestudios.com/html/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link href="https://johnkeanestudios.com/html/discography" className="nav-link">Discography</Link>
          </li>
          <li>
            <Link href="https://johnkeanestudios.com/html/recordingservices" className="nav-link">Recording Services</Link>
          </li>
          <li>
            <Link href="https://johnkeanestudios.com/html/contact" className="gradient-btn">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
