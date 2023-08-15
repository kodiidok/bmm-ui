import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logoHighlight: {
    // color: "#F03E3E"
    display: "flex",
    alignItems: "center"
  },
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "#F8F9FA",
    paddingLeft: rem(20),
    paddingTop: rem(10),
    paddingBottom: rem(10),
    fontFamily: "Montserrat, sans-serif",
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
  }
}));

export function Logo() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.logoHighlight}>
        book<div className={classes.redBox}>my</div>music
      </h3>
    </div>
  );
}
