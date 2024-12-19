import { Link } from 'react-router-dom';
import { LanguagePicker } from './pickers/LanguagePicker';

export const Navbar = () => {
  return (
    <nav className="font-sans sticky top-0 bg-background-100 shadow-md z-50 p-8">
      <div className='flex justify-between items-center'>
        <div>
          <Link
            to="/"
            className='text-2xl font-bold text-white'>
            <p>Théo Sementa</p>
          </Link>
        </div>

        <div className='flex space-x-6 items-center'>
          <Link
            to="/projects"
            className="text-lg text-white font-semibold">
            <p>Projets</p>
          </Link>
          <Link
            to="/contact"
            className="text-lg text-white font-semibold">
            <p>Contact</p>
          </Link>
          <LanguagePicker />
        </div>
      </div>
    </nav>
  );
};
