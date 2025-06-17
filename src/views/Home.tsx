import { Layout } from "~/components";
import BenefitsSection from "~/components/landing/BenefitsSection";
import FeaturesSection from "~/components/landing/FeaturesSection";
import { Footer } from "~/components/landing/Footer";
import { HeroSection } from "~/components/landing/HeroSection";
import { HowItWorksSection } from "~/components/landing/HowItWorksSection";
import { KeyBenefitsSection } from "~/components/landing/KeyBenefitsSection";
import PhotoToStore from "~/components/landing/PhotoToStore";
import ReadyToTransfrom from "~/components/landing/ReadyToTransfrom";
import { TestimonialsSection } from "~/components/landing/TestimonialsSection";

const Home = () => {
	return (
		<Layout>
			<HeroSection />
			<PhotoToStore />
			<KeyBenefitsSection />
			<BenefitsSection />
			<HowItWorksSection />
			<FeaturesSection />
			<TestimonialsSection />
			<ReadyToTransfrom />
			<Footer />
		</Layout>
	);
};

export default Home;
