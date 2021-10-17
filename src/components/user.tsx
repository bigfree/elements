import React, { FC } from "react";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { computeLoginUrl, isLogged } from "../services/auth";
import { UserComponentPropsType, userMenuType } from "../types";

const User: FC<UserComponentPropsType> = ({ data }: UserComponentPropsType): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const logged = isLogged();

    /** Menu items initialize */
    let menuItems: userMenuType[];

    /**
     * Handle click avatar menu
     * @param {React.MouseEvent<HTMLElement>} event
     */
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * Handle close avatar menu
     */
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Create MenuItem by user is logged
    menuItems = [{
        icon: <AccountCircleIcon fontSize={'small'}/>,
        name: data?.display_name ?? '',
        divider: true,
    }];

    menuItems = logged ? [
        ...menuItems,
        {
            icon: <LogoutIcon fontSize={'small'}/>,
            name: 'Logout',
        },
        {
            icon: <ExitToAppIcon fontSize={'small'}/>,
            name: 'Open in APP',
        }
    ] : [
        ...menuItems,
        {
            icon: <LoginIcon fontSize={'small'}/>,
            name: 'Sign in',
            onClick: computeLoginUrl,
        }
    ];

    return (
        <React.Fragment>
            <IconButton
                size={'small'}
                onClick={handleClick}
            >
                <Avatar
                    alt={data?.display_name}
                    src={data?.images?.[0].url}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    sx: {
                        mt: 1,
                    }
                }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {menuItems.map((item: userMenuType, index: number) => (
                    <MenuItem onClick={item.onClick} divider={item.divider ?? false} key={index}>
                        {item.icon ? (
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                        ) : ''}
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )
}

export default User