import React from 'react';
// Assuming these imports are correct for your project structure
import cert1 from '@/assets/cert1.jpeg';
import cert2 from '@/assets/cert2.png';
import cert3 from '@/assets/cert3.png';
import cert4 from '@/assets/cert4.jpg';
import cert5 from '@/assets/cert5.png';
import cert6 from '@/assets/cert6.jpg';

const logos = [cert1, cert2, cert3, cert4, cert5, cert6];

// Renamed component for better semantic meaning (no longer a Marquee)
const CertificationsRow = () => {
  return (
    // Outer container: sets background and padding
    <div className="py-2 bg-background">
      {/* Inner container: 
        - 'flex' to arrange children in a row
        - 'justify-center' to center the logos horizontally
        - 'flex-wrap' allows logos to wrap to the next line on smaller screens if they don't fit
        - 'gap-8' for spacing between the logo images
      */}
      <div className="flex justify-center items-center flex-wrap gap-12 px-4">
        {logos.map((logo, index) => (
          // Individual logo container
          <div key={index} className="flex-shrink-0">
            <img 
              src={logo} 
              alt={`Certification logo ${index + 1}`} 
              // Increased size: h-24 on small screens, h-32 on medium screens and up
              className="h-24 md:h-32 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default CertificationsRow;
