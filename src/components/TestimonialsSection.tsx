import { useState } from 'react';
import { Star } from 'lucide-react';
import { Testimonial, sampleTestimonials } from '../data/sampleData';

const TestimonialsSection = () => {
  const [testimonials] = useState<Testimonial[]>(sampleTestimonials);

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Client Testimonials
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="gaming-card text-center group">
              {/* 5-Star Rating */}
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={20} 
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              {/* Client Name */}
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-6">
                {testimonial.client_name}
              </h3>
              
              {/* Testimonial Image */}
              <div className="rounded-lg overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-300">
                <img 
                  src={testimonial.image_url}
                  alt={`Testimonial from ${testimonial.client_name}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;