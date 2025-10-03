interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const sections = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'live-streams', label: 'Live Darshan', href: '#live-streams' },
    { id: 'temples', label: 'Temples', href: '#temples' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'dashboard', label: 'Dashboard', href: '#dashboard' },
    { id: 'about', label: 'About', href: '#about' }
  ];

  const handleNavClick = (sectionId: string, href: string) => {
    onNavigate(sectionId);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleNavClick(section.id, section.href)}
          className={`hover:text-yellow-300 transition-colors ${
            currentSection === section.id 
              ? 'text-yellow-300 font-semibold' 
              : 'text-white'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}