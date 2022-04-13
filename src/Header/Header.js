
import { AppBar, Toolbar,Button} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
const theme = createTheme({
  root: {
    color: "#87644B"
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FFFFFF',
    },
  },
  typography: {
    fontSize: 17,
    fontFamily: [
      'Georgia',
    ].join(','),
    button: {
      textTransform: 'none',
      color: "#87644B",
    },
  }
});

export function Header(){

    const headersData = [
        {
            label: "Myself",
            href: "/",
          },
        {
          label: "Portfolio",
          href: "/portfolio",
        },
        {
          label: "Education",
          href: "/education",
        },
        {
          label: "Projects",
          href: "/projects",
        },
        
      ];

      const getMenuButtons = () => {
        
        return headersData.map(({ label, href }) => {
         
          return (
            
<Button
              {...{
                key: label,
                color: "#87644B",
                to: href,
                component: RouterLink,
                
              }}
            >
              {label}
            </Button>
            
           
            
          );
   
        });
      };

      const displayDesktop = () => {
        return <Toolbar >{getMenuButtons()}</Toolbar>;
      };
    return(
      <ThemeProvider theme={theme}>
      <div style={{color: "red"}}>
      <header className="header">
            <AppBar>{displayDesktop()}</AppBar>
       </header></div>
       </ThemeProvider>
       
    ); 
}

