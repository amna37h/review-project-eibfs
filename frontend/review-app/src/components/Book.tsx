import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

interface BookProps {
    image: string;
    title: string;
}


const useStyles = makeStyles({
    book: {
        position: "relative",
        display: "inline-block",
        margin: "10px",
        "&:hover $title": {
            opacity: 1,
        },
    },
    image: {
        display: "block",
        maxWidth: "100%",
        height: "auto",
    },
    title: {
        position: "absolute",
        bottom: "10px",
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#fff",
        opacity: 0,
        padding: "10px",
        transition: "opacity 0.3s ease-in-out",
    },
});

export default function Book({ image, title }: BookProps) {
    const classes = useStyles();

    return (
        <div className={classes.book}>
            <img className={classes.image} src={image} alt={title} />
            <div className={classes.title}>
                <Typography variant="h6">{title}</Typography>
            </div>
        </div>
    );
}
