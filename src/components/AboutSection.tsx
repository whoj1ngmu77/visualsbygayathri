import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Heart, Zap } from 'lucide-react';

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
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent opacity-20"
                  />
                  <p className="font-serif text-2xl text-muted-foreground italic">
                    "Design is thinking made visual"
                  </p>
                </div>
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
              I'm a passionate graphic designer dedicated to creating visual experiences 
              that resonate and inspire. With a keen eye for aesthetics and a love for 
              storytelling, I craft designs that not only look beautiful but also 
              communicate powerful messages.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              From brand identities to social media content, I approach each project 
              with fresh perspectives and meticulous attention to detail. My goal is 
              to help brands and individuals express their unique stories through 
              thoughtful, impactful design.
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
