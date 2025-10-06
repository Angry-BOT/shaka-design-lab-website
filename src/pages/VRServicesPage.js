// import React, { useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage, lazyload } from "@cloudinary/react";
// import Navbar from "../sections/Navbar";
// import VideoBannerComponent from "../components/VideoBannerComponent";
// import GetInTouchSection from "../sections/GetInTouchVRSection";
// import ContactSection from "../sections/ContactSection";
// import styles from "./VRServicesPage.module.css";

// const VRServicesPage = () => {
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: "dofo7drvd",
//     },
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <div id="vrservicessection" className={styles.mainDesign}>
//       <Navbar />
//       <div className={styles.heroSection}>
//         <AdvancedImage
//           className={styles.bgIcon}
//           cldImg={cld.image("vr-section-hero-image")}
//           plugins={[lazyload()]}
//         />
//         <div className={styles.content}>
//           <span>Experience the future of design with</span>
//           <span>
//             <VideoBannerComponent />
//           </span>
//         </div>
//       </div>
//       <GetInTouchSection
//         onModalOpen={() => setIsModalOpen(true)}
//         onModalClose={() => setIsModalOpen(false)}
//       />
//       <ContactSection />
//       <div className={styles.footerContainer}>
//         <div className={styles.footer}>
//           <div className={styles.shakaDesignsLlp}>
//             ©2024 | ShaKa Designs LLP. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VRServicesPage;
import React, { useState } from "react";
import Navbar from "../sections/Navbar";
import VideoBannerComponent from "../components/VideoBannerComponent";
import GetInTouchSection from "../sections/GetInTouchVRSection";
import ContactSection from "../sections/ContactSection";
import styles from "./VRServicesPage.module.css";

const VRServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="vrservicessection" className={styles.mainDesign}>
      <Navbar />

      <div className={styles.heroSection}>
        {/* Background Image from public folder */}
        <img
          className={styles.bgIcon}
          src="/vr-section-hero-image-2.jpg"
          alt="VR Section Hero"
        />

        <div className={styles.content}>
          <span>Experience the future of design with</span>
          <span>
            <VideoBannerComponent />
          </span>
        </div>
      </div>

      <GetInTouchSection
        onModalOpen={() => setIsModalOpen(true)}
        onModalClose={() => setIsModalOpen(false)}
      />

      <ContactSection />

      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className={styles.shakaDesignsLlp}>
            ©2024 | ShaKa Designs LLP. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRServicesPage;
