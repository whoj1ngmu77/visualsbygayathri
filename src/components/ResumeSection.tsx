import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    title: 'Graphic Design Intern',
    company: 'SpectoV',
    period: 'Jan 2026 - Jun 2026',
    description: 'Client-facing design across social media and brand marketing. Produced platform-ready posts aligned to an established brand identity, developed brand visibility assets from written briefs, and iterated directly with the client through feedback rounds.',
  },
  {
    title: 'Design Team Member',
    company: 'University Clubs & Cultural Societies, VIT Chennai',
    period: '2024 - Present',
    description: 'Design lead on event campaign identities for Thanima and the Office of Student Welfare - posters, social announcements and promotional carousels. Built bilingual English/Malayalam layouts and recurring templates that kept branding consistent across event series.',
  },
  {
    title: 'Freelance Designer',
    company: 'Independent Clients',
    period: '2024 - Present',
    description: 'Social media graphics, posters and brand assets on a project basis. Manage the full engagement independently - scoping the brief, presenting concepts, revising and handing off final files.',
  },
];

const education = [
  {
    title: 'B.Tech, Electrical and Computer Science Engineering',
    institution: 'Vellore Institute of Technology, Chennai',
    period: '2024 - 2028',
    description: 'Engineering grounding in problem-solving and systems thinking, which shapes how I approach structure and hierarchy in design work.',
  },
  {
    title: 'Google UX Design Professional Certificate',
    institution: 'Coursera',
    period: '2026',
    description: 'User research, wireframing, prototyping, usability testing and accessibility, completed with a capstone project on a real-world design problem.',
  },
];

export const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Background
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            A journey of continuous learning and creative growth.
          </p>
          
          {/* Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium glow-effect transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-primary/80 mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-medium">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-accent/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-accent" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-accent/80 mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
