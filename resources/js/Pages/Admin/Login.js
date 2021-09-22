import { EuiFieldPassword, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormLabel, EuiFormRow, EuiPageTemplate, EuiSpacer } from "@elastic/eui";
import React from "react";
import Header from "../../components/Header";


const Login = ()=>{
    return (
        <EuiPageTemplate style={{marginTop: 50}}>
            <Header/>
            <EuiSpacer size={'xxl'}/>
            <EuiFlexGroup justifyContent={'center'} alignItems={'center'}>
                <EuiFlexItem grow={false}>
                    <EuiFormRow label="Email" fullWidth>
                        <EuiFieldText fullWidth/>
                    </EuiFormRow>
                    <EuiFormRow label="Password" fullWidth>
                        <EuiFieldPassword fullWidth/>
                    </EuiFormRow>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate>
    )
}

export default Login;
