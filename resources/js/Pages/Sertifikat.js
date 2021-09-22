import {
    EuiButton,
    EuiFieldSearch,
    EuiFieldText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiForm,
    EuiFormRow,
    EuiPageTemplate,
    EuiSpacer,
} from "@elastic/eui";
import React from "react";
import Header from "../components/Header";

const Sertifikat = () => {
    return (
        <EuiPageTemplate fullHeight>
            <Header />

            <div style={{ marginTop: 60 }}>
                <EuiFlexGroup justifyContent={"center"}>
                    <EuiFlexItem>
                        <EuiFormRow label="ID Pendaftaran" fullWidth>
                            <EuiFieldText fullWidth name="last" />
                        </EuiFormRow>
                        <EuiSpacer />
                        <EuiButton>Cetak sertifikat</EuiButton>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </div>
        </EuiPageTemplate>
    );
};

export default Sertifikat;
