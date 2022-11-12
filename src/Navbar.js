import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Link } from 'react-router-dom';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Groups3Icon from '@mui/icons-material/Groups3';
import BungalowIcon from '@mui/icons-material/Bungalow';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const withLink = (to, children) => <Link style={{ color: "#4D1802" }} to={to}>{children}</Link>;

const actions = [
    { icon: withLink("/", <BungalowIcon />), name: 'Home', },
    { icon: withLink("/about", <WorkspacesIcon />), name: 'About Us' },
    { icon: withLink("/contact", <Groups3Icon />), name: 'Contact Us' },
];

function NavBar() {
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 200 }}
                icon={<SpeedDialIcon color='action' openIcon={<CoffeeIcon />} />}
                FabProps={{
                    sx: {
                        bgcolor: '#4D1802',
                        color: 'wheat',
                        '&:hover': {
                            bgcolor: '#4D1802',
                            color: 'wheat'
                        },
                    }
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction

                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        FabProps={{
                            sx: {
                                bgcolor: "wheat",
                                '&:hover': {
                                    bgcolor: "#E3BF78"
                                }
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </>
    )
}

export default NavBar;