import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  Code2,
  FolderKanban,
  Database,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'api', label: 'API Demo', icon: Database },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Twitter, href: 'https://twitter.com' },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-900" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900" />
        )}
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", bounce: 0.1 }}
            className="fixed left-0 top-0 h-screen w-64 bg-white shadow-2xl z-40"
          >
            <div className="flex flex-col h-full">
              <div className="p-6 text-center border-b">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">TS</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">TopStar</h2>
                <p className="text-sm text-gray-600">Senior Frontend Engineer</p>
              </div>

              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full px-4 py-2.5 flex items-center gap-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-4 border-t">
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}