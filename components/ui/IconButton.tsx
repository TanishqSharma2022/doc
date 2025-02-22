import * as React from "react"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const getIconVariants = (iconType: 'brand' | 'neutral' | 'error' = 'brand') => {
    const brandVariants = cva(
        "inline-flex items-center justify-center",
        {
            variants: {
                variant: {
                    default: "bg-fill-brand-default text-fg-white shadow-xs hover:bg-fill-brand-strong   disabled:bg-fill-disabled disabled:text-fg-disabled",
                    secondary: "bg-fill-base text-fg-brand-default border border-border-brand-subtle effects-shadow-10 hover:bg-fill-brand-subtle active:text-fg-brand-strong  disabled:border-border-disabled disabled:text-fg-disabled",
                    link: "text-fg-brand-default  hover:text-fg-brand-strong [&_*]:fg-brand-default [&:hover_*]:fg-brand-strong disabled:text-fg-disabled [&_*]:disabled:bg-fill-disabled",
                    disabled: "text-fg-disabled bg-fill-disabled",
                },
                size: {
                    large: "p-4 rounded-2xl w-14 h-14",
                    medium: "p-[14px] rounded-xl w-12 h-12",
                    small: "p-[10px] rounded-[10px] w-10 h-10",
                    xsmall: "p-1.5 rounded-md w-8 h-8",
                }
            },
            defaultVariants: {
                variant: "default",
                size: "medium"
            },
        }
    )

    const neutralVariants = cva(
        "inline-flex items-center justify-center",
        {
            variants: {
                variant: {
                    default: "bg-fill-default text-fg-inverted shadow-xs hover:bg-fill-strong  disabled:bg-fill-disabled disabled:text-fg-disabled",
                    secondary: "bg-fill-base text-fg-default border border-border-subtle hover:text-fg-strong hover:bg-fill-subtle  disabled:bg-fill-disabled disabled:text-fg-disabled cursor-pointer",
                    link: "text-fg-default hover:text-fg-strong  active:text-fg-default [&_*]:fg-neutral-default [&:hover_*]:fg-neutral-strong disabled:text-fg-disabled [&_*]:disabled:bg-fill-disabled",
                    disabled: "text-fg-disabled",
                },
                size: {
                    large: "p-4 rounded-2xl w-14 h-14",
                    medium: "p-[14px] rounded-xl w-12 h-12",
                    small: "p-[10px] rounded-[10px] w-10 h-10",
                    xsmall: "p-1.5 rounded-md w-8 h-8",
                }
            },
            defaultVariants: {
                variant: "default",
                size: "medium"
            },
        }
    )

    const errorVariants = cva(
        "inline-flex items-center justify-center",
        {
            variants: {
                variant: {
                    default: "bg-fill-error-default text-fg-white shadow-xs hover:bg-fill-error-strong  disabled:bg-fill-disabled disabled:text-disabled cursor-pointer",
                    secondary: "bg-fill-base text-fg-error-default border border-border-error-subtle hover:text-fg-error-strong hover:bg-fill-error-subtle  disabled:bg-fill-disabled disabled:text-fg-disabled cursor-pointer",
                    link: "text-fg-error-default hover:text-fg-error-strong active:text-error-default [&_*]:fg-error-default [&:hover_*]:fg-error-strong disabled:text-neutral-disabled [&_*]:disabled:fg-neutral-disabled cursor-pointer",
                    disabled: "text-fg-disabled",
                },
                size: {
                    large: "p-4 rounded-2xl w-14 h-14",
                    medium: "p-[14px] rounded-xl w-12 h-12",
                    small: "p-[10px] rounded-[10px] w-10 h-10",
                    xsmall: "p-1.5 rounded-md w-8 h-8",
                }
            },
            defaultVariants: {
                variant: "default",
                size: "medium"
            },
        }
    )

    if (iconType === 'brand') {
        return brandVariants;
    } else if (iconType === 'neutral') {
        return neutralVariants;
    } else if (iconType === 'error') {
        return errorVariants;
    }

    return brandVariants;
}

type IconSize = 'large' | 'medium' | 'small' | 'xsmall'

const getIconDimensions = (size: IconSize | undefined): { width: number; height: number } => {
    switch (size) {
        case 'large':
            return { width: 24, height: 24 }
        case 'medium':
            return { width: 20, height: 20 }
        case 'small':
            return { width: 20, height: 20 }
        case 'xsmall':
            return { width: 20, height: 20 }
        default:
            return { width: 20, height: 20 }
    }
}

type IconType = string | React.ReactNode

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<ReturnType<typeof getIconVariants>> {
    icon: IconType
    iconType?: 'brand' | 'neutral' | 'error'
    size?: IconSize
    disabled?: boolean
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
    (
        {
            className,
            icon,
            iconType = 'brand',
            variant,
            size = 'medium',
            disabled,
            ...props
        },
        ref
    ) => {
        const iconVariants = getIconVariants(iconType)
        const dimensions = getIconDimensions(size)

        // If disabled, override the variant
        const effectiveVariant = disabled ? 'disabled' : variant

        const IconWrapper = () => {
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
            return <>{icon}</>
        }

        return (
            <span
                ref={ref}
                className={cn(
                    iconVariants({
                        variant: effectiveVariant,
                        size
                    }),
                    className
                )}
                {...props}
            >
                <IconWrapper />
            </span>
        )
    }
)

Icon.displayName = "Icon"

export { Icon, getIconVariants }