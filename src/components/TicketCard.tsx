import { Button, Card, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
}));

const headerStyle = {
    fontSize: 'medium',
    color: `#64748B`
};
const header2Style = {
    fontSize: '2rem',
    // marginTop:"-0.1rem",
    marginBottom:"-0.5rem"
};
const textStyle = {
    fontSize: 'small',
    color: `#64748B`,
};


interface Props {
    title: string;
    text: string;
    price: string;
    seatAvailability: string;
}

export function TicketCard(props: Props) {
    const { classes } = useStyles();


    return (
        <Card withBorder radius="md" className={classes.card}>


            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "40vh",margin: '1.2rem' }}>

                <p style={headerStyle}>{props.title}</p>
                <h1 style={header2Style}>{props.price}</h1>
                <p>{props.text}</p>
                <p style={textStyle}>{props.seatAvailability}</p>

                <Button type="submit" style={{ alignSelf: 'flex-start', width:"100%", marginTop: '2rem' }}>Buy</Button>




            </div>

        </Card>
    );
}