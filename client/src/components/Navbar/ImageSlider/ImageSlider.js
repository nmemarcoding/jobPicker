import React from 'react'
import "./ImageSlider.css"
import {useState } from 'react';
export default function ImageSlider() {
    const [image,setImages] = useState("https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/167231679/original/ad2685a71540bf7c95efcac77fbde3de8ddd747a/do-web-ui-ux-design-landing-page-and-website-template-in-xd-psd-figma.png")

    const setImage = (e)=>{
        setImages(e.target.src)
     
    }
    return (
        <div>
            <div className="ImageSlider boxShadow">
                <div className="jss1467 jss1469">
                    <div className="jss1472">
                    <div className="jss1473 is-draggable">
                        <div className="jss1475">
                        <div className="jss1474 is-selected" style={{left: "0%"}}><span className="jss1480 jss1481 jss1477 jss1479 jss1470">
                            <img className="jss1478 jss1470" src={image} alt="iPad Pro 11 Inch " loading="lazy"/></span></div>
                        </div>
                    </div>
                    </div>
                    <div className="jss1471"></div>
                </div>
                <div className="jss1247">
                    <h4 className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary"> Additional images</h4>
                </div>
                <div className="jss1148">
                    <div className="jss1153"><button className="MuiButtonBase-root jss1154 jss1189 jss1191 jss1224 jss1150 jss1151" tabIndex="0" type="button"><span className="MuiTypography-root jss1156 jss1193 MuiTypography-body1 MuiTypography-colorTextPrimary">Skip additional images</span></button></div>
                </div>
                <div className="jss1495">
                    <div className="jss1499">
                    <div className="jss1500 is-draggable">
                        <div className="jss1496 jss1497"><button className="MuiButtonBase-root jss1511 jss1512 jss1501 jss1502 is-selected" tabIndex="0" type="button"><span className="jss1480 jss1481 jss1477 jss1514 jss1513">
                            <img className="jss1478" onClick={setImage}  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/167231679/original/ad2685a71540bf7c95efcac77fbde3de8ddd747a/do-web-ui-ux-design-landing-page-and-website-template-in-xd-psd-figma.png" alt="iPad Pro 11 Inch  Thumbnail"/></span></button><button className="MuiButtonBase-root jss1511 jss1501 is-selected" tabIndex="0" type="button"><span className="jss1480 jss1481 jss1477 jss1515 jss1513">
                            <img className="jss1478" onClick={setImage}  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/167231679/original/10b5c229316f3e365dc876f1000adf5035050099/do-web-ui-ux-design-landing-page-and-website-template-in-xd-psd-figma.png" alt="iPad Pro 11 Inch  Thumbnail"/></span></button><button className="MuiButtonBase-root jss1511 jss1501 is-selected" tabIndex="0" type="button"><span className="jss1480 jss1481 jss1477 jss1516 jss1513">
                            <img className="jss1478" onClick={setImage}src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20200726/Web%20UI%20UX%20design,%20Landing%20Page%20and%20Website%20Template%20in%20XD,%20PSD,%20Figma-00_vcm0j2.jpg" alt="iPad Pro 11 Inch  Thumbnail"/></span></button><button className="MuiButtonBase-root jss1511 jss1501 is-selected" tabIndex="0" type="button"><span className="jss1480 jss1481 jss1477 jss1517 jss1513">
                            <img className="jss1478" onClick={setImage}src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/8c7479fccc5df7be303f84d366bf0cfa-1642557014/1.%20Ergo%20-%20Home/do-web-ui-ux-design-landing-page-and-website-template-in-xd-psd-figma.png" alt="iPad Pro 11 Inch  Thumbnail"/></span></button><button className="MuiButtonBase-root jss1511 jss1501 jss1503 is-selected" tabIndex="0" type="button"><span className="jss1480 jss1481 jss1477 jss1518 jss1513">
                            <img className="jss1478" onClick={setImage}src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0a206fe49573aa431c92850198d516e4-1630591081/1.%20Rome%20Tours%20-%20Desktop/do-web-ui-ux-design-landing-page-and-website-template-in-xd-psd-figma.png" alt="iPad Pro 11 Inch  Thumbnail"/></span></button></div>
                    </div>
                    </div>
                </div>
                <div className="jss1375" id="skipCarouselPagination" data-testid="skipCarouselPagination" style={{top: "-105px;"}}></div>
            </div>
        </div>
    )
}
