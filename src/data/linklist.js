// Data for the footer links (can be placed inside the component or imported from a separate file)
const productLinks = [
    { label: 'Sports & Fitness', url: '/collections/sports-fitness' },
    { label: 'Massagers & Wellness', url: '/collections/massagers-welness' },
    { label: 'Personal Grooming', url: '/collections/personal-grooming' },
    { label: 'Home & Kitchen', url: '/collections/home-kitchen' },
    { label: 'Home Improvement', url: '/collections/home-improvement' },
    { label: 'Electronics', url: '/collections/electronics' },
];
  
const informationLinks = [
    { label: 'FAQs', url: '/pages/shipping-faq' },
    { label: 'Terms', url: '/pages/terms-conditions' },
    { label: 'Pickup Policy', url: '/pages/return-policy' },
    { label: 'Privacy Policy', url: '/pages/privacy-policy' },
    { label: 'Shipping Policy', url: '/pages/shipping-policy' },
    { label: 'E-Waste', url: '/pages/e-waste' },
];

const linkData = {
    productLinks: productLinks,
    informationLinks: informationLinks,
  };
  
export default linkData; // <--- Make sure this line exists and is correct