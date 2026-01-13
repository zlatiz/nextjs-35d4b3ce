export default function Footer(): JSX.Element {
  const year = 2011; // preserved from source

  return (
    <footer className="mt-8 bg-secondary/20 border-t border-borderColor py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-heading">John Keane Studios</h4>
          <p className="mt-2 text-muted-foreground">Welcome to John Keane Studios</p>
        </div>

        <div>
          <h5 className="font-heading">Navigation</h5>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li><a href="https://johnkeanestudios.com/html/about">About</a></li>
            <li><a href="https://johnkeanestudios.com/html/discography">Discography</a></li>
            <li><a href="https://johnkeanestudios.com/html/recordingservices">Recording Services</a></li>
            <li><a href="https://johnkeanestudios.com/html/clientlist">Client List</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-heading">Connect</h5>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li><a href="https://johnkeanestudios.com/html/equipment">Equipment</a></li>
            <li><a href="https://johnkeanestudios.com/html/clips">Music Clips</a></li>
            <li><a href="https://johnkeanestudios.com/html/photos">Photos</a></li>
            <li><a href="https://johnkeanestudios.com/html/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="container mt-6 border-t border-borderColor pt-4 text-sm text-muted-foreground">
        <p>Copyright {year}, johnkeanestudios.com</p>
      </div>
    </footer>
  );
}
