import { Grid } from "@mui/material";
import Book from "./Book";


const books = [
    {
        id: 1,
        title: "The Lord of the Rings: The Fellowship Of The Ring",
        image: "https://i.redd.it/pu1i0ekgyhu81.jpg",
        discription: "lord of thee ring discription"
    },
    {
        id: 2,
        title: "Fire And Blood 300 Years Before A Game Of Thrones",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9E7ffRvBI8V4C-xbiidEgMQS5-zwcXMdkEiuVTfWmAKiAuJDr",
        discription: "game of thrones discription"
    },
    {
        id: 3,
        title: "The Rigtheous | Renee Ahdieh",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxIHchTcDIM_yoap63IQvwOP9ReNEpK0Nn8KaCQ47zZAt3utYf",
        discription: "the rigteous discription"
    },
    {
        id: 4,
        title: "The Queen's Gambit | Tevis Walter",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2Jxr8KMvWLD-SbcsLDXWItO2a68cBpzeAupO1Pux5yWrlY24X",
        discription: "queen gambit discription"
    },
    {
        id: 5,
        title: "Harry Potter And The Cursed Child",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIcNCg8WptPke8RJhZIjWT7d4HKANYqSOzEteFyJUdx2R5S6kY",
        discription: "harry potter discription"
    },
    {
        id: 6,
        title: "Dance With Dragons | George R.R. Martin",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtlQLnilHC3qBhmpVAqOAXmaV4gw7ZPcMNapQh-GGOzKDCHdAo",
        discription: "dance with drangons discription"
    },




];

export default function Home() {
    return (


        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            {books.map((book) => (
                <Grid item xs={4} key={book.id}>
                    <div style={{ textAlign: "center" }}>
                        <Book image={book.image} title={book.title} discription={book.discription} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
