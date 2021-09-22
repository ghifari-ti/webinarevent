import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiText,
    EuiImage,
    EuiFlexItem,
    EuiFlexGroup,
} from "@elastic/eui";
import { StyleSheet, css } from "aphrodite";
import React, { useEffect, useRef, useState } from "react";
import { bounce, fadeInDown, fadeInDownBig } from "react-animations";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import WindowDimension from "../Utils/WindowDimension";
import Header from "../components/Header";


function Welcome({ active }) {
    const [showBottomBar, setshowBottomBar] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(WindowDimension());
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(()=>{
        setWindowDimensions(WindowDimension());

        return windowDimensions
    }, [])

    useEffect(() => {
        const options = {
            strings: [
                "Pengalaman kerja",
                "Belajar bahasa pemrograman",
                "Tips dan trik dari Alumni",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
        };

        typed.current = new Typed(el.current, options);
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <div style={{ height: "100%"}}>
            <Header active={active} />
            <EuiFlexGroup
                justifyContent={"center"}
                alignItems={"center"}
                style={{ height: windowDimensions.height, width: "100%" }}
            >
                <EuiFlexItem grow={false} style={{paddingLeft: 10, paddingRight: 10}}>
                    <EuiText style={{ width: 400}} textAlign={'center'}>
                        <h3>
                            <span
                                className={css(styles.bounce)}
                                style={{ whiteSpace: "pre" }}
                                ref={el}
                            />
                        </h3>
                    </EuiText>
                </EuiFlexItem>
            </EuiFlexGroup>
        </div>
    );
}

const styles = StyleSheet.create({
    bounce: {
        animationName: fadeInDownBig,
        animationDuration: "2s",
    },
});

export default Welcome;
