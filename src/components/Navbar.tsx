import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="bg-gray-100 px-10 py-3.5 sticky top-0 mb-5 z-50">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-md text-gray-500 mb-6"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <MdChevronRight className="w-5 h-5 text-gray-400" />
          </li>
          <li>
            <Link
              href="/courses"
              className="hover:text-blue-600 transition-colors"
            >
              Courses
            </Link>
          </li>
          <li>
            <MdChevronRight className="w-5 h-5 text-gray-400" />
          </li>
          <li className="text-gray-800 font-medium hover:text-blue-600">
            Course Details
          </li>
        </ol>
      </nav>
      <div className="font-medium text-4xl">Starting Seo as your Home</div>
    </header>
  );
}
