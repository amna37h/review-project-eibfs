import { Typography } from "@mui/material";

interface Book {
    id: number;
    title: string;
    image: string;
}

interface BookReviewsProps {
    book: Book;
}

export default function BookReviews({ book }: BookReviewsProps) {
    return (
        <div>
            <Typography variant="h4">{book.title} Reviews</Typography>
            {/* Display book reviews here */}
        </div>
    );
}
