import {
    EuiButton,
    EuiFieldText,
    EuiFormRow,
    EuiImage,
    EuiPageHeader,
    EuiPageTemplate,
    EuiPanel,
    EuiSpacer,
    EuiText,
    EuiTitle,
} from "@elastic/eui";
import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";

const WebPage = () => {
    let test = useParams();

    console.log(test);

    return (
        <EuiPageTemplate
            fullHeight
            pageHeader={{
                pageTitle: "Judul title",
            }}
            style={{ marginTop: 60 }}
        >
            <Header />
            <div>
                <EuiSpacer />
                <EuiPanel hasBorder={true}>
                    <EuiImage
                        allowFullScreen
                        alt={"image"}
                        src={
                            "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/blog/1541654611_s58pGW.jpg"
                        }
                    />
                    <EuiSpacer/>
                    <EuiText>
                        <p>Ini deskripsi</p>
                    </EuiText>
                    <EuiSpacer/>
                    <EuiFormRow label="Email" fullWidth>
                        <EuiFieldText fullWidth/>
                    </EuiFormRow>
                    <EuiFormRow label="Nomor Whatsapp" fullWidth>
                        <EuiFieldText prepend="+62" fullWidth/>
                    </EuiFormRow>
                    <EuiSpacer/>
                    <EuiButton>
                        Daftar
                    </EuiButton>
                </EuiPanel>
            </div>
        </EuiPageTemplate>
    );
};

export default WebPage;
