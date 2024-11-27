import { Anchor } from "@zendeskgarden/react-buttons";
import styled from "styled-components";
import { PALETTE } from "@zendeskgarden/react-theming";
import { ReactElement } from "react";

interface SocialLinkProps {
    icon: ReactElement;
    label: string;
    link?: string;
}

const SpanStyled = styled.span({
    borderRadius: "20px",
    margin: "20px 0px",
    display: "block",
});

const AnchorStyled = styled(Anchor)({
    color: PALETTE.black,

    ":hover": {
        color: PALETTE.black,
        textDecoration: "none",
    },
});

export default function SocialLink({ icon, label, link }: SocialLinkProps) {
    return (
        <SpanStyled>
            {icon}{" "}
            {link ? (
                <AnchorStyled href={link} target="_blank">
                    {label}
                </AnchorStyled>
            ) : (
                label
            )}
        </SpanStyled>
    );
}
