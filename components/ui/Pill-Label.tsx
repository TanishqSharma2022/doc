import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from "class-variance-authority";
import Image from 'next/image';
import { cn } from '@/lib/utils';

type IconType = React.ComponentType | string;

// Helper function to check if string is an SVG file path
const isSvgPath = (str: string): boolean => {
    return str.toLowerCase().endsWith('.svg');
};

// Icon renderer component
const IconRenderer = ({ icon, className }: { icon: IconType; className?: string }) => {
    if (!icon) return null;

    // Handle SVG file paths
    if (typeof icon === 'string' && isSvgPath(icon)) {
        return <Image src={icon} alt="" width={14} height={14} className={className} />;
    }

    // Handle React Components (including Lucide icons)
    if (typeof icon === 'function') {
        const IconComponent = icon as React.ComponentType<{ className?: string }>;
        return <IconComponent className={className} />;
    }

    return null;
};

const pillVariants = cva(
    "inline-flex items-center gap-1.5 rounded-full px-2 py-2 md:px-1.5 md:py-0.5  shadow-sm border border-border-subtle",
    {
        variants: {
            variant: {
                default: "bg-fill-base text-fg-weak label-md-medium",
                neutral: "bg-gray-100 text-gray-700",
                success: "bg-green-100 text-green-700",
                warning: "bg-yellow-100 text-yellow-700",
                error: "bg-red-100 text-red-700",
                info: "bg-blue-100 text-blue-700",
                inner: "bg-fill-subtle text-fg-default shadow-none label-sm-medium",
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

interface PillLabelProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {
    leftIcon?: IconType;
    text: string;
    innerPill?: {
        icon: IconType;
        text: string;
    };
}

const PillLabel = ({
    text,
    leftIcon,
    innerPill,
    variant,
    className,
    ...props
}: PillLabelProps) => {
    return (
        <div
            className={cn(
                pillVariants({ variant, className }),
                "pl-1.5 py-1.5 pr-3 sm:px-3 sm:py-1.5 h-[36px] md:pl-1.5 md:py-1.5 md:pr-3"
            )}
            {...props}
        >
            {innerPill && (
                <div className={cn(
                    pillVariants({ variant: 'inner' }),
                    "flex items-center gap-1 px-1.5 py-0.5"
                )}>
                    {innerPill.icon && (
                        <Slot className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5">
                            <IconRenderer icon={innerPill.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                        </Slot>
                    )}
                    <span className="text-sm-medium text-fg-default">{innerPill.text}</span>
                </div>
            )}
            <span className="label-md-medium  text-fg-weak">{text}</span>
        </div>
    );
};

export { PillLabel, type PillLabelProps, type IconType };