import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps, cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils"
const getButtonVariants = (buttonType: 'brand' | 'neutral' | 'error' = 'brand') => {
    const brandVariants = cva(
        "inline-flex items-center justify-center gap-2 label-sm-medium rounded-xl",
        {
            variants: {
                variant: {
                    default: "bg-fill-brand-default text-fg-white shadow-xs hover:bg-fill-brand-strong active:ring-1  disabled:bg-fill-disabled disabled:text-fg-disabled",
                    secondary: "bg-fill-base text-fg-brand-default border border-border-brand-subtle  hover:bg-fill-brand-subtle active:text-fg-brand-strong active:ring-brand disabled:border-border-disabled disabled:text-fg-disabled",
                    link: "text-fg-brand-default  hover:text-fg-brand-strong [&_*]:fg-brand-default [&:hover_*]:fg-brand-strong disabled:text-fg-disabled [&_*]:disabled:bg-fill-disabled",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        }
    )

    const neutralVariants = cva(
        "inline-flex items-center justify-center gap-2 rounded-xl label-sm-medium",
        {
            variants: {
                variant: {
                    default: "bg-fill-default text-fg-inverted shadow-xs hover:bg-fill-strong active:ring-1 active:ring-neutral-700 disabled:bg-fill-disabled disabled:text-fg-disabled",
                    secondary: "bg-fill-base effects-shadow-5 text-fg-default border border-border-subtle hover:text-fg-strong hover:bg-fill-subtle active:ring-1 active:ring-neutral-600 disabled:bg-fill-disabled disabled:text-fg-disabled",
                    link: "text-fg-default hover:text-fg-strong  active:text-fg-default [&_*]:fg-neutral-default [&:hover_*]:fg-neutral-strong disabled:text-fg-disabled [&_*]:disabled:bg-fill-disabled",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        }
    )

    const errorVariants = cva(
        "inline-flex items-center justify-center gap-2 rounded-xl label-sm-medium",
        {
            variants: {
                variant: {
                    default: "bg-fill-error-default text-fg-white shadow-xs hover:bg-fill-error-strong active:ring-1 active:ring-red-500 disabled:bg-fill-disabled disabled:text-disabled cursor-pointer",
                    secondary: "bg-fill-base text-fg-error-default border border-border-error-subtle hover:text-fg-error-strong hover:bg-fill-error-subtle active:ring-1 active:ring-error disabled:bg-fill-disabled disabled:text-fg-disabled cursor-pointer",
                    link: "text-fg-error-default hover:text-fg-error-strong active:text-error-default [&_*]:fg-error-default [&:hover_*]:fg-error-strong disabled:text-neutral-disabled [&_*]:disabled:fg-neutral-disabled cursor-pointer",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        }
    )

    // Return the appropriate variants based on the buttonType
    if (buttonType === 'brand') {
        return brandVariants;
    } else if (buttonType === 'neutral') {
        return neutralVariants;
    } else if (buttonType === 'error') {
        return errorVariants;
    }

    // Default case to ensure the function always returns a value
    return brandVariants;
}

type ButtonSize = 'large' | 'medium' | 'small' | 'xsmall' | 'icon'

const getIconDimensions = (size: ButtonSize | null | undefined): { width: number; height: number } => {
    switch (size) {
        case 'large':
            return { width: 24, height: 24 }
        case 'medium':
            return { width: 20, height: 20 }
        case 'small':
            return { width: 16, height: 16 }
        case 'xsmall':
            return { width: 14, height: 14 }
        case 'icon':
            return { width: 20, height: 20 }
        default:
            return { width: 20, height: 20 }
    }
}

const getSizeClasses = (variant: string | null | undefined, size: ButtonSize | null | undefined): string => {
    if (!size) return 'px-4 py-3 label-md-medium'

    const linkSizes: Record<ButtonSize, string> = {
        large: cx('label-lg-medium'),
        medium: cx('label-md-medium'),
        small: cx('label-sm-medium'),
        xsmall: cx('label-xs-medium'),
        icon: cx("h-9 w-9"),
    }

    const buttonSizes: Record<ButtonSize, string> = {
        large: cx('px-5 py-4 label-lg-medium'),
        medium: cx('px-4 py-[14px] label-md-medium'),
        small: cx('px-[10px] py-3 label-sm-medium'),
        xsmall: cx('px-3 py-[10px] label-xs-medium'),
        icon: cx("h-9 w-9"),
    }

    return variant === 'link' ? linkSizes[size] : buttonSizes[size]
}

type IconType = string | React.ReactNode

interface IconProps {
    icon: IconType
    size: ButtonSize | undefined
    className?: string
    visible?: boolean
}

const IconComponent: React.FC<IconProps> = ({ icon, size, className, visible = true }) => {
    if (!visible) return null;

    const dimensions = getIconDimensions(size)

    if (typeof icon === 'string') {
        return (
            <Image
                src={icon}
                alt=""
                width={dimensions.width}
                height={dimensions.height}
                className={cn("object-contain", className)}
            />
        )
    }

    return <span className={cn("inline-flex shrink-0", className)}>{icon}</span>
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<ReturnType<typeof getButtonVariants>> {
    asChild?: boolean
    buttonType?: 'brand' | 'neutral' | 'error'
    href?: string
    target?: string
    rel?: string
    size?: ButtonSize
    leftIcon?: IconType
    rightIcon?: IconType
    showLeftIcon?: boolean  // New prop for left icon visibility
    showRightIcon?: boolean // New prop for right icon visibility
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            buttonType = 'brand',
            disabled,
            href,
            target,
            rel,
            leftIcon,
            rightIcon,
            showLeftIcon = true, // Default to true if not specified
            showRightIcon = true, // Default to true if not specified
            children,
            ...props
        },
        ref
    ) => {
        const buttonVariants = getButtonVariants(buttonType);

        // Ensure `buttonVariants` is callable
        const variantClasses = buttonVariants
            ? twMerge(buttonVariants({ variant, className }))
            : "";

        const Comp = asChild ? Slot : "button";

        const buttonContent = (
            <>
                {leftIcon && (
                    <IconComponent
                        icon={leftIcon}
                        size={size}
                        className=""
                        visible={showLeftIcon}
                    />
                )}
                {children}
                {rightIcon && (
                    <IconComponent
                        icon={rightIcon}
                        size={size}
                        className=""
                        visible={showRightIcon}
                    />
                )}
            </>
        );

        const commonProps = {
            className: cn(variantClasses, getSizeClasses(variant, size)),
            ...props,
        };

        if (href) {
            const linkProps = {
                href,
                target,
                rel: rel ?? (target === "_blank" ? "noopener noreferrer" : undefined),
            };

            return (
                <Link {...linkProps} passHref legacyBehavior>
                    <Comp ref={ref} role="button" disabled={disabled} {...commonProps}>
                        {buttonContent}
                    </Comp>
                </Link>
            );
        }

        return (
            <Comp ref={ref} disabled={disabled} {...commonProps}>
                {buttonContent}
            </Comp>
        );
    }
);

Button.displayName = "Button"

export { Button, getButtonVariants }