import React from 'react'
import {
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/core'

export const InfoButton = ({
    variantColor,
    title,
    icon,
    placement,
    children,
}) => (
    <Popover placement={placement}>
        <PopoverTrigger>
            <IconButton
                size="sm"
                icon={icon}
                variantColor={variantColor}
                aria-label={title}
            />
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>{title}</PopoverHeader>
            <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
    </Popover>
)
