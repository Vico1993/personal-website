import { ReactElement } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SocialLink({ icon, label, link }: SocialLinkProps) {
    if (!link)
        return (
            <span className="block my-5 rounded-[20px]">
                {icon} {label}
            </span>
        )

    return (
        <span className="block my-5 rounded-[20px]">
            {" "}
            <Button
                variant="link"
                asChild
                className={cn(
                    "h-auto p-0 text-foreground hover:text-foreground hover:no-underline"
                )}
            >
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {icon} {label}
                </a>
            </Button>
        </span>
    )
}

interface SocialLinkProps {
    icon: ReactElement
    label: string
    link?: string
}
