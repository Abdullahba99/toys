import { 
  Crown, Sparkles, Coffee, Wand2, Feather, Castle,
  Car, Bot, Bone, Shield, Rocket, Hammer,
  PartyPopper, Megaphone, Trophy, FlaskConical, Palette, Blocks,
  Package
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'crown': Crown,
  'sparkles': Sparkles,
  'coffee': Coffee,
  'wand-2': Wand2,
  'feather': Feather,
  'castle': Castle,
  'car': Car,
  'bot': Bot,
  'bone': Bone,
  'shield': Shield,
  'rocket': Rocket,
  'hammer': Hammer,
  'party-popper': PartyPopper,
  'megaphone': Megaphone,
  'trophy': Trophy,
  'flask-conical': FlaskConical,
  'palette': Palette,
  'blocks': Blocks,
};

interface ProductIconProps {
  iconName: string;
  className?: string;
}

export function ProductIcon({ iconName, className = "w-12 h-12" }: ProductIconProps) {
  const Icon = iconMap[iconName] || Package;
  return <Icon className={className} />;
}
