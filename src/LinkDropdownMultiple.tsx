import React, { useState } from 'react';

import { Link, ListItemText, Menu, MenuItem, styled } from '@mui/material';


export function LinkDropdownMultiple() {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl !== null);
    const internalId = "id";
    const display = "Choose an option"

    // This actually will always be a button element, but Typescript sees Link and thinks it will be an
    // anchor element, even though link has a component of button
    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleMenuItemClick(opt: any) {
        console.log("Clicked opt=", opt);
    }
    const menuId = `${internalId}-menu`;
    return (
       <>
            <Link
                component="button"
                id={internalId}
                aria-controls={menuId}
                aria-haspopup="true"
                href={undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {display}
            </Link>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                aria-text="Menu with two items."
                open={open}
                onClose={handleClose}
                disableAutoFocusItem
                MenuListProps={{
                    'aria-labelledby': internalId,
                }}>
                    <MenuItem
                        onClick={() => {
                            handleMenuItemClick('Option1');
                        }}>
                        <ListItemText>Option1</ListItemText>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleMenuItemClick('Option2');
                        }}>
                        <ListItemText>Option2</ListItemText>
                    </MenuItem>

            </Menu>
        </>
    );
}
