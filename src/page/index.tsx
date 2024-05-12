/// <reference types="vite-plugin-svgr/client" />

import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";
import XIcon from "@zendeskgarden/svg-icons/src/16/twitter-fill.svg?react";
import LinkedinIcon from "@zendeskgarden/svg-icons/src/16/linkedin-fill.svg?react";
import GithubinIcon from "@zendeskgarden/svg-icons/src/16/github-fill.svg?react";
import MailIcon from "@zendeskgarden/svg-icons/src/16/email-fill.svg?react";
import { XL, LG, MD } from "@zendeskgarden/react-typography";
import { PALETTE } from "@zendeskgarden/react-theming";

import SocialLink from "../components/social-link";

const StyledGrid = styled(Grid)({
    fontFamily: "monospace",
    maxWidth: "1100px",
});

const StyledRow = styled(Row)({
    marginBottom: "40px",
});

const StyledH1 = styled.h1({
    fontSize: "30px",
    marginBottom: "0px",
});

const SVGStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "text-top",
    color: PALETTE.orange["400"],
};

const DescriptionLineRow = styled(Row)({
    marginBottom: "10px",

    "&:.last": {
        marginBottom: "40px",
    },
});

export default function Index() {
    // Retrieve current year for the footer
    const currentYear = new Date().getFullYear();

    const descriptionLines: JSX.Element[] = [
        <>
            Driven by a boundless{" "}
            <b style={{ color: PALETTE.orange["400"] }}>curiosity</b> and a
            hunger for <b style={{ color: PALETTE.orange["400"] }}>growth</b>,
        </>,
        <>
            I thrive on the challenge of pushing boundaries and exploring new
            horizons.
        </>,
        <>
            Committed to leaving a lasting impact through{" "}
            <b style={{ color: PALETTE.orange["400"] }}>technology</b> and{" "}
            <b style={{ color: PALETTE.orange["400"] }}>entrepreneurship</b>,
        </>,
        <>
            I embrace each opportunity as a stepping stone towards my vision of{" "}
            <b style={{ color: PALETTE.orange["400"] }}>success</b>.
        </>,
    ];

    return (
        <StyledGrid>
            <StyledRow>
                <Col>
                    <StyledH1>Victor Piolin</StyledH1>
                </Col>
            </StyledRow>
            {descriptionLines.map((line, index) => (
                <DescriptionLineRow
                    className="description-line"
                    style={
                        index + 1 === descriptionLines.length
                            ? { marginBottom: "40px" }
                            : {}
                    }
                >
                    <Col>
                        <XL>{line}</XL>
                    </Col>
                </DescriptionLineRow>
            ))}
            <StyledRow className="quote" style={{ fontStyle: "italic" }}>
                <Col>
                    <MD style={{ marginBottom: "10px" }}>
                        Otto von bismarck:{" "}
                    </MD>
                    <LG>
                        Fools learn from experience. I prefer to learn from the
                        experience of others.
                    </LG>
                </Col>
            </StyledRow>
            <StyledRow className="social-network">
                <Col>
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
                    <SocialLink
                        icon={<MailIcon style={SVGStyle} />}
                        link=""
                        label="victor.piolin@gmail.com"
                    />
                </Col>
            </StyledRow>
            <StyledRow className="footer">
                <Col>
                    © {currentYear}{" "}
                    <span style={{ color: PALETTE.orange["400"] }}>
                        Victor Piolin
                    </span>
                </Col>
            </StyledRow>
        </StyledGrid>
    );
}
