import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./HeadTitle.module.css";
import { Link } from "react-router-dom";

const HeadTitle = ({ className = "" }) => {
  return (
    <div className={[styles.headTitle, className].join(" ")}>
      <div className={styles.portfolioTitleContainerWrapper}>
        <Button
          className={styles.portfolioTitleContainer}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#181818",
            background: "#f5f5f5",
            borderRadius: "25px",
            "&:hover": { background: "#f5f5f5" },
            width: 110,
            height: 35,
            fontSize: "1.1rem",
          }}
        >
          PORTFOLIO
        </Button>
      </div>
      <div className={styles.process}>
        <h1 className={styles.trustTheProcess}>TRUST THE PROCESS</h1>
        <div className={styles.atShakaDesignLabWeBelievWrapper}>
          <div className={styles.atShakaDesignContainer}>
            <p className={styles.atShakaDesign}>
              At ShaKa Design Lab, we believe that successful interior design is
              a collaborative and structured journey. Our comprehensive design
              process ensures that every project is thoughtfully planned and
              beautifully executed
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.seeOurProcess}>
              <b className={styles.seeOurProcess1}>
                <Link to="/process" color="black">
                  SEE OUR PROCESS
                </Link>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HeadTitle.propTypes = {
  className: PropTypes.string,
};

export default HeadTitle;
