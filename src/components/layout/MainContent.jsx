import Herobanner from "../sections/HeroBanner"
import ShopifySection from "../sections/ShopifySection"
import HomeSection from "../sections/HomeSection"
import NewArrival from "../sections/NewArrival"
import HealthcareSection from "../sections/HealthcareSection"
import GiftSection from "../sections/GiftSection"
import ShopifyCollectionSection from "../sections/ShopifyCollectionSection"
import ComfortQualitySection from "../sections/ComfortQualityDesign"
import ImageTextSection from "../sections/ImageTextSection"
import InstaFeedSection from "../sections/InstaFeedSection"

function MainContent () {
    return (
        <div>
            <Herobanner />
            <ShopifySection />
            <HomeSection />
            <NewArrival />
            <HealthcareSection />
            <GiftSection />
            <ShopifyCollectionSection />
            <ComfortQualitySection />
            <ImageTextSection />
            <InstaFeedSection />
        </div>
    )
}
export default MainContent // Export MainContent as a named export