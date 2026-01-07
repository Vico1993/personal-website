import { ReactElement } from "react"
import { X, Github, Linkedin, Mail } from "lucide-react"
import { SocialLink } from "@/components/social-link"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const descriptionLines: ReactElement[] = [
    <>
        Driven by a boundless <b className="text-orange-400">curiosity</b> and a
        hunger for <b className="text-orange-400">growth</b>,
    </>,
    <>
        I thrive on the challenge of pushing boundaries and exploring new
        horizons.
    </>,
    <>
        Committed to leaving a lasting impact through{" "}
        <b className="text-orange-400">technology</b> and{" "}
        <strong className="text-orange-400">entrepreneurship</strong>,
    </>,
    <>
        I embrace each opportunity as a stepping stone towards my vision of{" "}
        <b className="text-orange-400">success</b>.
    </>,
]

export function IndexPage() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="font-mono w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-[30px] mb-0">
                        Victor Piolin
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2.5">
                    {descriptionLines.map((line, index) => (
                        <p
                            key={`line-${index}`}
                            className={`text-xl ${
                                index + 1 === descriptionLines.length
                                    ? "mb-6"
                                    : ""
                            }`}
                        >
                            {line}
                        </p>
                    ))}
                </CardContent>
                <CardContent>
                    <SocialLink
                        icon={
                            <X className="inline-block align-text-top text-orange-400" />
                        }
                        link="https://twitter.com/VPiolin"
                        label="@VPiolin"
                    />
                    <SocialLink
                        icon={
                            <Github className="inline-block align-text-top text-orange-400" />
                        }
                        link="https://github.com/Vico1993"
                        label="@Vico1993"
                    />
                    <SocialLink
                        icon={
                            <Linkedin className="inline-block align-text-top text-orange-400" />
                        }
                        link="https://www.linkedin.com/in/victor-piolin-77322091/"
                        label="@VPiolin"
                    />
                    <SocialLink
                        icon={
                            <Mail className="inline-block align-text-top text-orange-400" />
                        }
                        link=""
                        label="victor.piolin@gmail.com"
                    />
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground">
                        © {currentYear}{" "}
                        <span className="text-orange-400">Victor Piolin</span>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
