import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">JobBoard</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Jobs
            </Link>
            <Link to="/companies" className="text-sm font-medium transition-colors hover:text-primary">
              Companies
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/post-job">
            <Button variant="default">Post a Job</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;