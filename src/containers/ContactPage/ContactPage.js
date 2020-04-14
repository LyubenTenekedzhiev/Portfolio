import React from "react";

import classes from "./ContactPage.module.css";

import Navigation from "./../../components/Navigation/Navigation";
import Footer from "./../../components/Footer/Footer";
import contactPhoto from "../../assets/onthewayhome.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Popover from "../../components/UI/Popover/Popover";
import Snackbar from "../../components/UI/Snackbar/Snackbar";

function ContactPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [content, setContet] = React.useState("");
  const [contentValue, setContentValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    if (
      event.currentTarget.innerHTML ===
      `<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>`
    ) {
      setContet("email");
    } else {
      setContet("number");
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const copyContent = (event) => {
    if (
      event.currentTarget.innerHTML ===
      `<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>`
    ) {
      navigator.clipboard.writeText("lyuben.tenekedjiev@gmail.com");
      setContentValue("lyuben.tenekedjiev@gmail.com");
      setOpen(true);
    } else {
      navigator.clipboard.writeText("+359 899 995 9115");
      setContentValue("+359 899 995 9115");
      setOpen(true);
    }
  };

  return (
    <div className={classes.ContactPage}>
      <Navigation />
      <p></p>
      <figure className={classes.ContactPageImageFigure}>
        <img className={classes.ContactPageImage} src={contactPhoto} alt={contactPhoto} />
        <figcaption className={classes.ContactPageImageCaption}>
          <h1 className={classes.ContactPageImageCaptionText}>You can find me here</h1>
          <div className={classes.ContactPageImageCaptionIcons}>
            <a href='https://linkedin.com/in/lyuben-tenekedzhiev' target='blank' style={{ color: "inherit" }}>
              <LinkedInIcon style={{ fontSize: "inherit", cursor: "pointer" }} />
            </a>
            <a href='https://github.com/LyubenTenekedzhiev' target='blank' style={{ color: "inherit" }}>
              <GitHubIcon style={{ fontSize: "inherit", cursor: "pointer" }} />
            </a>
            <MailIcon
              style={{ fontSize: "inherit", cursor: "pointer" }}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              onClick={copyContent}
            />
            <PhoneAndroidIcon
              style={{ fontSize: "inherit", cursor: "pointer" }}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              onClick={copyContent}
            />
          </div>
        </figcaption>
      </figure>
      <Popover anchorEl={anchorEl} closed={handlePopoverClose} content={content} />
      <Snackbar contentCopied={open} closed={handleClose} contentValue={contentValue} />
      <Footer />
    </div>
  );
}

export default ContactPage;
