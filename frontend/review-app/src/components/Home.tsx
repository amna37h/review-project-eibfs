import { Grid } from "@mui/material";
import Book from "./Book";

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        image: "https://picsum.photos/id/237/200/300",
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        image: "https://picsum.photos/id/238/200/300",
    },
    {
        id: 3,
        title: "The Catcher in the Rye",
        image: "https://picsum.photos/id/239/200/300",
    },
];

export default function Home() {
    return (
        <Grid container spacing={2}>
            {books.map((book) => (
                <Grid item xs={12} sm={6} md={4} key={book.id}>
                    <Book image={book.image} title={book.title} />
                </Grid>
            ))}
        </Grid>
    );
}
