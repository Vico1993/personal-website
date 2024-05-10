/// <reference types="vite-plugin-svgr/client" />

import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";
import XIcon from "@zendeskgarden/svg-icons/src/16/twitter-fill.svg?react";
import LinkedinIcon from "@zendeskgarden/svg-icons/src/16/linkedin-fill.svg?react";
import GithubinIcon from "@zendeskgarden/svg-icons/src/16/github-fill.svg?react";

import SocialLink from "../components/social-link";
import { XL, XXL, XXXL } from "@zendeskgarden/react-typography";

const StyledRow = styled(Row)({
    marginBottom: "20px",
});

export default function Index() {
    // Retrieve current year for the footer
    const currentYear = new Date().getFullYear();

    const SVGStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "text-top",
    };

    return (
        <Grid>
            <StyledRow>
                <Col textAlign="center">
                    <h1>Victor Piolin</h1>
                </Col>
            </StyledRow>
            <StyledRow>
                <Col textAlign="center">
                    <XXXL>
                        Fools learn from experience.
                        <br />
                        I prefer to learn from the experience of others.
                        <br />
                    </XXXL>
                    <XL style={{ marginTop: "10px" }}>Otto von bismarck</XL>
                </Col>
            </StyledRow>
            <StyledRow className="social-network">
                <Col textAlign="center">
                    <SocialLink
                        icon={<XIcon style={SVGStyle} />}
                        link="https://github.com/Vico1993"
                        label="@Vico1993"
                    />
                    <SocialLink
                        icon={<GithubinIcon style={SVGStyle} />}
                        link="https://twitter.com/VPiolin"
                        label="@VPiolin"
                    />
                    <SocialLink
                        icon={<LinkedinIcon style={SVGStyle} />}
                        link="https://www.linkedin.com/in/victor-piolin-77322091/"
                        label="@VPiolin"
                    />
                </Col>
            </StyledRow>
            <StyledRow className="footer">
                <Col textAlign="center">© {currentYear} Victor Piolin</Col>
            </StyledRow>
        </Grid>
    );
}
