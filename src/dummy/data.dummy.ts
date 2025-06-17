import {
	FeatureImage,
	HowItWorkImage1,
	HowItWorkImage2,
	HowItWorkImage3,
	HowItWorkImage4,
	User1,
	User2,
	User3,
} from "~/assets/images";
import { AlarmClock, BagDollar, ImageIcon } from "~/assets/svg";

export const LINKS = [
	{
		label: "Benefits",
		href: "/#benefits",
		id: "benefits",
	},
	{
		label: "How it works",
		href: "/#howitworks",
		id: "howitworks",
	},
	{
		label: "Features",
		href: "/#features",
		id: "features",
	},
	{
		label: "Testemonials",
		href: "/#testimonials",
		id: "testimonials",
	},
];

export const HERO_TEMPLATES = [
	// add images from public/templates
	"/templates/battle_ropes.png",
	"/templates/swaddle.png",
	"/templates/toiletry_bag.png",
	"/templates/wallet.png",
	"/templates/water_bottle.png",
];

export const SOCIAL_PROOF = [User1, User2, User3];

export const FEATURES_DATA = [
	{
		title: "Templates For Every Category",
		content: "Details of Feature 1",
		image: User1,
	},
	{
		title: "Remove Backgrounds With AI",
		content: "Details of Feature 2",
		image: FeatureImage,
	},
	{
		title: "Enhance Your Image",
		content:
			"Take your product photos to the next level with our powerful enhancement tools. Automatically add realistic drop shadows, apply professional filters, adjust lighting and contrast, and make your products stand out with perfect clarity.",
		image: FeatureImage,
	},
	{
		title: "Add Shapes, Graphics And Backgrounds",
		content: "Details of Feature 3",
		image: FeatureImage,
	},
	{
		title: "1000s Of Different Fonts",
		content: "Details of Feature 3",
		image: FeatureImage,
	},
	{
		title: "Millions Of Photos & Graphics",
		content: "Details of Feature 3",
		image: User3,
	},
];

export const TESTIMONIAL_DATA = [
	{
		id: 1,
		image: User1,
		name: "Moiz Ali",
		designation: "CEO of PuzzWiz, Amazon Seller",
		review:
			"This tool has completely transformed how I create product photos for my Amazon listings. The templates are professional and save me hours of time, while the AI background removal is incredibly accurate. It’s exactly what e-commerce sellers like me have been waiting for.",
	},
	{
		id: 2,
		image: User2,
		name: "Matt Doe",
		designation: "Amazon Seller",
		review:
			"I’ve tried so many tools for product images, but nothing comes close to Prodsnap. It’s fast, intuitive, and the results look like they came from a pro studio. My Shopify store finally has a consistent, clean look — without the cost or delays.",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		designation: "Small Business Owner",
		review:
			"As a small business, this has been a game-changer. My products now look as good as big brand listings.",
		image:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
	},
	{
		id: 4,
		name: "David Thompson",
		designation: "Product Photographer",
		review:
			"I've been using this for 6 months and it keeps getting better. The AI accurately handles even complex edges.",
		image:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
	},
	{
		id: 5,
		name: "Priya Sharma",
		designation: "UX Designer",
		review:
			"The realistic drop shadows have elevated our app's UI design. Our product images look more tangible and engaging.",
		image:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
	},
];

export const KEY_BENEFITS_DATA = [
	{
		id: 1,
		title: "Inconsistent Visuals",
		content: "Product images lack consistency, harming your brand’s identity",
		image: ImageIcon,
	},
	{
		id: 2,
		title: "High Costs, Low Efficiency",
		content: "Expensive professional sessions seem like the only solution",
		image: BagDollar,
	},
	{
		id: 3,
		title: "Delays That Hurt Sales",
		content: "Launches get delayed due to lengthy photo shoots and editing",
		image: AlarmClock,
	},
];

export const HOW_IT_WORK_DATA = [
	{
		cardNo: "01",
		title: "Choose a Template",
		description:
			"Pick from professionally designed layouts tailored for e-commerce — clean, consistent, and ready to convert.",
		src: HowItWorkImage1,
		textColor: "text-[#D1ECFD]",
	},
	{
		cardNo: "02",
		title: "Upload Your Product",
		description:
			"Drag and drop your product photo. No special equipment or background needed — we’ll handle the magic.",
		src: HowItWorkImage2,
		textColor: "text-[#E2F8EF]",
	},
	{
		cardNo: "03",
		title: "Customize Instantly",
		description:
			"Adjust colors, shadows, angles, and more using our simple editor. Stay on-brand without a designer.",
		src: HowItWorkImage3,
		textColor: "text-[#F1ECFB]",
	},
	{
		cardNo: "04",
		title: "Export & Publish",
		description:
			"Download high-quality images ready for your store, ads, or socials — in minutes, not days.",
		src: HowItWorkImage4,
		textColor: "text-[#D1ECFD]",
	},
];
