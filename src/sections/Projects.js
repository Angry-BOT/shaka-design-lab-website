import PropTypes from "prop-types";
import styles from "./Projects.module.css";
import HorizontalScrollCarousel from "../components/HorizontalScrollCorouselComponent";
const cards = [
  { url: "/residential-img-1.jpg", title: "Residential 1", id: 1 },
  { url: "/residential-img-2.jpg", title: "Residential 2", id: 2 },
  { url: "/residential-img-3.jpg", title: "Residential 3", id: 3 },
  { url: "/commercial-img-1.jpg", title: "Commercial 1", id: 4 },
  { url: "/renovations-img-1.jpg", title: "Renovation 1", id: 5 },
  { url: "/commercial-img-3.jpg", title: "Commercial 3", id: 6 },
  { url: "/commercial-img-2.jpg", title: "Commercial 2", id: 7 },
];

const Projects = ({ className = "" }) => {
  return (
    <div className={[styles.projects, className].join(" ")}>
      <div className={styles.projectTypes}>
        <div className={styles.typeList1}>
          <div className={styles.commercial}>RESIDENTIAL</div>
        </div>
        <div className={styles.typeList}>
          <div className={styles.typeItems} />
        </div>
        <div className={styles.typeList1}>
          <div className={styles.commercial}>COMMERCIAL</div>
        </div>
        <div className={styles.typeList}>
          <div className={styles.typeItems} />
        </div>
        <div className={styles.typeList3}>
          <div className={styles.renovations}>RENOVATIONS</div>
        </div>
      </div>
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
