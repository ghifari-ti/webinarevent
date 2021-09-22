import {
    EuiHeader,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiImage,
    EuiText,
    EuiHeaderSection,
    EuiHeaderSectionItem,
} from "@elastic/eui";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ active }) => {
    return (
        <EuiHeader position={"fixed"}>
            <EuiHeaderSectionItem border="right">
                <NavLink to={"/"}>
                    <EuiImage
                        size={70}
                        alt={"logo"}
                        src={
                            "https://if.paramadina.ac.id/wp-content/uploads/2021/07/image-11.png"
                        }
                    ></EuiImage>
                </NavLink>
                <EuiText style={{ margin: 10 }}>HIMTI Webinar</EuiText>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                <EuiHeaderLinks aria-label="App navigation links example">
                    <EuiHeaderLink>
                        <NavLink
                            exact
                            style={{color: 'white'}}
                            activeStyle={{ textDecoration: "underline", color: 'green' }}
                            to={"/webinar"}
                        >
                            Webinar
                        </NavLink>
                    </EuiHeaderLink>

                    <EuiHeaderLink>
                        <NavLink
                            exact
                            style={{color: 'white'}}
                            activeStyle={{ textDecoration: "underline", color: 'green' }}
                            to={"/sertifikat"}
                        >
                            Sertifikat
                        </NavLink>
                    </EuiHeaderLink>

                    <EuiHeaderLink iconType="help">Bantuan</EuiHeaderLink>
                </EuiHeaderLinks>
            </EuiHeaderSectionItem>
        </EuiHeader>
    );
};

export default Header;
