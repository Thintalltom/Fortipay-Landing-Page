import cardIcon from "../assets/Icon (2).svg";
import WorkImg from "../assets/workImg.svg";
import Image1 from '../assets/Rectangle 10 (1).svg'
import Image2 from '../assets/Rectangle 10 (2).svg'
import Image3 from '../assets/Rectangle 10.svg'
export const valueProposition = [
  {
    icon: cardIcon,
    header: "Real-Time AI Detection",
    title:
      "FortiPay’s AI engine analyzes every transaction as it happens, using device, network, and behavioral signals to spot suspicious activity before money moves. Fraud is blocked in milliseconds, not after the damage is done.",
  },
  {
    icon: cardIcon,
    header: "Chargeback Reduction",
    title:
      "By catching fraudulent transactions early and providing verifiable risk scores, FortiPay helps merchants and banks avoid costly chargebacks and dispute fees, protecting revenue and customer trust.",
  },
  {
    icon: cardIcon,
    header: "Seamless Integration",
    title:
      "Lightweight SDKs and REST APIs let you plug FortiPay into web or mobile apps with minimal code. No complex infrastructure, just drop it in and start scoring transactions.",
  },
  {
    icon: cardIcon,
    header: "Built for Growth",
    title:
      "FortiPay’s architecture scales with your business, supporting high transaction volumes, multi-channel data, and evolving fraud patterns without slowing performance.",
  },
];

export const howItWorks = [
  {
    header: "Connect FortiPay to Your Payment System",
    text: "Integrate quickly with our SDK or REST API. No heavy infrastructure, just drop in a few lines of code and start sending transaction data securely.",
    image: WorkImg,
  },
  {
    header: "Real-Time AI Transaction Monitoring",
    text: "FortiPay’s AI engine analyzes every payment, login, and transfer in milliseconds, combining device signals, user behavior, and historical patterns to spot suspicious activity.",
    image: WorkImg,
  },
  {
    header: "Fraud Blocked Before It Hurts Your Business",
    text: "High-risk transactions are automatically flagged or stopped, triggering step-up verification or instant rejection so losses are prevented, not just reported.",
    image: WorkImg,
  },
];

export const Pricings = [
  {
    plan: "Basic Plan",
    price: "$99",
    features: "Up to 5 users",
    featureText: 'Everything in our free plan plus',
    featuresDetails: [
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
    ],
  },
    {
    plan: "Business Plan",
    price: "$499",
    features: "Growing teams up to 20 users",
    featureText: 'Everything in our Business plan plus',
    featuresDetails: [
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
    ],
  },
    {
    plan: "Enterprise Plan",
    price: "$999",
    features: " Advanced features + unlimited users",
    featureText: 'Everything in our Enterprise plan plus',
    featuresDetails: [
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
      "Unlimited project and storage",
    ],
  },
];

// import React from "react";
// import TestimonialCard from "./TestimonialCard";

export const testimonials = [
  {
    rating: 5,
    message: "Integration was a breeze. We were up and running in under a day!",
    name: "David Mensah",
    role: "CTO, SwiftPay Africa",
    image: "David's Photo"
  },
  {
    rating: 4,
    message: "Amazing support team and fast setup. Highly recommended!",
    name: "Amaka Okoro",
    role: "Product Manager, PayLink",
    image: "Amaka's Photo"
  },
  {
    rating: 5,
    message: "The real-time analytics feature is a game changer.",
    name: "James Ade",
    role: "CEO, FinGo",
    image: "James' Photo"
  },
  {
    rating: 5,
    message: "Reliable, secure, and easy to use. Perfect for our team.",
    name: "Fatima Bello",
    role: "Lead Engineer, NovaTech",
    image: "Fatima's Photo"
  },
  {
    rating: 4,
    message: "Smooth API integration and great documentation.",
    name: "Tunde Akin",
    role: "Backend Developer, CloudWave",
    image: "Tunde's Photo"
  }
];

export const BlogPost = [
  {
    image: Image1,
    Header: 'Navigating the Crypto Landscape: A Guide for Fintech Innovators.',
    Text: "Understand the opportunities and challenges of integrating blockchain into your fintech strategy. Understand the opportunities and challenges of integrating blockchain into your fintech strategy.",
    date: '10th June, 2024',
    read: '7 min read'
  },
   {
    image: Image2,
    Header: 'Decoding Digital Defenses: The Fintech Security Guide',
    Text: "Understand the opportunities and challenges of integrating blockchain into your fintech strategy. Understand the opportunities and challenges of integrating blockchain into your fintech strategy.",
    date: '10th June, 2024',
    read: '7 min read'
  },
   {
    image: Image3,
    Header: 'Revolutionizing Banking: The Rise of AI-Powered Solutions',
    Text: "Explore how AI is reshaping financial services, from fraud detection to personalized customer experiences.",
    date: '10th June, 2024',
    read: '7 min read'
  },
    {
    image: Image3,
    Header: 'Revolutionizing Banking: The Rise of AI-Powered Solutions',
    Text: "Explore how AI is reshaping financial services, from fraud detection to personalized customer experiences.",
    date: '10th June, 2024',
    read: '7 min read'
  },
]
export const footerData = [
  {
    header: 'Product',
    text: [
      'Pricing',
      'Features',
      'Integrations',
      'Changelog',
    
    ]
  },
    {
    header: 'Company',
    text: [
      'About Us',
      'Career',
      'News',
      'Contact',
   
    ]
  },
     {
    header: 'Resources',
    text: [
      'Docs',
      'Blogs',
      'Changelog',
      'Support'
    ]
  },
  {
    header: 'Social ',
    text: [
      'x.com',
      'LinkedIn',
      'Facebook',
      'Github'
    ]
  }
]
import fan from '../assets/fan.svg'

export const SectionCard = [
  {
    icon: "https://images.ctfassets.net/t38lsvt2xzqb/3caLNsQfLZj1orEeu7VZuB/b48a86dae99036fbf2b370acb602788b/FAN.svg",
    header: 'AI Risk Engine',
    text: 'Analyze every transaction in milliseconds with adaptive AI that flags suspicious behavior before it impacts your revenue. FortiPay’s learning engine evolves with emerging fraud tactics to keep your business secure.'
  },
   {
    icon: "https://images.ctfassets.net/t38lsvt2xzqb/3caLNsQfLZj1orEeu7VZuB/b48a86dae99036fbf2b370acb602788b/FAN.svg",
    header: 'Chargeback Protection',
    text: 'Reduce costly disputes and losses with proactive monitoring and automated evidence collection for chargebacks. FortiPay helps you fight fraud effectively while protecting profits and customer trust.'
  },
   {
    icon: "https://images.ctfassets.net/t38lsvt2xzqb/3caLNsQfLZj1orEeu7VZuB/b48a86dae99036fbf2b370acb602788b/FAN.svg",
    header: 'Account Takeover Defense',
    text: 'Detect unusual behavior like location or device changes using behavioral biometrics to prevent unauthorized access. FortiPay keeps accounts safe without adding friction to the customer experience.'
  },
   {
    icon: "https://images.ctfassets.net/t38lsvt2xzqb/3caLNsQfLZj1orEeu7VZuB/b48a86dae99036fbf2b370acb602788b/FAN.svg",
    header: 'Easy API Integration',
    text: 'Connect FortiPay to your systems with lightweight APIs and SDKs for fast, disruption-free integration. Our plug-and-play approach ensures protection without slowing your business operations.'
  },
]


