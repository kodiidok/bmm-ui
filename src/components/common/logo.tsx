import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logoHighlight: {
    color: "#F8F9FA",
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    paddingTop: rem(10),
    paddingBottom: rem(10),
    fontFamily: "Montserrat, sans-serif",
    height: "100%"
  },
  left: {
    paddingLeft: rem(20),
  },
  center: {
    justifyContent: "center",
  },
  redBox: {
    backgroundColor: "#F03E3E",
    padding: rem(3),
    borderRadius: rem(5),
    color: "white",
    margin: rem(3),
    width: rem(30),
    height: rem(30),
    display: "flex",
    alignItems: "center",
  },
  bg: {
    // backgroundColor: "#F8F9FA",
    backgroundColor: "#212529",
  },
  noBg: {

  }
}));

interface LogoProps {
  placement: string
  bg: boolean
}

export function Logo({ placement, bg }: LogoProps) {
  const { classes } = useStyles();

  return (
    <div className={`${classes.container} ${placement === "center" ? classes.center : classes.left} ${bg ? classes.bg : classes.noBg}`}>
      <h3 className={classes.logoHighlight}>
        book<div className={classes.redBox}>my</div>music
      </h3>
    </div>
  );
}
