import React from 'react';

//Data for the Instagram feed section
const feedItems = [
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/489846906_18327231199162193_897354626738705320_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=wkKZwG4DzRIQ7kNvwGxwH8O&_nc_oc=AdmAym9WqM5I8i7Xy2lBJ_Iw8NyK-UqmzvZXwatcSZZd4ddRv0B18YvI4pHb-63O-q0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfGbmT3BXi9rhbYYQnS3czkd1Iy4noGu2dw3gWjXkfs5MA&oe=67FA188C",
        altText: "Instagram post with the caption: 'Manifesting more IPL magic this 2025 Big screens, big si...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/487311670_18326941075162193_5066690748395229179_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=SF4Sts-20CEQ7kNvwFle-Vg&_nc_oc=AdmzzU2kT-OdfBl-CElzk4EUuPLnEJmLdp_mnL7FT6Ltx5XxhTkS7fE0RC6OMMyhqBM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfHvRMKA0MylhOM7g-th2nb6arOZdan5dIBwtFmow3asaA&oe=67FA2497",
        altText: "Instagram post with the caption: 'Kuch yaad ho na ho, projector mat bhoolna. #iplmaniawithlife...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/486648882_18326244889162193_4318376629961370450_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=MQhCMNarSSQQ7kNvwGD4SFg&_nc_oc=AdnozZTvDGxMXUQEaLkUHR_efnHfsXN9M_SYcb1VNZi59EL86T9WSUJPdvuG0h_Gfuk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfEQ-yIRe0Ld54fAo8jdLvdMgm7LVRRjBFXCZVNJNFPqWA&oe=67FA435E",
        altText: "Instagram post with the caption: 'Lifelong ke saath ab sajaiye IPL ki mehfil jaha aapka dil ka...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/487311670_18326941075162193_5066690748395229179_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=YbPzYvM3fQkQ7kNvwFpUE-6&_nc_oc=AdnMS2UmjHU1z3TFxs1x-b5b0xZA5F40OP_wPyBOzR9XOb_ZSB90Djwsj8neLRz7FYg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=iQN7HF20ntz9FQsuOiRnMA&oh=00_AfEtReM8Kvig8KFPidyrCREBR8SWxmejX24K8EggpKwdfw&oe=680FE557",
        altText: "Instagram post with the caption: 'Bringing you the best deal of the season.Grab the ultimate ...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/486397205_18325792987162193_2208193164760789134_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=TwNA2Rqb23oQ7kNvwHgEIwr&_nc_oc=AdknBAPWDNkVu_M4Cp2CnWT2ynIyc1AUUbM2AIubKIAGZeLeGPrPogptx13vCM-LRkc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfGg30rc9JV3DG0YE8qQxtq3K69s6EfmsUkiUu5FwkBUgA&oe=67FA3CD5",
        altText: "Instagram post with the caption: 'It’s Thalla Vs Hitman. Experience stadium energy right at ho...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/483501381_18324666997162193_7607276114566339125_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=E_kdN6UR6scQ7kNvwHWblxe&_nc_oc=Adm2CJYvkH_puX4wmqwtiAcGQG5aJGrzbN4bH4WLLIfNrCbcbW61RTfrTGd66KR9wec&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfEeIgVIop5RU6kC-Opy3C9PLvGNZuLhYf_FPwbXREUs1Q&oe=67FA2DAE",
        altText: "Instagram post with the caption: 'It's raining offers on Fitness Equipment Shop for tre...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/480740700_18322465738162193_8964808618704343902_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=huyLcDeaRXAQ7kNvwE4lGc3&_nc_oc=Adl5k6ZcaK3jJXFf_QTWAHFaZcYckVvCvgoptQiYCtvNXsK81znuPJzrkXjHo6QvD6k&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfFjdS5krDFdUNyz8jXSKfrj4UJI09WEmqgos-0P2Q5ChQ&oe=67FA1F0F",
        altText: "Instagram post with the caption: 'Bring the excitement home this Champions Trophy season. You ...'"
    },
    {
        imgSrc: "https://scontent.cdninstagram.com/v/t51.75761-15/479090405_18321811651162193_5309403601130648170_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=RQ4Ba1G4fTgQ7kNvwHPqAys&_nc_oc=AdkL4q3QIzpVHEcB5kKSyNsuJiUr_LPMKmZcYOj_BJBY3-7Q9ZPQbWqnydz-f-ywqe0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=2vVV6t0FMoC_5xcZyVzehA&oh=00_AfHhCLVgmzQ-b_ZEt9XPFiCYtQqg_ztF-FGXe_iXVf2Wpg&oe=67FA2473",
        altText: "Instagram post with the caption: 'SO, HERE’S A VALENTINE’S ENERGY GIVEAWAY! To enter: ...'"
    }

]

const iconSrc = "https://instafeed.nfcube.com/assets/img/instagram-icon-v2.svg"


function InstaFeedSection () {
    return (
        <section>
            <div className="grid grid-cols-4 gap-4 p-15 pb-12 pt-10">
                {feedItems.map((item, index) =>(
                    <div className="w-full aspect-square relative group overflow-hidden" key={index}>
                       <img 
                            src={item.imgSrc} 
                            alt={item.altText} 
                            loading='lazy' 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        /> 
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <img 
                                //className="absolute right-42 top-50"
                                className="w-4 h-4 sm:w-6 sm:h-6"
                                src={iconSrc}
                                alt="Instagram icon"
                            />
                        </div>
                    </div>
                ))}
                
            </div>
        </section>
    )
}
export default InstaFeedSection // Export InstaFeedSection as a named export)