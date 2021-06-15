import React from "react";
import { FooterWrapper } from "./styles";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="head">
        <h2 style={{ color: "white", borderBottom: "2px solid white" }}>
          ACM BITS Pilani Goa Chapter
        </h2>
      </div>
      <Grid container spacing={0} style={{ backgroundColor: "black" }}>
        <Grid item xs={12} sm={6}>
          <div className="left-half">
            <p style={{ color: "white" }} className="fontL">
              <b>Contact us:</b>
            </p>
            <p style={{ color: "white" }} className="fontL1" >
            <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "none" }}
                href="https://www.linkedin.com/company/acm-bits-pilani-goa-chapter"
              >
                
              
              <i  className="fab fa-linkedin-in">
                <span style={{ marginLeft: "10px" }}>
                  BITS Goa ACM on Linkedin
                </span>
              </i>
              </a>
            </p>
            <p className="fontL2">
              
              <i style={{ color: "white" }} className="far fa-envelope">
                <span style={{ marginLeft: "10px" }}>admin@bitsg.acm.org</span>
              </i>
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="right-half">
            <p style={{ color: "white" }} className="fontR">
              <b>Where to find us?</b>
            </p>
            <p style={{ color: "white" }} className="fontR1">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "none" }}
                href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&t=m&oe=UTF8&msa=0&mid=1hWnxlejcCPxEN84cH8goANCl0nM&ll=15.390011999999993%2C73.87745600000001&z=17"
              >
                <i className="fas fa-map-marker-alt" aria-hidden="true">
                  {"     "} BITS Pilani, K.K. Birla
                  <br />
                  Goa campus,
                  <br />
                  {"     "} Zuarinagar, Sancoale, Goa
                </i>
              </a>
            </p>
          </div>
        </Grid>
      </Grid>
      {/* <div className="divide">
      </div>*/}
    </FooterWrapper>
  );
};

export default Footer;
