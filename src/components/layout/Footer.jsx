import LinkList from "../ui/UI/LinkList";
import linkData from "../../data/linklist"; // Assuming you have a data file for the links

function Footer() {
  const productLinkInfo = linkData.productLinks; // Assuming structure like { productLinks: [...], ... }
  const informationLinkInfo = linkData.informationLinks; // Assuming structure like { informationLinks: [...], ... }
  return (
    <section>
      <div className="bg-white p-25 pb-0 pt-0 divide-y-[1px] divide-gray-100">
        {/*Footer-Top-Section*/}
        <div className="grid grid-cols-4 gap-4 p-10">
          <div className="flex flex-col items-start">
            <div className="flex justify-between items-center gap-3 mb-2">
              <img src="//www.lifelongindiaonline.com/cdn/shop/files/Group_76919.svg?v=1727862919"/>
              <h4 className="text-[15px] font-normal">Lifelong Online Retail Private Limited.</h4>
            </div>
            <p className ="text-[14px] text-black font-light">CIN: U52100DL2015PTC287393</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex justify-between items-center gap-3 mb-2">
              <img src="//www.lifelongindiaonline.com/cdn/shop/files/map-pin_1.svg?v=1727862969"/>
              <h4 className="text-[15px] font-normal">Registered Office</h4>
            </div>
            <p className ="text-[14px] text-black font-light">5th Floor, Unit No. 508, DLF South Court, Saket District Center, Saket, New Delhi – 110017 </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex justify-between items-center gap-3 mb-2">
              <img src="//www.lifelongindiaonline.com/cdn/shop/files/map-pin_1.svg?v=1727862969"/>
              <h4 className="text-[15px] font-normal">Corporate Office</h4>
            </div>
            <p className ="text-[14px] text-black font-light">5th GoodEarth Business Bay II, 5th Floor, Sector 58, Gurgaon, Haryana, 122102</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex justify-between items-center gap-3 mb-2">
              <img src="//www.lifelongindiaonline.com/cdn/shop/files/Vector_35.svg?v=1727862943"/>
              <h4 className="text-[15px] font-normal">Contact</h4>
            </div>
            <p className ="text-[14px] text-black font-light">Ph. No. <a href="tel:+91 9711558877">+91 9711558877</a> / <a href="tel:+91 9667499699">+91 9667499699</a> 
            <br/>
            Fax No. <a href="tel:+91 1126016805">+91 1126016805</a></p>
          </div> 
        </div>
        {/*Footer-Middle-Section*/}
        <div className="grid grid-cols-4 gap-4 p-10">
          {/* Check if productLinkInfo exists and is an array before mapping */}
            {productLinkInfo && Array.isArray(productLinkInfo) && (
              <LinkList title="Products" links={productLinkInfo} />
            )}

            {/* Check if informationLinkInfo exists and is an array before mapping */}
            {informationLinkInfo && Array.isArray(informationLinkInfo) && (
              <LinkList title="Information" links={informationLinkInfo} />
          )}
          <div className="flex flex-col items-start">
            <div>
              <h3>Stay Connected</h3>
              <p className="text-gray-400 font-light ">Stay up to date with everything from Lifelong. Sign up for the newsletter.</p>
            </div>
            <div className="mt-5">
              <div>
                <form method="post" action="/contact#contact_form" id="contact_form">
                  <input type="hidden" name="form_type" value="customer"/>
                  <input type="hidden" name="utf8" value="✓"/>
                  <input type="hidden" name="contact[tags]" value="newsletter"/>
                  <div className="relative flex-grow">
                    <input className="bg-red-50 w-100 h-14 pl-5 rounded-4xl" type="email" placeholder="Email id" name="contact[email]" id="Email" aria-label="Translation missing: en.layout.footer.newsletter_email_placeholder"/>
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-800 rounded-4xl w-25 h-12 p-4 pl-7 text-white text-xs mr-0">
                      <button type="submit">SIGN UP</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <a href="https://x.com/lifelong_online?s=21&amp;t=blRIXtRnJnVPib459Myx4w">
                <img src="https://cdn.shopify.com/s/files/1/0197/1503/1102/files/Group_76846.svg?v=1727872354"/>
              </a>
              <a href="https://www.instagram.com/lifelong.online?igsh=MWtlYXBqYXQwZXdqaw==">
                <img src="https://cdn.shopify.com/s/files/1/0197/1503/1102/files/Group_76845.svg?v=1727872354"/>
              </a>
              <a href="https://youtube.com/@lifelongonline?si=n-TIulN57IHHrRRH">
                <img src="https://cdn.shopify.com/s/files/1/0197/1503/1102/files/Group_76847.svg?v=1727872354"/>
              </a>
            </div>
          </div>
        </div>
        {/*Footer-Bottom-Section*/}
        <div className="flex justify-between items-center p-8">
          <p>
            Copyright Lifelong Online Retail Private Limited 2021.
          </p>
          <img className="w-68 h-7" src="//www.lifelongindiaonline.com/cdn/shop/files/Group_76862.png?v=1727861724"/>
        </div>
      </div>
    </section>
  );
}

export default Footer; // Export FooterSection as a named export


