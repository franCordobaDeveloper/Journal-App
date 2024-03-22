import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

// eslint-disable-next-line react/prop-types
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/* NavBar */}
        <NavBar drawerWidth = { drawerWidth } />
        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth } />
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            {/* ToolBar */}
            <Toolbar />
            { children }
        </Box>
    </Box>
  )
}
