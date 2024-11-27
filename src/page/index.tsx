/// <reference types="vite-plugin-svgr/client" />

import { CSSProperties, ReactElement } from "react";
import styled from "styled-components";
import { Grid } from "@zendeskgarden/react-grid";
import XIcon from "@zendeskgarden/svg-icons/src/16/twitter-fill.svg?react";
import LinkedinIcon from "@zendeskgarden/svg-icons/src/16/linkedin-fill.svg?react";
import GithubinIcon from "@zendeskgarden/svg-icons/src/16/github-fill.svg?react";
import MailIcon from "@zendeskgarden/svg-icons/src/16/email-fill.svg?react";
import { XL, LG, MD } from "@zendeskgarden/react-typography";
import { PALETTE } from "@zendeskgarden/react-theming";
import SocialLink from "@/components/social-link";

const StyledGrid = styled(Grid)({
    fontFamily: "monospace",
    maxWidth: "1100px",
});

const StyledRow = styled(Grid.Row)({
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

const DescriptionLineRow = styled(Grid.Row)({
    marginBottom: "10px",

    "&:.last": {
        marginBottom: "40px",
    },
});

export default function Index() {
    // Retrieve current year for the footer
    const currentYear = new Date().getFullYear();

    const descriptionLines: ReactElement[] = [
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
                <Grid.Col>
                    <StyledH1>Victor Piolin</StyledH1>
                </Grid.Col>
            </StyledRow>
            {descriptionLines.map((line, index) => (
                <DescriptionLineRow
                    key={`line-${index}`}
                    className="description-line"
                    style={
                        index + 1 === descriptionLines.length
                            ? { marginBottom: "40px" }
                            : {}
                    }
                >
                    <Grid.Col>
                        <XL>{line}</XL>
                    </Grid.Col>
                </DescriptionLineRow>
            ))}
            <StyledRow className="quote" style={{ fontStyle: "italic" }}>
                <Grid.Col>
                    <MD style={{ marginBottom: "10px" }}>
                        Otto von bismarck:{" "}
                    </MD>
                    <LG>
                        Fools learn from experience. I prefer to learn from the
                        experience of others.
                    </LG>
                </Grid.Col>
            </StyledRow>
            <StyledRow className="social-network">
                <Grid.Col>
                    <SocialLink
                        icon={<XIcon style={SVGStyle} />}
                        link="https://twitter.com/VPiolin"
                        label="@VPiolin"
                    />
                    <SocialLink
                        icon={<GithubinIcon style={SVGStyle} />}
                        link="https://github.com/Vico1993"
                        label="@Vico1993"
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
                </Grid.Col>
            </StyledRow>
            <StyledRow className="footer">
                <Grid.Col>
                    © {currentYear}{" "}
                    <span style={{ color: PALETTE.orange["400"] }}>
                        Victor Piolin
                    </span>
                </Grid.Col>
            </StyledRow>
        </StyledGrid>
    );
}
