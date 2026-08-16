import { motion } from 'framer-motion';
import { Dribbble, Linkedin, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com/jen_says11' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/gayathri-menon-328376274/' },
];

// Behance icon component since it's not in lucide
const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 2.211 1.752 3.029 3.609 3.029 1.833 0 2.722-1.073 3.147-2l1 2zm-9.063-3.958c-.095-1.508-1.034-2.456-2.423-2.456-1.463 0-2.397.883-2.558 2.456h4.981zM9 11.5c0-1.609-1.203-2.5-3-2.5H0v11h6c1.896 0 3.5-1.142 3.5-3.253 0-1.365-.736-2.288-1.836-2.747C8.411 13.547 9 12.688 9 11.5zM2.5 11h3c.828 0 1.5.396 1.5 1.25S6.328 13.5 5.5 13.5h-3V11zm3.5 7h-3.5v-3h3.5c.828 0 1.5.5 1.5 1.5S6.828 18 6 18z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-baseline"
          >
            <span className="font-serif text-xl md:text-2xl font-medium tracking-[0.02em]">Gayathri</span>

            <span className="font-serif text-xl md:text-2xl font-light italic text-gradient ml-1.5">Menon</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-secondary/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 transition-all duration-300 text-muted-foreground hover:text-foreground"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.a
              href="https://www.behance.net/gayathrimenon12"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full bg-secondary/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Behance"
            >
              <BehanceIcon />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Made with 
            <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> 
            by Gayathri Menon
          </p>
        </div>
      </div>
    </footer>
  );
};
