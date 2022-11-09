import React from 'react'
import "./ImageSlider.css"
import {useState } from 'react';
export default function ImageSlider(props) {
    const [image,setImages] = useState(props?.img)

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
                            <img className="jss1478 jss1470" src={props?.img} alt="" loading="lazy"/></span></div>
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
                            <img className="jss1478" onClick={setImage}  src={props?.img} alt=""/></span></button><button className="MuiButtonBase-root jss1511 jss1501 is-selected" tabIndex="0" type="button"><span className="jss1480 jss1481 jss1477 jss1515 jss1513">
                            
                            </span></button></div>
                    </div>
                    </div>
                </div>
                <div className="jss1375" id="skipCarouselPagination" data-testid="skipCarouselPagination" style={{top: "-105px;"}}></div>
            </div>
        </div>
    )
}
