import React, { useState, useEffect } from 'react';
import { Music, Award, Calendar, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Menu, X, Play } from 'lucide-react';

const MusicianPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data - Replace with your actual information
  const profileData = {
    name: "Your Name",
    tagline: "Professional Musician & Performer",
    bio: "Passionate musician with years of experience performing at various events and music bands. Specializing in [Your Instrument/Genre] with a deep love for creating memorable musical experiences.",
    email: "yourname@email.com",
    phone: "+91 XXXXX XXXXX",
    location: "Bhimavaram, Andhra Pradesh",
    social: {
      instagram: "#",
      facebook: "#",
      youtube: "#"
    }
  };

  const programs = [
    {
      id: 1,
      title: "Summer Music Festival 2024",
      date: "August 15, 2024",
      venue: "City Concert Hall",
      role: "Lead Performer",
      description: "Performed with a 10-member band for an audience of 500+",
      image: "🎸"
    },
    {
      id: 2,
      title: "Cultural Night Celebration",
      date: "July 22, 2024",
      venue: "Community Center",
      role: "Featured Artist",
      description: "Solo performance showcasing traditional and contemporary music",
      image: "🎹"
    },
    {
      id: 3,
      title: "Wedding Band Performance",
      date: "June 10, 2024",
      venue: "Grand Palace",
      role: "Band Member",
      description: "Entertainment for a grand wedding celebration",
      image: "🎵"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best Performer Award",
      year: "2024",
      organization: "State Music Association",
      description: "Recognized for outstanding musical performance"
    },
    {
      id: 2,
      title: "Rising Star in Music",
      year: "2023",
      organization: "Regional Arts Council",
      description: "Awarded for exceptional talent and dedication"
    },
    {
      id: 3,
      title: "Excellence in Live Performance",
      year: "2023",
      organization: "City Cultural Committee",
      description: "Honored for memorable live performances"
    }
  ];

  const skills = ["Vocals", "Guitar", "Keyboard", "Music Composition", "Live Performance", "Band Coordination"];

  const MusicNote = ({ delay }) => (
    <div 
      className="absolute text-purple-300/20 text-4xl animate-pulse"
      style={{
        animation: `float ${3 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      ♪
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        .music-bg {
          background-image: 
            linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
            url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><text x="10" y="50" font-size="40" fill="rgba(255,255,255,0.03)">♪</text><text x="60" y="80" font-size="30" fill="rgba(255,255,255,0.03)">♫</text></svg>');
        }
      `}</style>

      {/* Floating Music Notes Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <MusicNote delay={i * 0.5} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Music className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'programs', 'awards', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-all ${
                    activeSection === section 
                      ? 'text-purple-400 border-b-2 border-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              {['home', 'programs', 'awards', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left capitalize py-2 ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-20 music-bg">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-8xl animate-bounce" style={{ animationDuration: '3s' }}>
                🎵
              </div>
              <div className="absolute -top-4 -right-4 text-6xl">♪</div>
              <div className="absolute -bottom-4 -left-4 text-6xl">♫</div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              {profileData.name}
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 mb-8">{profileData.tagline}</p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">{profileData.bio}</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-2 bg-purple-500/30 border border-purple-400/50 rounded-full text-purple-200 backdrop-blur-sm hover:bg-purple-500/50 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button 
              onClick={() => setActiveSection('programs')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
              style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
            >
              Explore My Journey ♫
            </button>
          </div>
        </section>
      )}

      {/* Programs Section */}
      {activeSection === 'programs' && (
        <section className="min-h-screen px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
                <Calendar className="w-12 h-12 text-purple-400" />
                My Performances
              </h2>
              <p className="text-xl text-gray-400">Musical journeys and memorable events</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div 
                  key={program.id}
                  className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all shadow-2xl hover:shadow-purple-500/50"
                >
                  <div className="text-6xl mb-4 text-center">{program.image}</div>
                  <h3 className="text-2xl font-bold mb-2 text-purple-300">{program.title}</h3>
                  <div className="space-y-2 text-gray-300 mb-4">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {program.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {program.venue}
                    </p>
                    <p className="flex items-center gap-2">
                      <Play className="w-4 h-4" /> {program.role}
                    </p>
                  </div>
                  <p className="text-gray-400 italic">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards Section */}
      {activeSection === 'awards' && (
        <section className="min-h-screen px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
                <Award className="w-12 h-12 text-yellow-400" />
                Awards & Recognition
              </h2>
              <p className="text-xl text-gray-400">Celebrating musical achievements</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award) => (
                <div 
                  key={award.id}
                  className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-6 hover:scale-105 transition-all shadow-2xl hover:shadow-yellow-500/50"
                >
                  <div className="text-6xl mb-4 text-center">🏆</div>
                  <h3 className="text-2xl font-bold mb-2 text-yellow-300">{award.title}</h3>
                  <p className="text-yellow-200 font-semibold mb-2">{award.year}</p>
                  <p className="text-gray-300 mb-3">{award.organization}</p>
                  <p className="text-gray-400 italic">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8 flex items-center justify-center gap-4">
              <Mail className="w-12 h-12 text-purple-400" />
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 mb-12">Let's create beautiful music together!</p>

            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 text-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <a href={`mailto:${profileData.email}`} className="hover:text-purple-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 text-lg">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <a href={`tel:${profileData.phone}`} className="hover:text-purple-400 transition-colors">
                    {profileData.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 text-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href={profileData.social.instagram}
                className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all hover:scale-110"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a 
                href={profileData.social.facebook}
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a 
                href={profileData.social.youtube}
                className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-all hover:scale-110"
              >
                <Youtube className="w-7 h-7" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-lg border-t border-purple-500/30 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Music className="w-5 h-5" />
            © 2024 {profileData.name}. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">Made with ♫ and passion</p>
        </div>
      </footer>
    </div>
  );
};

export default MusicianPortfolio;