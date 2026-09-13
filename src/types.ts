export type PageId = 'home' | 'women' | 'men' | 'kids' | 'cosmetics' | 'contact';

export interface ProductItem {
  id: string;
  title: string;
  category: 'women' | 'men' | 'kids' | 'cosmetics';
  subCategory: string;
  ageGroup?: '0-2' | 'toddler' | 'pre-teen'; // for kids
  tags: string[];
  image: string;
  secondaryImage?: string;
  gallery?: string[];
  altText: string;
  description: string;
  isFreshArrival?: boolean;
  featuredBadge?: string;
  colors?: string[];
  sizes?: string[];
  fabric?: string;
  alterationNotes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  review: string;
  location: string;
  verified: boolean;
  avatarColor: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  hinglishSubtitle: string;
  description: string;
  tag: string;
  ctaText: string;
  ctaPage: PageId;
  image: string;
  altText: string;
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  rating: number;
  reviewCount: number;
  hours: {
    days: string;
    timings: string;
    note?: string;
  }[];
  landmarks: {
    title: string;
    description: string;
  }[];
}
