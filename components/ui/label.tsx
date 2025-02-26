import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from "class-variance-authority";
import Image from 'next/image';
import { cn } from '@/lib/utils';

type IconType =
    | React.ComponentType
    | React.ReactNode
    | string;

const isImageUrl = (str: string): boolean => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(str);
};

const isSvgPath = (str: string): boolean => {
    return str.endsWith('.svg');
};

const IconRenderer = ({ icon }: { icon: IconType }) => {
    if (!icon) return null;

    // Handle React Components (including Lucide icons)
    if (typeof icon === 'function') {
        const IconComponent = icon as React.ComponentType;
        return <IconComponent />;
    }

    // Handle image URLs and SVG files
    if (typeof icon === 'string') {
        if (isImageUrl(icon) || isSvgPath(icon)) {
            return <Image src={icon} alt="" width={16} height={16} />;
        }
    }

    // Handle direct ReactNode (JSX elements)
    return <>{icon}</>;
};

const pillVariants = cva(
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium effects-shadow-5",
    {
        variants: {
            variant: {
                neutral: "bg-sf-base text-fg-weak border-border-subtle border",
                brand: "bg-fill-brand-subtle text-fg-brand-default border-border-brand-subtle border",
            }
        },
        defaultVariants: {
            variant: "neutral"
        }
    }
);

interface PaymentPillProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {
    leftIcon?: IconType;
    rightIcon?: IconType;
}

const PaymentPill = ({
    children,
    leftIcon,
    rightIcon,
    variant,
    className,
    ...props
}: PaymentPillProps) => {
    return (
        <div
            className={cn(pillVariants({ variant, className }))}
            {...props}
        >
            {leftIcon && (
                <Slot className="h-4 w-4">
                    <IconRenderer icon={leftIcon} />
                </Slot>
            )}
            {children}
            {rightIcon && (
                <Slot className="h-4 w-4">
                    <IconRenderer icon={rightIcon} />
                </Slot>
            )}
        </div>
    );
};

export default PaymentPill;