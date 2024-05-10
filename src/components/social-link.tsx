import { Anchor } from "@zendeskgarden/react-buttons";
import styled from "styled-components";
import React from "react";
import { PALETTE } from "@zendeskgarden/react-theming";

interface SocialLinkProps {
    icon: JSX.Element;
    link: string;
    label: string;
}

const SpanStyled = styled.span({
    border: `1px solid ${PALETTE.grey[400]}`,
    borderRadius: "20px",
    padding: "5px 10px",
    margin: "0px 5px",
});

const AnchorStyled = styled(Anchor)({
    marginLeft: "5px",
    color: PALETTE.black,

    ":hover": {
        color: PALETTE.black,
        textDecoration: "none",
    },
});

export default function SocialLink({ icon, label, link }: SocialLinkProps) {
    return (
        <SpanStyled>
            {icon}
            <AnchorStyled href={link} target="_blank">
                {label}
            </AnchorStyled>
        </SpanStyled>
    );
}
