import { BarChart3Icon, FileTextIcon, GaugeIcon, QrCodeIcon, ScanLineIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        icon: GaugeIcon,
        items: [
            {
                title: "Link Shortening",
                href: "/features/link-shortening",
                description: "Shorten your links and track their performance.",
                icon: ScanLineIcon,
            },
            {
                title: "QR Codes",
                href: "/features/qr-codes",
                description: "Generate QR codes for your links.",
                icon: QrCodeIcon,
            },
            {
                title: "Analytics",
                href: "/features/analytics",
                description: "Track your links performance with detailed analytics.",
                icon: BarChart3Icon,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
        icon: FileTextIcon,
    },
    {
        title: "About",
        href: "/about",
        icon: FileTextIcon,
    },
    {
        title: "Resources",
        icon: FileTextIcon,
        items: [
            {
                title: "Documentation",
                href: "/resources/docs",
                description: "Learn how to use our platform.",
                icon: FileTextIcon,
            },
            {
                title: "Help Center",
                href: "/resources/help",
                description: "Get help with your account.",
                icon: FileTextIcon,
            },
        ],
    },
]; 