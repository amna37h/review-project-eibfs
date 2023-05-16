import { Box, Paper, Rating, Typography } from '@mui/material';
import Button from "@mui/material/Button";


export default function ItemReview() {
    return (

        <Paper sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Product Reviews
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    John Doe
                </Typography>
                <Rating name="rating" value={4} readOnly />
                <Typography variant="body1" sx={{ mt: 1 }}>
                    This is amazing
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Jane Smith
                    </Typography>
                    <Rating name="rating" value={5} readOnly />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Best product ever!
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Bob Johnson
                    </Typography>
                    <Rating name="rating" value={3} readOnly />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Good product but a bit overpriced.
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Emily Davis
                    </Typography>
                    <Rating name="rating" value={2} readOnly />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Not the best quality.
                    </Typography>
                </Box>
                <Button variant="contained" color="error">
                    Add a Review
                </Button>


            </Box>
        </Paper>
    )


}




