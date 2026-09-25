import { Stethoscope, Sparkles, CircleDot, ShieldPlus, ScanLine, Smile, WandSparkles, Siren } from "lucide-react";

export const treatments = [
 {slug:"general-dentistry",title:"General Dentistry",short:"Routine exams and personalized care to support lasting oral health.",icon:Stethoscope},
 {slug:"dental-cleaning",title:"Dental Cleaning",short:"Professional cleaning designed to support healthy teeth and gums.",icon:Sparkles},
 {slug:"teeth-whitening",title:"Teeth Whitening",short:"Dentist-guided options for a brighter, refreshed-looking smile.",icon:WandSparkles},
 {slug:"dental-implants",title:"Dental Implants",short:"Explore long-term options for replacing missing teeth after assessment.",icon:CircleDot},
 {slug:"root-canal",title:"Root Canal Treatment",short:"Care intended to address infection inside a tooth and help preserve it.",icon:ShieldPlus},
 {slug:"orthodontics",title:"Orthodontics / Braces",short:"Personalized alignment options for function, comfort and confidence.",icon:ScanLine},
 {slug:"cosmetic-dentistry",title:"Cosmetic Dentistry",short:"Thoughtful treatment planning to enhance the appearance of your smile.",icon:Smile},
 {slug:"emergency-dentistry",title:"Emergency Dentistry",short:"Prompt guidance for severe pain, swelling, trauma or urgent concerns.",icon:Siren},
] as const;
export type Treatment = (typeof treatments)[number];
