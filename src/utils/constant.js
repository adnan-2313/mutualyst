import { Home, Newspaper, Users, Star } from "lucide-react";
export const plansList = [
  {
    id: 1,
    title: "Hydrogen",
    price: 500,
    features: [
      "Access to basic stock data",
      "Up to 5 API requests per minute",
      "Real-time market updates",
      "Email support",
      "Limited historical data (1 year)",
      "Single user account",
      "Basic analytics dashboard",
      "CSV data export",
      "Mobile app integration",
      "Community forum access",
    ],
  },
  {
    id: 2,
    title: "Nitrogen",
    price: 1000,
    features: [
      "Access to advanced stock data",
      "Up to 10 API requests per minute",
      "Real-time and intraday updates",
      "Priority email support",
      "Extended historical data (5 years)",
      "Multiple user accounts (up to 3)",
      "Advanced analytics dashboard",
      "Customizable CSV/Excel exports",
      "Webhook notifications",
      "API usage monitoring tools",
    ],
  },
  {
    id: 3,
    title: "Helium",
    price: 1500,
    features: [
      "Access to premium stock data",
      "Up to 20 API requests per minute",
      "Real-time, intraday, and delayed data",
      "24/7 chat support",
      "Full historical data access",
      "Unlimited user accounts",
      "AI-powered insights and predictions",
      "Custom data filtering options",
      "Dedicated account manager",
      "White-labeling options",
    ],
  },
  {
    id: 4,
    title: "Carbon",
    price: 2000,
    features: [
      "Access to enterprise-level stock data",
      "Unlimited API requests",
      "Real-time, intraday, and pre-market data",
      "Priority 24/7 support",
      "Full historical data with insights",
      "Custom user management",
      "Advanced AI-powered analytics",
      "Custom API endpoints",
      "Direct data pipeline integration",
      "Custom SLAs and agreements",
    ],
  },

];

export const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "News",
    link: "/news",
  },
  {
    id: 3,
    title: "Community",
    link: "/community",
  },
  {
    id: 4,
    title: "SuperHeros",
    link: "/superhero",
  },
];

export const barItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: Home,
  },
  {
    id: 2,
    title: "News",
    link: "/news",
    icon: Newspaper,
  },
  {
    id: 3,
    title: "Community",
    link: "/community",
    icon: Users,
  },
  {
    id: 4,
    title: "SuperHeros",
    link: "/superhero",
    icon: Star,
  },
];
export const endpoints = [
  { name: "Stock Data", path: "Get_Stock_Data_by_Name" },
  { name: "Industry", path: "Industry_Search" },
  { name: "Mutual Fund ", path: "Mutual_Fund_Search" },
  { name: "Commodity Futures", path: "Commodity_Futures_Data_API" },
  { name: "Price Shockers", path: "Price_Shockers" },
  { name: "Mutual Funds", path: "Mutual_Funds" },
  { name: "BSE Most Active", path: "BSE_Most_Active" },
  { name: "Analyst Recommendations", path: "Analyst_Recommendations" },
  { name: "IPO", path: "IPO" },
  { name: "Corporate Actions", path: "Corporate_Actions" },
  { name: "Historical Data", path: "Historical_Data" },
  { name: "Historical Stats", path: "Historical_Stats" },
  { name: "Stock Forecasts", path: "Stock_Forecasts" },
  { name: "NSE Most Active", path: "NSE_Most_Active" },
  { name: "Get Trending Stocks", path: "Get_Trending_Stocks" },
  // { name: "Fetch 52 Week High Low Data", path: "Fetch_52_Week_High_Low_Data" },
];
