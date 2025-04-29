// app/types/product.ts
import { StaticImageData } from "next/image";

// Type for icon names
export type IconName =
  | "battery"
  | "shield"
  | "building"
  | "chip"
  | "sparkles"
  | "cog"
  | "bolt"
  | "sun"
  | "pill"
  | "drill"
  | "xray"
  | "paintbrush"
  | "truck"
  | "flame";

// Define types for spec items
export interface Specification {
  name: string;
  value: string;
}

// Define types for application items
export interface Application {
  name: string;
  description: string;
  icon: IconName;
}

// Define types for extraction process steps
export interface ExtractionStep {
  step: number;
  name: string;
  description: string;
}

// Define the product data structure
export interface ProductData {
  name: string;
  title: string;
  description: string;
  mainImage: string | StaticImageData;
  intro: string;
  specs: Specification[];
  applications: Application[];
  extractionProcess: ExtractionStep[];
}

// Define the structure of the products data object
export interface ProductsDataMap {
  [key: string]: ProductData;
}

// For the grid on the products page
export interface ProductGridItem {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  imagePath?: string; // Keep the original path for reference
  purity: string;
  stock: string;
  color: string;
}

// Props for the product page component
export interface ProductPageProps {
  params: {
    id: string;
  };
}

// Props for metadata generation
export interface MetadataParams {
  params: {
    id: string;
  };
}
