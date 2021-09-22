import {
    EuiButton,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon,
    EuiImage,
    EuiLoadingContent,
    EuiPage,
    EuiPageBody,
    EuiPageTemplate,
    EuiSpacer,
    EuiText,
} from "@elastic/eui";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const ListLoader = () => {
    return (
        <EuiFlexItem>
            <EuiLoadingContent lines={3} />
        </EuiFlexItem>
    );
};

const CardStack = () => {
    const [listEvents, setListEvents] = useState([]);

    useEffect(() => {
        let mounted = true;
        axios
            .get("http://webinarevent.test/api/getEvent")
            .then((res) => {
                console.log(res.data);
                if (mounted) {
                    setListEvents(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        return () => (mounted = false);
    }, []);

    return (
        <div style={{ marginTop: 50 }}>
            <EuiSpacer size="s" />
            <EuiFlexGroup gutterSize="l">
                {!listEvents.length ? (
                    <ListLoader />
                ) : (
                    listEvents.map((ev) => {
                        return (
                            <EuiFlexItem key={ev.id}>
                                <EuiCard
                                    image={
                                        <div style={{ margin: 50 }}>
                                            <EuiImage
                                                allowFullScreen
                                                alt="image"
                                                src={
                                                    ev.gambar
                                                }
                                            />
                                        </div>
                                    }
                                    title={ev.judul}
                                    display="subdued"
                                    description={ev.tgl_mulai}
                                    onClick={() => {}}
                                    footer={
                                        <NavLink to={"/e/test"}>
                                            <EuiButton>Daftar</EuiButton>
                                        </NavLink>
                                    }
                                />
                            </EuiFlexItem>
                        );
                    })
                )}
            </EuiFlexGroup>
        </div>
    );
};

const Webinar = () => {
    return (
        <EuiPageTemplate fullHeight={true}>
            <Header />
            <CardStack />
        </EuiPageTemplate>
    );
};

export default Webinar;
