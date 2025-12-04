import React, { useState } from 'react';
import { Music, Award, GraduationCap, Briefcase, Users, Camera } from 'lucide-react';

export default function MusicianPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const sections = [
    { id: 'about', label: 'About', icon: Users },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'performances', label: 'Performances', icon: Music },
    { id: 'gallery', label: 'Gallery', icon: Camera }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-orange-800">B. Venkata Vidya Sagar</h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-orange-100 rounded-lg transition-colors"
                >
                  <section.icon size={16} />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="YOUR_IMAGE_URL_HERE" 
              alt="B. Venkata Vidya Sagar" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">B. Venkata Vidya Sagar</h2>
          <p className="text-xl sm:text-2xl text-orange-700 mb-2">Music Instructor</p>
          <p className="text-lg text-gray-600">IIIT (Triple IT) Nuzvid</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* About Section */}
        <section id="about" className="mb-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
            <Users className="text-orange-600" />
            About
          </h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Family Background</h4>
              <p>Son of Sri Bankupalli Sriramachandra Murthy and Smt. Pentamma</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Musical Training</h4>
              <p className="mb-2">Initially underwent music training under his brother-in-law Sri Mavuduru Satyanarayana Sharma.</p>
              <p>Currently continuing advanced musical training under the guidance of Sri Modumudi Sudhakar.</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
            <GraduationCap className="text-orange-600" />
            Education & Grades
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-lg text-gray-800">M.A. in Music</h4>
              <p className="text-gray-600">Acharya Nagarjuna University</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-lg text-gray-800">A Grade - Light Music</h4>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-lg text-gray-800">B-High Grade</h4>
              <p className="text-gray-600">All India Radio, Vijayawada (Carnatic Music & Devotional Music)</p>
            </div>
          </div>
        </section>

        {/* Performances Section */}
        <section id="performances" className="mb-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
            <Music className="text-orange-600" />
            Major Performances
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Sangeeta Sammelanam – 2025</h4>
              <p className="text-gray-700">Performed in Light Music concert under the guidance of Sri Modumudi Sudhakar</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Deepavali Music Concert</h4>
              <p className="text-gray-700">Performed in the esteemed presence of Hon'ble Governor of Andhra Pradesh, Sri Syed Abdul Nazeer, and received appreciation</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Navaratri Music Concert</h4>
              <p className="text-gray-700">Presented in the presence of Sri Chaganti Koteswara Rao, Cultural Advisor to the Government of Andhra Pradesh</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">ETV Paadutha Teeyaga (2011)</h4>
              <p className="text-gray-700">Participated up to Water Final round in the presence of Padma Bhushan Dr. S. P. Balasubrahmanyam</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Shivaratri 2025 Celebrations</h4>
              <p className="text-gray-700">Acted as Narada during celebrations conducted by Sri T. Subbarami Reddy, impressing audiences along with Chairman of Andhra Pradesh Nataka Academy, Sri Gummadi Gopalakrishna</p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="achievements" className="mb-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
            <Award className="text-orange-600" />
            Awards & Recognition
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
              <Award className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Pothukuchi Vamsha Puraskaram</h4>
                <p className="text-sm text-gray-600">Vignana Samithi, Hyderabad</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
              <Award className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Ugadi Puraskaram</h4>
                <p className="text-sm text-gray-600">Samskara Bharati & Sumadhura Kalaniketan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
            <Camera className="text-orange-600" />
            Photo Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(i)}
              >
                <Camera size={32} className="text-orange-700" />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">Click on any placeholder to view. Add your photos by replacing these placeholders.</p>
        </section>

        {/* Current Position */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={32} />
            <h3 className="text-2xl sm:text-3xl font-bold">Current Position</h3>
          </div>
          <p className="text-lg sm:text-xl">Music Instructor at IIIT (Triple IT) Nuzvid</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">B. Venkata Vidya Sagar</p>
          <p className="text-gray-400">Music Instructor | IIIT Nuzvid</p>
          <p className="text-sm text-gray-500 mt-4">© 2025 All Rights Reserved</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg p-4 max-w-3xl w-full">
            <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
              <Camera size={64} className="text-orange-700" />
            </div>
            <p className="text-center text-gray-600 mt-4">Photo {selectedImage} - Replace with actual image</p>
          </div>
        </div>
      )}
    </div>
  );
}