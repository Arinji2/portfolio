import FoodLandingImage from "@/public/designs/food-landing.png";
import ImageeLandingImage from "@/public/designs/imagee-landing.png";
import NewsLandingImage from "@/public/designs/news-landing.png";
import VibeifyLandingImage from "@/public/designs/vibeify-landing.png";

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
import VibeifyFormImage from "@/public/designs/vibeify-form.png";

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
  imagePosition?: "left" | "right";
};

export const FeaturedData: FeaturedDataType[] = [
  {
    name: "Vibeify",
    accentColor: "#10b981",
    id: "vibeify",
    image: VibeifyLandingImage,
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
    featureName: "Form",
    image: VibeifyFormImage,
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
