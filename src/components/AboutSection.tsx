import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Heart, Zap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.webp';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Palette,
      title: 'Creative Vision',
      description: 'Transforming abstract ideas into compelling visual narratives',
    },
    {
      icon: Heart,
      title: 'Passionate Design',
      description: 'Every project receives dedication and attention to detail',
    },
    {
      icon: Zap,
      title: 'Innovative Approach',
      description: 'Staying ahead of trends while creating timeless designs',
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-[1px] rounded-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Gayathri Menon, graphic designer" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border/50"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-border/50"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              About Me
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-6">
              Bringing ideas to{' '}
              <span className="text-gradient">life</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Hi, I'm Gayathri Menon — a design enthusiast with a growing passion for 
              creating visual experiences that resonate and inspire. I'm currently 
              pursuing my Bachelor of Technology while exploring graphic design 
              alongside my academic journey.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              What began as a personal interest gradually evolved into a creative outlet 
              where I experiment with branding, social media visuals, posters, and 
              digital storytelling. I enjoy translating ideas into clean, aesthetic 
              visuals and believe that good design lies at the intersection of clarity, 
              emotion, and purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              I approach each project with fresh perspectives and attention to detail, 
              aiming to create designs that are both visually compelling and meaningful. 
              I'm constantly learning, exploring new tools, and refining my style with 
              every project I take on.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 card-glow"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
