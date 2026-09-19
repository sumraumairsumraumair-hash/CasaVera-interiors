export interface NavItem {
  label: string;
  href: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
  featuredHighlight: string;
  slug: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: 'Compass' | 'LayoutGrid' | 'Sparkles';
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDetails: string;
  dimensions: string;
  materials: string;
  origin: string;
  leadTime: string;
  price: number;
  formattedPrice: string;
  image: string;
  tag?: string;
  inStock: boolean;
  finishes: { name: string; hex: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Bedroom' | 'Dining' | 'Home Office' | 'Minimal Interior' | 'Luxury Apartment';
  location: string;
  year: string;
  area: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  materialsUsed: string[];
  palette: string[];
  clientVision: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  preferredTimeline: string;
  message: string;
}
