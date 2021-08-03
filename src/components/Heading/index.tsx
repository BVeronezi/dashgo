import { Heading } from "@chakra-ui/react";

interface HeadingsProps {
    title: string;
}

export function Headings({ title }: HeadingsProps) {
    return (
        <Heading size="lg" fontWeight="normal">{title}</Heading>
    )
}