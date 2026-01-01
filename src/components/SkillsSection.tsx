import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, 
  PenTool, 
  Layout, 
  Image, 
  Type, 
  Layers,
  Figma,
  Camera
} from 'lucide-react';

const skills = [
  { name: 'Brand Identity', icon: Palette, color: 'from-violet-500 to-purple-600' },
  { name: 'Illustration', icon: PenTool, color: 'from-pink-500 to-rose-600' },
  { name: 'UI/UX Design', icon: Layout, color: 'from-blue-500 to-cyan-600' },
  { name: 'Photo Editing', icon: Image, color: 'from-amber-500 to-orange-600' },
  { name: 'Typography', icon: Type, color: 'from-emerald-500 to-teal-600' },
  { name: 'Print Design', icon: Layers, color: 'from-fuchsia-500 to-pink-600' },
  { name: 'Figma', icon: Figma, color: 'from-orange-500 to-red-600' },
  { name: 'Photography', icon: Camera, color: 'from-indigo-500 to-violet-600' },
];

const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Figma',
  'Canva Pro',
  'Lightroom',
  'After Effects',
  'Procreate',
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A versatile skill set refined through years of creative exploration 
            and professional experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 text-center card-glow cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-3 transition-all duration-300 group-hover:shadow-lg`}
              >
                <skill.icon className="w-full h-full text-white" />
              </motion.div>
              <h3 className="font-medium text-sm">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl font-medium mb-8">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
