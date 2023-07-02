import {
  AppBar,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {useRef, forwardRef, useState, useLayoutEffect} from "react";
import { NAVBAR_HEIGHT } from "../../../constants";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { navbarContent } from "../../../utils/content";
import LaunchButton from "../Buttons/LaunchButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const { Logo } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = forwardRef((props,ref) => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    const preScroll = useRef(null);
    const elemRef = useRef(null);
    let initialHeight = "5vw";
    const [height, setHeight] = useState(initialHeight);

    useLayoutEffect(() => {
        const botPos = (element) => element.getBoundingClientRect().bottom;
        const onScroll = () => {
            const divBotPos = botPos(elemRef.current);


            preScroll.current = window.scrollY;

            if (divBotPos < window.innerHeight) {
                    setHeight("4vw");
            }
            if (preScroll.current ===0) {
                setHeight("5vw");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const handleButtonClick = () => {
        //console.log("Handle Button Click");
        ref.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
        console.log("Handle Button Click");
    };
    return (
        <AppBar
            ref={elemRef}
            elevation={0}
            sx={{
                py: 1,
                height: NAVBAR_HEIGHT,
                bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
                backdropFilter: scrollPosition > 10 && "blur(60px)",
            }}
        >
            <Container

                sx={{
                    [theme.breakpoints.up("lg")]: {
                        maxWidth: "1380px!important",
                    },
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    {/* Logo */}
                    <img  src={Logo} style={{transition: "transform 1000ms ease-in-out",
                        height: isMobile?"10vw":`${height}`, objectFit: "contain"}}/>

                    {/* Links */}
                    {/*{!isMobile && (*/}
                    {/*  <Stack*/}
                    {/*    direction="row"*/}
                    {/*    alignItems="center"*/}
                    {/*    justifyContent="center"*/}
                    {/*    spacing={6}*/}
                    {/*    sx={{ flex: 1 }}*/}
                    {/*    flexWrap="wrap"*/}
                    {/*  >*/}
                    {/*    <LinkButton>*/}
                    {/*      <Typography variant="body2">Products</Typography>*/}
                    {/*      <KeyboardArrowDownIcon fontSize="small" />*/}
                    {/*    </LinkButton>*/}

                    {/*    <LinkButton>*/}
                    {/*      <Typography variant="body2">Developers</Typography>*/}
                    {/*      <KeyboardArrowDownIcon fontSize="small" />*/}
                    {/*    </LinkButton>*/}

                    {/*    <LinkButton>*/}
                    {/*      <Typography variant="body2">Governance</Typography>*/}
                    {/*      <KeyboardArrowDownIcon fontSize="small" />*/}
                    {/*    </LinkButton>*/}

                    {/*    <LinkButton>*/}
                    {/*      <Typography variant="body2">About</Typography>*/}
                    {/*      <KeyboardArrowDownIcon fontSize="small" />*/}
                    {/*    </LinkButton>*/}

                    {/*    <LinkButton spacing={0.5}>*/}
                    {/*      <Typography variant="body2">Blog</Typography>*/}
                    {/*      <CallMadeIcon sx={{ fontSize: 12 }} />*/}
                    {/*    </LinkButton>*/}
                    {/*  </Stack>*/}
                    {/*)}*/}

                    {/* Action Buttons */}

                        <Stack direction="row" spacing={5} alignItems="center">

                            <LaunchButton sx={{borderRadius: 3 }} onClick={handleButtonClick} text="Get Started" icon={KeyboardArrowRightIcon}/>
                        </Stack>

                </Stack>
            </Container>
        </AppBar>
    );
});

export default Navbar;
