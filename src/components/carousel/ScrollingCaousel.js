import React, { useRef } from "react";
import Slider from "react-slick";
import green from "../../assets/green.png"
import originalskinny from "../../assets/beige.png"
import { useState } from "react";

export default function ScrollingCarousel() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef = useRef();
    // const [color, setColor] = useState("")
    let slider1 = []
    let slider2 = []

    React.useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [])
    return (
        <Slider
            asNavFor={nav2}
            ref={slider => (slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            className="slider"
        >
            <div className="product" ref={sliderRef}>
                <img src={green} alt="" />
                <p>365 Signature Hoodie</p>
                <div className="price">
                    <p><b>£13,95</b></p>
                    <div className="checkboxes">
                        <input type="radio" name="color" id="green" value={"green"} />
                        <input type="radio" name="color" id="red" value={"red"} />
                        <input type="radio" name="color" id="yellow" value={"yellow"} />
                        <input type="radio" name="color" id="blue" value={"blue"} />
                    </div>
                </div>
            </div>
            <div className="product">
                <img src={originalskinny} alt="" />
                <p>Organic Skinny High Waist Jeans</p>
                <div className="price">
                    <p><b> £23,95</b></p>
                    <div className="checkboxes">
                        <input type="radio" name="color" id="green" value={"green"} />
                        <input type="radio" name="color" id="red" value={"red"} />
                        <input type="radio" name="color" id="yellow" value={"yellow"} />
                        <input type="radio" name="color" id="blue" value={"blue"} />
                    </div>
                </div>
            </div>
            <div className="product">
                <img src={green} alt="" />
                <p>Product-3</p>
                <div className="price">
                    <p><b> £33,95</b></p>
                    <div className="checkboxes">
                        <input type="radio" name="color" id="green" value={"green"} />
                        <input type="radio" name="color" id="red" value={"red"} />
                        <input type="radio" name="color" id="yellow" value={"yellow"} />
                        <input type="radio" name="color" id="blue" value={"blue"} />
                    </div>
                </div>
            </div>
            <div className="product">
                <img src={originalskinny} alt="" />
                <p>Product-4</p>
                <div className="price">
                    <p><b> £43,95</b></p>
                    <div className="checkboxes">
                        <input type="radio" name="color" id="green" value={"green"} />
                        <input type="radio" name="color" id="red" value={"red"} />
                        <input type="radio" name="color" id="yellow" value={"yellow"} />
                        <input type="radio" name="color" id="blue" value={"blue"} />
                    </div>
                </div>
            </div>
            <div className="product">
                <img src={green} alt="" />
                <p>Product-5</p>
                <div className="price">
                    <p><b> £53,95</b></p>
                    <div className="checkboxes">
                        <input type="radio" name="color" id="green" value={"green"} />
                        <input type="radio" name="color" id="red" value={"red"} />
                        <input type="radio" name="color" id="yellow" value={"yellow"} />
                        <input type="radio" name="color" id="blue" value={"blue"} />
                    </div>
                </div>
            </div>
            <div className="product">
                <img src={originalskinny} alt="" />
                <p>Product-6</p>
                <div className="price">
                    <p><b> £63,95</b></p>
                    <div className="checkboxes">
                        <input type="radio" name="color" id="green" value={"green"} />
                        <input type="radio" name="color" id="red" value={"red"} />
                        <input type="radio" name="color" id="yellow" value={"yellow"} />
                        <input type="radio" name="color" id="blue" value={"blue"} />
                    </div>
                </div>
            </div>
        </Slider>
    );

}