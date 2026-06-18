// ── Hero (home page) ─────────────────────────────────────────────────────────
import hero from '../assets/2214398-Edit-Edit.jpeg'

// ── Page heroes ───────────────────────────────────────────────────────────────
import heroKerala      from '../assets/philipkuttys260814-0009.jpg'       // boatman silhouette at sunrise
import heroHost        from '../assets/IMG_5583.jpg'                       // host family portrait at veranda
import heroFarm        from '../assets/philipkuttys011.jpg'                // banana trees + farm canal
import heroFood        from '../assets/ph-2156-scaled.jpg'                 // spices being prepared
import heroCookery     from '../assets/ph-2135-scaled.jpg'                 // cooking class in kitchen
import heroRetreat     from '../assets/20190220_190300-01-scaled.jpeg'     // lit pavilion at night — cozy
import heroActivities  from '../assets/IMG_3983-scaled.jpg'                // canoe POV on open backwaters
import heroTips        from '../assets/IMG_5295.jpg'                       // lush green tropical canal
import heroContact     from '../assets/IMG_5282.jpg'                       // cottage from waterfront
import heroReservation from '../assets/philipkuttys260814-00031.jpg'       // beautiful cottage exterior
import heroReviews     from '../assets/philipkuttysfarm1.jpg'              // wide panoramic cottage + reflection
import heroVillas      from '../assets/PFH29-scaled.jpg'                   // Family Cottage exterior

// ── Farm content image ────────────────────────────────────────────────────────
import farmContent from '../assets/ph-2261-scaled.jpg'                    // calf in barn

// ── Home gallery (8 images shown on home page) ────────────────────────────────
import home0 from '../assets/philipkuttys260814-0001.jpg'  // cottages lit at night reflecting in water
import home1 from '../assets/philipkuttysfarm1.jpg'        // wide panoramic cottage + backwater
import home2 from '../assets/philipkuttys260814-0014.jpg'  // cottages reflecting in backwater — daytime
import home3 from '../assets/philipkuttys260814-0009.jpg'  // boatman silhouette at sunrise
import home4 from '../assets/IMG_6804-scaled.jpg'          // golden sunset — Chinese fishing nets
import home5 from '../assets/ph-2317-scaled.jpg'           // guests dining outdoors at the farm
import home6 from '../assets/ph-2156-scaled.jpg'           // Kerala spices
import home7 from '../assets/ph-2255-scaled.jpg'           // walking the farm path

// ── Villa gallery ─────────────────────────────────────────────────────────────
import villa0  from '../assets/PFH29-scaled.jpg'
import villa1  from '../assets/PFH68-scaled.jpg'
import villa2  from '../assets/PFH71-scaled.jpg'
import villa3  from '../assets/PFH26-scaled.jpg'
import villa4  from '../assets/PFH48-scaled.jpg'
import villa5  from '../assets/PFH9-scaled.jpg'
import villa6  from '../assets/PFH78-scaled.jpg'
import villa7  from '../assets/PFH98-scaled.jpg'
import villa8  from '../assets/PFH92-scaled.jpg'
import villa9  from '../assets/PFH107-scaled.jpg'
import villa10 from '../assets/PFH75-scaled.jpg'
import villa11 from '../assets/PFH83-scaled.jpg'
import villa12 from '../assets/PFH1-scaled.jpg'
import villa13 from '../assets/PFH4-scaled.jpg'
import villa14 from '../assets/PFH6-scaled.jpg'
import villa15 from '../assets/PFH8-scaled.jpg'
import villa16 from '../assets/PFH11-scaled.jpg'
import villa17 from '../assets/PFH14-scaled.jpg'
import villa18 from '../assets/PFH15-scaled.jpg'
import villa19 from '../assets/PFH16-scaled.jpg'
import villa20 from '../assets/PFH17-scaled.jpg'
import villa21 from '../assets/PFH24-scaled.jpg'
import villa22 from '../assets/PFH27-scaled.jpg'
import villa23 from '../assets/PFH31-scaled.jpg'
import villa24 from '../assets/PFH33-scaled.jpg'
import villa25 from '../assets/PFH34-scaled.jpg'
import villa26 from '../assets/PFH35-scaled.jpg'

export const images = {
  hero,

  pageHeroes: {
    kerala:      heroKerala,
    host:        heroHost,
    farm:        heroFarm,
    food:        heroFood,
    cookery:     heroCookery,
    retreat:     heroRetreat,
    activities:  heroActivities,
    tips:        heroTips,
    contact:     heroContact,
    reservation: heroReservation,
    reviews:     heroReviews,
    villas:      heroVillas,
  },

  farmContent,

  homeGallery: [
    { src: home0, alt: 'Cottages lit at night reflecting in the backwaters' },
    { src: home1, alt: 'Philipkutty\'s Farm panoramic view' },
    { src: home2, alt: 'Cottages reflecting in the backwaters' },
    { src: home3, alt: 'Boatman at sunrise on the Kerala backwaters' },
    { src: home4, alt: 'Golden sunset over Kerala backwaters' },
    { src: home5, alt: 'Dining at the farm' },
    { src: home6, alt: 'Kerala spices' },
    { src: home7, alt: 'Walking through the farm' },
  ],

  villaGallery: [
    { src: villa0,  alt: 'Family Cottage' },
    { src: villa1,  alt: 'Kuyil and Ponmaan Cottage' },
    { src: villa2,  alt: 'Madatha Cottage' },
    { src: villa3,  alt: 'Family Cottage East Wing' },
    { src: villa4,  alt: 'Family Villa Living Room' },
    { src: villa5,  alt: 'Cottage Interior' },
    { src: villa6,  alt: 'Cottage Interiors' },
    { src: villa7,  alt: 'Ashokam Cottage' },
    { src: villa8,  alt: 'Chempakam Cottage' },
    { src: villa9,  alt: 'Tharavadu Cottage' },
    { src: villa10, alt: 'Madatha Cottage Padipura' },
    { src: villa11, alt: 'Cottage Veranda' },
    { src: villa12, alt: 'Backwater view from cottage' },
    { src: villa13, alt: 'Cottage entrance' },
    { src: villa14, alt: 'Garden cottage' },
    { src: villa15, alt: 'Cottage exterior' },
    { src: villa16, alt: 'Cottage pathway' },
    { src: villa17, alt: 'Villa exterior' },
    { src: villa18, alt: 'Villa view' },
    { src: villa19, alt: 'Cottage balcony' },
    { src: villa20, alt: 'Cottage surroundings' },
    { src: villa21, alt: 'Villa garden' },
    { src: villa22, alt: 'Cottage approach' },
    { src: villa23, alt: 'Villa terrace' },
    { src: villa24, alt: 'Cottage deck' },
    { src: villa25, alt: 'Villa exterior' },
    { src: villa26, alt: 'Cottage walkway' },
  ],
}
