import PropTypes from "prop-types";
import styles from "./ContactSection.module.css";

const ContactSection = ({ className = "" }) => {
  return (
    <footer
      id="contactsection"
      className={[styles.getInTouch, className].join(" ")}
    >
      <div className={styles.contactDetails}>
        <div className={styles.address}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />

          <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          <div className={styles.aSubhamApartmentContainer}>
            <p className={styles.aSubhamApartment}>
              4A,&nbsp;Subham&nbsp;Apartment,
            </p>
            <p className={styles.aHussainpur}>75/1/A&nbsp;Hussainpur,</p>
            <p className={styles.kolkata700107}>Kolkata&nbsp;-&nbsp;700107</p>
            <p className={styles.kolkata700107}>
              <a href="https://maps.app.goo.gl/jHdWmhG4Ap4VrktKA?g_st=com.google.maps.preview.copy">
                <img
                  className={styles.locationIcon}
                  src="/map-icon.svg"
                  loading="lazy"
                  alt="Location"
                />
              </a>
            </p>
          </div>
          <div className={styles.contact}>
            Phone&nbsp;number:&nbsp;8100139058,&nbsp;6290914287
          </div>
          <div className={styles.email}>
            <span>
              Email:&nbsp;
              <a
                className={styles.shakadesignscom}
                href="mailto:business@shakadesignlab.com"
                target="_blank"
              >
                <span className={styles.shakadesignscom1}>
                  business@shakadesignlab.com
                </span>
              </a>
               
            </span>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.socialLinks}>
          <div className={styles.socialIcons}>
            <div className={styles.socialIconsfacebooknegativeWrapper}>
              <a href="https://www.facebook.com/profile.php?id=61560902740018&mibextid=kFxxJD">
                <img
                  className={styles.socialIconsfacebooknegative}
                  loading="lazy"
                  alt=""
                  src="/social-iconsfacebooknegative.svg"
                />
              </a>
            </div>
            <div className={styles.socialIconsinstagramnegativWrapper}>
              <a href="https://www.instagram.com/shakadesignlab?igsh=YndjcXRkY2lrNGg1">
                <img
                  className={styles.socialIconsinstagramnegativ}
                  loading="lazy"
                  alt=""
                  src="/social-iconsinstagramnegative.svg"
                />
              </a>
            </div>
            <div className={styles.socialIconsxTwitterorigiWrapper}>
              <img
                className={styles.socialIconsxTwitterorigi}
                loading="lazy"
                alt=""
                src="/social-iconsx-twitteroriginal.svg"
              />
            </div>
            <div className={styles.socialIconspinterestoriginaWrapper}>
              <img
                className={styles.socialIconspinterestorigina}
                loading="lazy"
                alt=""
                src="/social-iconspinterestoriginal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutUs}>About us</div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfService}>Terms of service</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

ContactSection.propTypes = {
  className: PropTypes.string,
};

export default ContactSection;
