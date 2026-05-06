"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { 
  FaStar, 
  FaCircleCheck, 
  FaArrowLeft, 
  FaDumbbell, 
  FaFlask, 
  FaBolt, 
  FaShieldHeart,
  FaEnvelope
} from "react-icons/fa6";

interface NutritionRow {
  label: string;
  per40g: string;
  per100g: string;
  rda: string;
}

interface VitaminItem {
  label: string;
  value: string;
}

interface ProductSpecs {
  size: string[];
  flavours: string[];
  servings: number;
  servingSize: string;
}

interface Product {
  name: string;
  category: string;
  reviews: number;
  rating: number;
  overview: string[];
  images?: string[];
  description: string;
  specs: ProductSpecs;
  nutrition: NutritionRow[];
  vitamins: VitaminItem[];
  extraTitle?: string;
}

const productData: Record<string, Product> = {
  "concentrate": {
    name: "Concentrate Whey Protein",
    category: "PROTEIN",
    reviews: 10,
    rating: 5,
    overview: [
      "Constitute Glutamine Precursor & BCAA",
      "100% Protein From Whey",
      "Repair Muscle Tissues",
      "Enhance Muscle Growth"
    ],
    images: ["/Concentrate.png", "/Concentrate-2.png", "/Concentrate-3.png"],
    description: "BioMolds Health Nutrition Concentrate is a high-quality whey protein designed for athletes and bodybuilders who demand the best in muscle recovery and growth. Our formula is enriched with essential amino acids and digestive enzymes for maximum absorption.",
    specs: {
      size: ["2 KG", "4 KG"],
      flavours: ["Gourmet Chocolate", "Vanilla Cream", "Strawberry Blast"],
      servings: 50,
      servingSize: "40g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "120.26", per100g: "304.11", rda: "6.01%" },
      { label: "Protein (g)", per40g: "24", per100g: "60.80", rda: "44.44%" },
      { label: "Total Carbohydrate (g)", per40g: "4.94", per100g: "12.37", rda: "**" },
      { label: "Total Sugar (g)", per40g: "3.03", per100g: "7.58", rda: "**" },
      { label: "Total Fat (g)", per40g: "0.50", per100g: "1.27", rda: "0.74%" },
      { label: "Sodium (mg)", per40g: "28.9", per100g: "72.4", rda: "1.44%" },
    ],
    vitamins: [
      { label: "Vitamin A (mcg)", value: "168.74" },
      { label: "Vitamin D (mcg)", value: "2.34" },
      { label: "Vitamin E (mg)", value: "2.5" },
      { label: "Vitamin C (mg)", value: "12.5" },
    ]
  },
  "pro-concentrate": {
    name: "Pro-Concentrate Whey Protein",
    category: "PROTEIN",
    reviews: 10,
    rating: 5,
    overview: [
      "25g Protein Per Serving",
      "High Biological Value",
      "Complete Amino Acid Profile",
      "Easy Mixability"
    ],
    images: ["/Pro-Concentrate.png", "/Pro-Concentrate-2.png", "/Pro-Concentrate-3.png"],
    description: "Pro-Concentrate is our advanced protein formula designed for serious athletes. Mix one scoop (36gm) with 250-300ml of water or milk. Note: Diabetic, pregnant and breastfeeding women should only use this product upon the advice of a qualified licensed physician or dietician.",
    specs: {
      size: ["2 KG", "4 KG"],
      flavours: ["Gourmet Chocolate", "Vanilla Cream"],
      servings: 56,
      servingSize: "36g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "119.51", per100g: "332.24", rda: "5.97%" },
      { label: "Protein (g)", per40g: "25", per100g: "69.50", rda: "46.29%" },
      { label: "Total Carbohydrate (g)", per40g: "3.55", per100g: "9.87", rda: "**" },
      { label: "Total Sugar (g)", per40g: "2.41", per100g: "6.72", rda: "**" },
      { label: "Total Fat (g)", per40g: "0.59", per100g: "1.64", rda: "0.88%" },
      { label: "Sodium (mg)", per40g: "28.18", per100g: "78.30", rda: "1.40%" },
    ],
    vitamins: [
      { label: "Vitamin A (mcg)", value: "151.87" },
      { label: "Vitamin D (mcg)", value: "2.10" },
      { label: "Vitamin E (mg)", value: "2.25" },
      { label: "Vitamin C (mg)", value: "11.25" },
      { label: "Vitamin K (mcg)", value: "13.5" },
      { label: "Vitamin B12 (mcg)", value: "0.22" },
    ]
  },
  "absolute-whey": {
    name: "Absolute Whey Protein",
    category: "PROTEIN",
    reviews: 10,
    rating: 5,
    overview: [
      "30g Protein & 6.9g BCAA",
      "Lean Muscle Building",
      "Zero Carbs & Zero Fat",
      "Ripped Muscles Formula"
    ],
    images: ["/Absolute.png", "/Absolute-2.png", "/Absolute-3.png"],
    description: "Absolute Whey is the ultimate protein for those looking to build lean, ripped muscle without any extra carbs or fats. This pure formula delivers a massive 30g of protein and 6.9g of BCAAs per scoop, making it one of the most potent lean muscle builders available.",
    specs: {
      size: ["2 KG", "4 KG"],
      flavours: ["Gourmet Chocolate", "Vanilla Cream", "Cafe Mocha"],
      servings: 58,
      servingSize: "34.6g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "125.39", per100g: "362.50", rda: "6.27%" },
      { label: "Protein (g)", per40g: "30", per100g: "86.70", rda: "55.6%" },
      { label: "Total Carbohydrate (g)", per40g: "0.65", per100g: "1.90", rda: "**" },
      { label: "Total Sugar (g)", per40g: "0.29", per100g: "0.86", rda: "**" },
      { label: "Total Fat (g)", per40g: "0.31", per100g: "0.90", rda: "0.46%" },
      { label: "Sodium (mg)", per40g: "133.55", per100g: "386.00", rda: "6.67%" },
    ],
    extraTitle: "Amino Acid Profile & Enzymes",
    vitamins: [
      { label: "BCAA (g)", value: "6.9" },
      { label: "Isoleucine (g)", value: "1.77" },
      { label: "Leucine (g)", value: "3.37" },
      { label: "Valine (g)", value: "1.81" },
      { label: "Lysine (g)", value: "2.89" },
      { label: "Papain (mg)", value: "50" },
      { label: "Alpha Amylase (mg)", value: "50" },
      { label: "Gluco Amylase (mg)", value: "25" },
    ]
  },
  "turbo-whey": {
    name: "Turbo Whey Protein",
    category: "PROTEIN",
    reviews: 10,
    rating: 5,
    overview: [
      "23g Protein & 5g EAA",
      "4g Glutamine Precursor",
      "2.4g Creatine Monohydrate",
      "Gluten & Hormone Free"
    ],
    description: "Turbo Whey is scientifically designed to deliver 23g of 100% whey protein per 40g of serving. Enriched with 4.2g L-Glutamic Acid and 2.4g of Creatine Monohydrate, it stimulates muscle building, energy, and rapid recovery. Perfect for athletes and fitness enthusiasts.",
    specs: {
      size: ["2 lbs", "4.4 lbs", "8.8 lbs"],
      flavours: ["Dream Chocolate", "Strawberry Charge", "Mocha Cappuccino", "Kulfi Treat"],
      servings: 22,
      servingSize: "40g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "115.0", per100g: "287.5", rda: "5.75%" },
      { label: "Protein (g)", per40g: "23", per100g: "57.5", rda: "42.5%" },
      { label: "Total Carbohydrate (g)", per40g: "4.5", per100g: "11.25", rda: "**" },
      { label: "L-Glutamic Acid (g)", per40g: "4.2", per100g: "10.5", rda: "**" },
      { label: "Creatine Monohydrate (g)", per40g: "2.4", per100g: "6.0", rda: "**" },
      { label: "Total Fat (g)", per40g: "1.2", per100g: "3.0", rda: "1.5%" },
    ],
    extraTitle: "Performance Matrix",
    vitamins: [
      { label: "EAA (g)", value: "5" },
      { label: "L-Glutamic Acid (g)", value: "4.2" },
      { label: "Creatine (g)", value: "2.4" },
      { label: "L-Leucine (g)", value: "High" },
    ]
  },
  "power-whey": {
    name: "Power Whey Protein",
    category: "PROTEIN",
    reviews: 10,
    rating: 5,
    overview: [
      "24g Protein Per 31g Scoop",
      "5g BCAA & 11g EAA",
      "Sugar & Gluten Free",
      "Added Digestive Enzymes"
    ],
    description: "Power Whey is a premium protein source imported from the USA, designed for unbeatable strength and peak athletic performance. Delivering 24g of protein and a massive 11g of EAAs per scoop, it provides the essential building blocks for lean muscle mass and quick recovery.",
    specs: {
      size: ["2 KG"],
      flavours: ["American Ice Cream", "Chocolate Cake"],
      servings: 64,
      servingSize: "31g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "112.0", per100g: "361.3", rda: "5.6%" },
      { label: "Protein (g)", per40g: "24", per100g: "77.4", rda: "44.4%" },
      { label: "BCAA (g)", per40g: "5", per100g: "16.1", rda: "**" },
      { label: "EAA (g)", per40g: "11", per100g: "35.5", rda: "**" },
      { label: "Glutamic Acid (g)", per40g: "4", per100g: "12.9", rda: "**" },
      { label: "Total Fat (g)", per40g: "0.2", per100g: "0.6", rda: "0.3%" },
    ],
    extraTitle: "Anabolic Profile",
    vitamins: [
      { label: "EAA (g)", value: "11" },
      { label: "BCAA (g)", value: "5" },
      { label: "Glutamic Acid (g)", value: "4" },
      { label: "Enzymes", value: "Pure Veg" },
    ]
  },
  "nitra-whey": {
    name: "Nitra Whey Protein",
    category: "PROTEIN",
    reviews: 10,
    rating: 5,
    overview: [
      "Supports Testosterone Level",
      "Rosehip Extract for Joint Health",
      "Ashwagandha & Safed Musli",
      "3g Creatine Monohydrate"
    ],
    images: ["/Nitra.png", "/Nitra-2.png", "/Nitra-3.png"],
    description: "Nitra Whey is a specialized protein formula that goes beyond muscle building. Enriched with a potent T-Boost blend (Ashwagandha, Safed Musli, Tribulus) and Rosehip extract for joint health, it's designed for athletes who need maximum strength, improved recovery, and overall hormonal balance.",
    specs: {
      size: ["2 KG", "4 KG"],
      flavours: ["Gourmet Chocolate", "Cafe Mocha", "Vanilla"],
      servings: 60,
      servingSize: "33.2g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "129.46", per100g: "389.35", rda: "6.47%" },
      { label: "Protein (g)", per40g: "25", per100g: "75.10", rda: "46.29%" },
      { label: "Total Carbohydrate (g)", per40g: "3.99", per100g: "12.02", rda: "**" },
      { label: "Creatine Monohydrate (g)", per40g: "3", per100g: "9.05", rda: "**" },
      { label: "T-Boost Blend (mg)", per40g: "700", per100g: "2108", rda: "**" },
      { label: "Rosehip Extract (mg)", per40g: "500", per100g: "1505", rda: "**" },
    ],
    extraTitle: "T-Boost & Joint Support Matrix",
    vitamins: [
      { label: "T-Boost Blend", value: "700mg" },
      { label: "Rosehip Extract", value: "500mg" },
      { label: "Creatine", value: "3g" },
      { label: "Ashwagandha", value: "Included" },
      { label: "Safed Musli", value: "Included" },
      { label: "Calcium", value: "500mg" },
    ]
  },
  "advanced-gainer": {
    name: "Advanced Weight Gainer",
    category: "GAINER",
    reviews: 10,
    rating: 5,
    overview: [
      "23g Protein per 100g",
      "4g Creatine & 2g Fiber",
      "3:1 Carb to Protein Ratio",
      "4 Protein Sources"
    ],
    description: "Advanced Weight Gainer is a calorie-dense mass gainer designed for individuals with high BMR or those struggling to gain weight. With 376 kcal per 100g and a scientifically balanced 3:1 carb to protein ratio, it provides the extra energy and building blocks needed to pump up muscles and increase mass significantly.",
    specs: {
      size: ["2 lbs", "5 lbs", "10 lbs"],
      flavours: ["Chocolate Blast", "Banana Cream", "Vanilla"],
      servings: 20,
      servingSize: "100g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "376.0", per100g: "376.0", rda: "18.8%" },
      { label: "Protein (g)", per40g: "23", per100g: "23", rda: "42.5%" },
      { label: "Total Carbohydrate (g)", per40g: "69", per100g: "69", rda: "**" },
      { label: "Creatine (g)", per40g: "4", per100g: "4", rda: "**" },
      { label: "Dietary Fiber (g)", per40g: "2", per100g: "2", rda: "**" },
      { label: "Total Fat (g)", per40g: "2.5", per100g: "2.5", rda: "3.1%" },
    ],
    extraTitle: "Mass Building Formula",
    vitamins: [
      { label: "Carb:Protein", value: "3:1" },
      { label: "Creatine", value: "4g" },
      { label: "Protein Sources", value: "4 Types" },
      { label: "Fiber", value: "2g" },
      { label: "Enzymes", value: "Included" },
      { label: "Minerals", value: "Essential" },
    ]
  },
  "anabolic-gainer": {
    name: "Anabolic Mass Gainer",
    category: "GAINER",
    reviews: 10,
    rating: 5,
    overview: [
      "30% Protein with Creapure®",
      "HMB, DAA & Ashwagandha",
      "Enhances Natural Testosterone",
      "Lean Muscle & Strength"
    ],
    description: "Anabolic Mass Gainer is a scientifically formulated muscle builder designed to enhance natural testosterone and strength. Powered with 80% Whey Protein Concentrate, HMB, DAA, and Taurine, it spare lean muscle mass and prevents damage during workouts while ensuring rapid recovery.",
    specs: {
      size: ["2 KG", "5 KG"],
      flavours: ["Chocolate Cake", "American Ice Cream"],
      servings: 20,
      servingSize: "100g"
    },
    nutrition: [
      { label: "Energy (kcal)", per40g: "385.0", per100g: "385.0", rda: "19.2%" },
      { label: "Protein (g)", per40g: "30", per100g: "30", rda: "55.5%" },
      { label: "Total Carbohydrate (g)", per40g: "60", per100g: "60", rda: "**" },
      { label: "Creapure® (g)", per40g: "3", per100g: "3", rda: "**" },
      { label: "Ashwagandha (mg)", per40g: "50", per100g: "50", rda: "**" },
      { label: "HMB (mg)", per40g: "500", per100g: "500", rda: "**" },
    ],
    extraTitle: "Anabolic Recovery Matrix",
    vitamins: [
      { label: "Protein Type", value: "Whey 80%" },
      { label: "Creapure®", value: "Trademarked" },
      { label: "HMB", value: "500mg" },
      { label: "Ashwagandha", value: "50mg" },
      { label: "DAA", value: "Included" },
      { label: "Enzymes", value: "Pure Veg" },
    ]
  },
  "lsteam": {
    name: "LSteam Pre-Workout",
    category: "PRE WORKOUT",
    reviews: 10,
    rating: 5,
    overview: [
      "2000mg L-Citrulline",
      "Adaptogenic Energy",
      "No Caffeine Crash",
      "Antioxidant Support"
    ],
    description: "LSteam is a high-performance pre-workout formulated to improve energy, focus, and strength. Featuring a unique L-Theanine and Caffeine combination, it provides sharp mental alertness without the crash. Powered by 2000mg L-Citrulline and Grape Seed Extract for superior pumps and recovery.",
    specs: {
      size: ["250g", "500g"],
      flavours: ["Blue Razz", "Fruit Punch", "Watermelon"],
      servings: 50,
      servingSize: "5g"
    },
    nutrition: [
      { label: "L-Citrulline (mg)", per40g: "2000", per100g: "40000", rda: "**" },
      { label: "Beta-Alanine (mg)", per40g: "1200", per100g: "24000", rda: "**" },
      { label: "Caffeine (mg)", per40g: "200", per100g: "4000", rda: "**" },
      { label: "Betaine Anhydrous (mg)", per40g: "500", per100g: "10000", rda: "**" },
      { label: "Vitamin C (mg)", per40g: "40", per100g: "800", rda: "100%" },
      { label: "Energy (kcal)", per40g: "5.0", per100g: "100", rda: "0.2%" },
    ],
    extraTitle: "Nitro & Focus Matrix",
    vitamins: [
      { label: "L-Citrulline", value: "2000mg" },
      { label: "Grape Seed Ext.", value: "95%" },
      { label: "L-Theanine", value: "Included" },
      { label: "Beta-Alanine", value: "Included" },
      { label: "Piper Nigrum", value: "Bio-Boost" },
      { label: "Antioxidants", value: "Vit C, B6" },
    ]
  },
  "hsteam": {
    name: "HSteam Pre-Workout",
    category: "PRE WORKOUT",
    reviews: 10,
    rating: 5,
    overview: [
      "2500mg Citrulline",
      "2500mg Beta-Alanine",
      "Vascular Muscle Pumps",
      "Extreme Mental Focus"
    ],
    description: "HSteam is an ultra-high intensity pre-workout designed for enlarged vascular muscle pumps and maximum training capacity. With a massive 2500mg of both Citrulline and Beta-Alanine per scoop, it relaxes blood vessels to improve blood flow and prevents premature fatigue during heavy lifting.",
    specs: {
      size: ["250g", "500g"],
      flavours: ["Orange Burst", "Green Apple", "Grape Punch"],
      servings: 31,
      servingSize: "8g"
    },
    nutrition: [
      { label: "Citrulline (mg)", per40g: "2500", per100g: "31250", rda: "**" },
      { label: "Beta-Alanine (mg)", per40g: "2500", per100g: "31250", rda: "**" },
      { label: "L-Arginine AKG (mg)", per40g: "500", per100g: "6250", rda: "**" },
      { label: "Energy (kcal)", per40g: "8.0", per100g: "100", rda: "0.4%" },
      { label: "Protein Breakdown", per40g: "Reduced", per100g: "-", rda: "**" },
      { label: "Vascularity", per40g: "Enhanced", per100g: "-", rda: "**" },
    ],
    extraTitle: "Endurance & Vasodilation Matrix",
    vitamins: [
      { label: "Citrulline", value: "2500mg" },
      { label: "Beta-Alanine", value: "2500mg" },
      { label: "L-Arginine AKG", value: "500mg" },
      { label: "Mental Focus", value: "Extreme" },
      { label: "Nitric Oxide", value: "Maximum" },
      { label: "Fatigue Control", value: "High" },
    ]
  },
  "recharging": {
    name: "Recharging Supplement",
    category: "WORKOUT ESSENTIALS",
    reviews: 10,
    rating: 5,
    overview: [
      "Rapid Electrolyte Replenishment",
      "Intra-Workout Recovery",
      "Reduces Muscle Fatigue",
      "Essential Vitamin Support"
    ],
    description: "Recharging is an advanced intra-workout supplement designed to replenish essential electrolytes and support muscle recovery while you train. Formulated for athletes who demand sustained endurance, it helps maintain hydration and prevents the mid-workout dip in performance.",
    specs: {
      size: ["300g", "600g"],
      flavours: ["Lemon Lime", "Blueberry", "Mango Mix"],
      servings: 30,
      servingSize: "10g"
    },
    nutrition: [
      { label: "Sodium (mg)", per40g: "250", per100g: "2500", rda: "12.5%" },
      { label: "Potassium (mg)", per40g: "100", per100g: "1000", rda: "2.1%" },
      { label: "Magnesium (mg)", per40g: "50", per100g: "500", rda: "11.9%" },
      { label: "Vitamin C (mg)", per40g: "60", per100g: "600", rda: "150%" },
      { label: "Energy (kcal)", per40g: "2.0", per100g: "20", rda: "0.1%" },
    ],
    extraTitle: "Hydration & Recovery Matrix",
    vitamins: [
      { label: "Electrolytes", value: "Essential" },
      { label: "Recovery", value: "Intra-Workout" },
      { label: "Sugar Free", value: "Yes" },
      { label: "Hydration", value: "Rapid" },
      { label: "Muscle Fatigue", value: "Reduced" },
      { label: "Vitamins", value: "C, B-Complex" },
    ]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productData[slug];
  
  const [currentImg, setCurrentImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-black mb-4">Product Not Found</h1>
          <Link href="/products" className="text-cyan-500 flex items-center justify-center gap-2">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/products" className="text-sm text-gray-400 hover:text-cyan-500 flex items-center gap-2 transition-colors">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Product Image / Carousel */}
          <div className="space-y-4">
            <FadeUp className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center group">
              {product.images && product.images.length > 0 ? (
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  <Image 
                    src={product.images[currentImg]} 
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {product.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => setCurrentImg((prev) => (prev === 0 ? (product.images!.length - 1) : prev - 1))}
                        className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-black hover:bg-white"
                      >
                        <FaArrowLeft />
                      </button>
                      <button 
                        onClick={() => setCurrentImg((prev) => (prev === (product.images!.length - 1) ? 0 : prev + 1))}
                        className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-black hover:bg-white rotate-180"
                      >
                        <FaArrowLeft />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center px-8">
                  <div className="w-64 h-80 bg-black rounded-2xl mx-auto mb-8 relative flex items-center justify-center text-white p-6 shadow-2xl">
                      <div className="border-2 border-white/20 absolute inset-2 rounded-xl"></div>
                      <div className="text-center">
                        <h4 className="text-xs tracking-widest uppercase mb-2">BioMolds</h4>
                        <h2 className="text-4xl font-bold mb-4 tracking-tighter">WHEY</h2>
                        <p className="text-[10px] text-gray-400">PREMIUM FORMULA</p>
                      </div>
                  </div>
                </div>
              )}
            </FadeUp>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <FadeUp delay={100} className="flex gap-4">
                {product.images.map((img: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`relative w-24 h-24 rounded-xl border-2 overflow-hidden transition-all ${currentImg === idx ? 'border-cyan-500 shadow-md' : 'border-gray-100 opacity-60 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </FadeUp>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-8">
            <FadeUp>
              <div className="flex items-center gap-2 text-cyan-500 font-semibold text-sm mb-2 uppercase tracking-widest">
                <FaDumbbell /> {product.category}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-black font-medium mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <span className="text-sm text-gray-400">({product.reviews} Customer Reviews)</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {product.overview.map((item: string, i: number) => (
                  <span key={i} className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-full text-sm border border-gray-100">
                    <FaCircleCheck className="text-cyan-500" /> {item}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 leading-relaxed text-lg mb-8">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold text-black uppercase mb-4 tracking-widest">Size Options</h4>
                  <div className="flex gap-3">
                    {product.specs.size.map((s: string) => (
                      <button key={s} className="px-5 py-2 border-2 border-gray-200 rounded-xl text-sm font-semibold hover:border-cyan-500 transition-all text-black">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black uppercase mb-4 tracking-widest">Select Flavour</h4>
                  <div className="flex gap-3 flex-wrap">
                    {product.specs.flavours.map((f: string) => (
                      <button key={f} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-semibold hover:border-cyan-500 transition-all text-black">
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <Link href="/#contact" className="flex-grow bg-cyan-500 text-white py-4 rounded-2xl font-bold hover:bg-cyan-400 transition-all shadow-lg flex items-center justify-center gap-2">
                   <FaEnvelope /> Request Wholesale Quote
                 </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Nutritional Information Table */}
        <FadeUp delay={200} className="mt-20">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gray-50 p-8 border-b border-gray-100">
               <h2 className="font-serif text-3xl text-black font-medium mb-2">Nutritional Information</h2>
               <p className="text-gray-500">Serving size: 1 Scoop ({product.specs.servingSize} Approx.) | Total Servings Per Container: {product.specs.servings}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="p-6 text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">Approximate Values</th>
                    <th className="p-6 text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">Per Serving</th>
                    <th className="p-6 text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">Per 100g</th>
                    <th className="p-6 text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">%*RDA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {product.nutrition.map((row, i) => (
                    <tr key={i} className="hover:bg-cyan-pale/30 transition-colors">
                      <td className="p-6 text-sm text-gray-700 font-medium">{row.label}</td>
                      <td className="p-6 text-sm text-gray-600">{row.per40g}</td>
                      <td className="p-6 text-sm text-gray-600">{row.per100g}</td>
                      <td className="p-6 text-sm text-cyan-600 font-bold">{row.rda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-gray-50/30">
               <h4 className="text-sm font-bold text-black uppercase mb-6 tracking-widest">{product.extraTitle || "Added Vitamins & Minerals"}</h4>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {product.vitamins.map((v: VitaminItem, i: number) => (
                   <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                      <span className="text-xs text-gray-500 font-medium">{v.label}</span>
                      <span className="text-sm font-bold text-cyan-600">{v.value}</span>
                   </div>
                 ))}
               </div>
               <p className="text-[10px] text-gray-400 mt-8 leading-relaxed uppercase tracking-tighter">
                 * %RDA is calculated based on ICMR guidelines for a moderate active adult. 
                 ** RDA not established.
               </p>
            </div>
          </div>
        </FadeUp>

        {/* Benefits Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
           <FadeUp delay={300} className="text-center p-8 bg-pink-pale rounded-3xl">
              <div className="w-16 h-16 bg-white text-pink rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm">
                <FaBolt />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Instant Energy</h3>
              <p className="text-sm text-gray-500">Perfect for pre or post-workout to replenish glycogen stores quickly.</p>
           </FadeUp>
           <FadeUp delay={400} className="text-center p-8 bg-cyan-pale rounded-3xl">
              <div className="w-16 h-16 bg-white text-cyan-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm">
                <FaFlask />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Lab Tested</h3>
              <p className="text-sm text-gray-500">Every batch is tested for purity, heavy metals, and protein content.</p>
           </FadeUp>
           <FadeUp delay={500} className="text-center p-8 bg-gray-100 rounded-3xl">
              <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm">
                <FaShieldHeart />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Muscle Repair</h3>
              <p className="text-sm text-gray-500">Rich in L-Glutamine and BCAAs to reduce muscle soreness and repair tissues.</p>
           </FadeUp>
        </div>
      </div>
    </div>
  );
}
