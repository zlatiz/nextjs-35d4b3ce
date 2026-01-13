import Image from 'next/image';
import Card from '../components/ui/card';
import Link from 'next/link';

const STUDIO_BANNER = 'https://johnkeanestudios.com/Images/StudioBanner.png';
const KEANE_PHOTO = 'https://johnkeanestudios.com/Images/j.keane2.jpg';
const CONSOLE_IMG = 'https://johnkeanestudios.com/Images/console.JPG';

export default function HomePage() {
  const heroSrc = encodeURI(STUDIO_BANNER);
  const photoSrc = encodeURI(KEANE_PHOTO);
  const consoleSrc = encodeURI(CONSOLE_IMG);

  return (
    <>
      <section className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden shadow-layered">
        <Image src={heroSrc} alt="Studio Banner" fill unoptimized sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-5xl text-white font-heading">Welcome to John Keane Studios</h1>
            <p className="mt-3 text-muted-foreground">"Welcome to John Keane Studios"</p>
            <div className="mt-5">
              <Link href="https://johnkeanestudios.com/html/contact">
                <a className="gradient-btn inline-block">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Card>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-full md:w-1/3 rounded-md overflow-hidden">
                <Image src={photoSrc} alt="Keane Photo" width={600} height={600} unoptimized style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h2 className="text-xl font-heading">About John Keane</h2>
                <p className="mt-2 text-muted-foreground">About John Keane</p>
                <div className="mt-4">
                  <Link href="https://johnkeanestudios.com/html/about">
                    <a className="gradient-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <Card>
              <h3 className="text-lg font-heading">Selected Discography</h3>
              <p className="mt-2 text-muted-foreground">Selected Discography</p>
              <div className="mt-4">
                <Link href="https://johnkeanestudios.com/html/discography">
                  <a className="gradient-btn">Learn More</a>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        <aside>
          <Card>
            <div className="rounded-md overflow-hidden">
              <Image src={consoleSrc} alt="Console" width={600} height={400} unoptimized style={{ objectFit: 'cover' }} />
            </div>
            <div className="mt-4">
              <h3 className="font-heading">Equipment</h3>
              <p className="mt-2 text-muted-foreground">Equipment</p>
              <div className="mt-3">
                <Link href="https://johnkeanestudios.com/html/equipment">
                  <a className="gradient-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </Card>
        </aside>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-heading">Music Clips</h4>
            <p className="mt-2 text-muted-foreground">Music Clips</p>
            <div className="mt-3">
              <Link href="https://johnkeanestudios.com/html/clips">
                <a className="gradient-btn">Listen</a>
              </Link>
            </div>
          </Card>

          <Card>
            <h4 className="font-heading">Photos</h4>
            <p className="mt-2 text-muted-foreground">Photos</p>
            <div className="mt-3">
              <Link href="https://johnkeanestudios.com/html/photos">
                <a className="gradient-btn">View</a>
              </Link>
            </div>
          </Card>

          <Card>
            <h4 className="font-heading">Contact</h4>
            <p className="mt-2 text-muted-foreground">Contact Us</p>
            <div className="mt-3">
              <Link href="https://johnkeanestudios.com/html/contact">
                <a className="gradient-btn">Contact Us</a>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
