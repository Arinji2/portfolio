import FoodLandingImage from "@/public/designs/food-landing.png";
import ImageeLandingImage from "@/public/designs/imagee-landing.png";
import NewsLandingImage from "@/public/designs/news-landing.png";
import SenseLandingImage from "@/public/designs/sense-landing.png";
import VibeifyLandingImage from "@/public/designs/vibeify-landing.png";
import DosLandingImage from "@/public/designs/dos-landing.png";

import DosFeature1Image from "@/public/designs/dos-feature1.png";
import DosFeature2Image from "@/public/designs/dos-feature2.png";
import DosFeature3Image from "@/public/designs/dos-feature3.png";

import FoodFeature1Image from "@/public/designs/food-feature1.png";
import FoodFeature2Image from "@/public/designs/food-feature2.png";

import ImageeAuth1Image from "@/public/designs/imagee-auth1.png";
import ImageeDashboardImage from "@/public/designs/imagee-dashboard.png";
import ImageeFormImage from "@/public/designs/imagee-form.png";

import NewsAuth1Image from "@/public/designs/news-auth1.png";
import NewsFeature1Image from "@/public/designs/news-feature1.png";
import NewsFeature2Image from "@/public/designs/news-feature2.png";
import NewsInfoImage from "@/public/designs/news-info.png";

import VibeifyAuthImage from "@/public/designs/vibeify-auth.png";
import VibeifyFeature1Image from "@/public/designs/vibeify-feature1.png";
import VibeifyFeature2Image from "@/public/designs/vibeify-feature2.png";
import VibeifyFeature3Image from "@/public/designs/vibeify-feature3.png";
import VibeifyFeature4Image from "@/public/designs/vibeify-feature4.png";
import VibeifyFeature5Image from "@/public/designs/vibeify-feature5.png";
import VibeifyFeature6Image from "@/public/designs/vibeify-feature6.png";
import VibeifyFeature7Image from "@/public/designs/vibeify-feature7.png";
import VibeifyFeature8Image from "@/public/designs/vibeify-feature8.png";
import VibeifyFormImage from "@/public/designs/vibeify-form.png";

import SenseAuthImage from "@/public/designs/sense-auth.png";
import SenseFeature1Image from "@/public/designs/sense-feature1.png";
import SenseFeature2Image from "@/public/designs/sense-feature2.png";
import SenseFeature3Image from "@/public/designs/sense-feature3.png";
import SenseFeature4Image from "@/public/designs/sense-feature4.png";
import SenseFeature5Image from "@/public/designs/sense-feature5.png";
import SenseFeature6Image from "@/public/designs/sense-feature6.png";
import SenseFeature7Image from "@/public/designs/sense-feature7.png";
import SenseFeature8Image from "@/public/designs/sense-feature8.png";
import SenseFeature9Image from "@/public/designs/sense-feature9.png";
import SenseFormImage from "@/public/designs/sense-form.png";

import { StaticImageData } from "next/image";
export type FeaturedDataType = {
  name: string;
  accentColor: string;
  id: string;
  image: StaticImageData;
};

export type DesignDataType = {
  projectName: string;
  bgColor: string;
  featureName: string;
  featureNumber?: number;
  image: StaticImageData;
  coverImage?: boolean;
  imagePosition?: "left" | "right" | "center" | "top" | "bottom";
};

export const FeaturedData: FeaturedDataType[] = [
  {
    name: "Vibeify",
    accentColor: "#10b981",
    id: "vibeify",
    image: VibeifyLandingImage,
  },

  {
    name: "DOS",
    accentColor: "#1d6704",
    id: "dos",
    image: DosLandingImage,
  },
  {
    name: "Sense Or Nonsense",
    accentColor: "#a855f7",
    id: "sense",
    image: SenseLandingImage,
  },
  {
    name: "Imagee",
    accentColor: "#22c55e",
    id: "imagee",
    image: ImageeLandingImage,
  },
  {
    name: "News Nest",
    accentColor: "#ef4444",
    id: "news",
    image: NewsLandingImage,
  },
  {
    name: "Gourmet Gusto",
    accentColor: "#f97316",
    id: "food",
    image: FoodLandingImage,
  },
];

