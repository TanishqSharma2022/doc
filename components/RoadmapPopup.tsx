"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { useEffect, useCallback } from "react"
// import { RoadmapdialogQueryResult } from "../../sanity.types"
// import { urlFor } from "@/sanity/lib/image"

// interface FeatureModalProps {
//     isOpen: boolean
//     onClose: () => void
//     data: RoadmapdialogQueryResult
// }

export function RoadmapModal({ isOpen, onClose, data }:any) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }, [onClose])

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out"
                    onClick={handleBackdropClick}
                />

                <Dialog.Content
                    className="fixed inset-0 flex justify-center items-start overflow-y-auto p-3 sm:p-6 md:p-8 lg:p-12"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-full max-w-[90%] sm:max-w-[640px] md:max-w-[720px] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
                        {/* Close Button */}
                        <Dialog.Close
                            className="absolute top-1.5 right-1.5 sm:top-3 sm:right-2 rounded-full p-0.5 lg:p-2 bg-fill-subtle hover:bg-gray-100 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="0"
                                height="0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 lg:h-4 lg:w-4"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Close</span>
                        </Dialog.Close>

                        {/* Content */}
                        <div>
                            <Dialog.Title className="mb-8">
                                <div className="space-y-1">
                                    <div className="text-sm-medium text-fg-weak mb-2">
                                        {data?.date || "Feb 10, 2024"}
                                    </div>
                                    <h2 className="display-sm-bold text-fg-strong mb-3">
                                        {data?.title || ""}
                                    </h2>
                                </div>
                                <p className="text-fg-default text-sm-regular">{data?.description || ""}</p>
                            </Dialog.Title>
                        </div>
        {JSON.stringify(data)}
                        {/* Image Section */}
                        <div className="mb-8">
                            <img
                                src={"#"}
                                alt="Feature illustration"
                                className="rounded-xl w-full"
                            />
                        </div>

                        {/* Highlights */}
                        <div className="mb-8">
                            <Dialog.Description className="display-sm-bold text-fg-strong mb-4">
                                Highlights
                            </Dialog.Description>
                            <p className="text-fg-default text-sm-regular">{data?.highlights || ""}</p>
                        </div>

                        {/* New Features */}
                        {/* <div className="my-8">
                            <h3 className="text-fg-default display-xs-semibold mb-4">
                                New Features
                            </h3>
                            <ul className="space-y-4">
                                {data?.newFeatures?.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-fg-weak text-sm-regular">
                                        <span className="text-xs">✱</span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* Bug Fixes */}
                        {/* <div className="">
                            <h3 className="text-fg-default display-xs-semibold mb-4">
                                Bug & Issues Fixes
                            </h3>
                            <ul className="space-y-4">
                                {data?.bugFixes?.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-fg-weak text-sm-regular">
                                        <span className="text-xs">✱</span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}