export const DesignData: DesignDataType[] = [
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Landing",
    image: VibeifyLandingImage,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Auth",
    image: VibeifyAuthImage,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 1,
    image: VibeifyFeature1Image,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 2,
    image: VibeifyFeature2Image,
    coverImage: true,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 3,
    image: VibeifyFeature3Image,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 4,
    image: VibeifyFeature4Image,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 5,
    image: VibeifyFeature5Image,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 6,
    image: VibeifyFeature6Image,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 7,
    image: VibeifyFeature7Image,
  },
  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Feature",
    featureNumber: 8,
    image: VibeifyFeature8Image,
  },

  {
    projectName: "Vibeify",
    bgColor: "#047857",
    featureName: "Form",
    image: VibeifyFormImage,
  },

  {
    projectName: "DOS",
    bgColor: "#1d6704",
    featureName: "Landing",
    image: DosLandingImage,
  },
  {
    projectName: "DOS",
    bgColor: "#1d6704",
    featureName: "Feature",
    featureNumber: 1,
    image: DosFeature1Image,
  },

  {
    projectName: "DOS",
    bgColor: "#1d6704",
    featureName: "Feature",
    featureNumber: 2,
    image: DosFeature2Image,
  },

  {
    projectName: "DOS",
    bgColor: "#1d6704",
    featureName: "Feature",
    featureNumber: 3,
    image: DosFeature3Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Landing",
    image: SenseLandingImage,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Auth",
    image: SenseAuthImage,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Form",
    image: SenseFormImage,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 1,
    image: SenseFeature1Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 2,
    image: SenseFeature2Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 3,
    image: SenseFeature3Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 4,
    image: SenseFeature4Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 5,
    image: SenseFeature5Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 6,
    image: SenseFeature6Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 7,
    image: SenseFeature7Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 8,
    image: SenseFeature8Image,
  },
  {
    projectName: "Sense Or Nonsense",
    bgColor: "#7e22ce",
    featureName: "Feature",
    featureNumber: 9,
    image: SenseFeature9Image,
  },

  {
    projectName: "Imagee",
    bgColor: "#15803d",
    featureName: "Landing",
    image: ImageeLandingImage,
  },
  {
    projectName: "Imagee",
    bgColor: "#15803d",
    featureName: "Auth",
    featureNumber: 1,
    image: ImageeAuth1Image,
  },
  {
    projectName: "Imagee",
    bgColor: "#15803d",
    featureName: "Dashboard",
    image: ImageeDashboardImage,
  },
  {
    projectName: "Imagee",
    bgColor: "#15803d",
    featureName: "Form",
    image: ImageeFormImage,
  },

  {
    projectName: "News Nest",
    bgColor: "#b91c1c",
    featureName: "Landing",
    image: NewsLandingImage,
  },
  {
    projectName: "News Nest",
    bgColor: "#b91c1c",
    featureName: "Auth",
    featureNumber: 1,
    image: NewsAuth1Image,
  },
  {
    projectName: "News Nest",
    bgColor: "#b91c1c",
    featureName: "Feature",
    featureNumber: 1,
    image: NewsFeature1Image,
    coverImage: true,
    imagePosition: "left",
  },
  {
    projectName: "News Nest",
    bgColor: "#b91c1c",
    featureName: "Feature",
    featureNumber: 2,
    image: NewsFeature2Image,
  },
  {
    projectName: "News Nest",
    bgColor: "#b91c1c",
    featureName: "Info",
    image: NewsInfoImage,
  },

  {
    projectName: "Gourmet Gusto",
    bgColor: "#c2410c",
    featureName: "Landing",
    image: FoodLandingImage,
  },
  {
    projectName: "Gourmet Gusto",
    bgColor: "#c2410c",
    featureName: "Feature",
    featureNumber: 1,
    image: FoodFeature1Image,
  },
  {
    projectName: "Gourmet Gusto",
    bgColor: "#c2410c",
    featureName: "Feature",
    featureNumber: 2,
    image: FoodFeature2Image,
  },
];
