import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from './Footer';
import ItemReview from './ItemReview';
import { useLocation, useNavigate } from "react-router-dom";
interface BookProps {
    image: string;
    title: string;
}


const ProductPhoto = styled('img')({
    width: "250px",
    height: "400px",
    objectFit: "cover",
});




export default function BookDisplay() {

    const LeftGrid = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
    });

    const RightGrid = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
    });
    const location = useLocation();
    const navigate = useNavigate();

    // Parse the URL parameters to retrieve the title and image
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title") || "";
    const image = searchParams.get("image") || "";
    const discription = searchParams.get("discription") || "";


    // Handle cases where the title or image is missing
    if (!title || !image || !discription) {
        navigate("/"); // Redirect to a default route or display an error message
        return null; // or return a loading state or placeholder component
    }
    console.log("display page", discription);
    console.log("display page", title);
    console.log("display page", image);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <Container sx={{ py: 2 }}>
                    <Grid container spacing={2}>
                        <LeftGrid item xs={12} md={6}>

                            <ProductPhoto src={image} alt={title} />

                        </LeftGrid>
                        <RightGrid item xs={12} md={6}>
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="h4" sx={{ mb: 2 }}>
                                    {title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {discription}



                                </Typography>
                                <Button color='error' variant="outlined">Add Review</Button>
                            </Paper>
                        </RightGrid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <ItemReview />

                            {/* <Typography variant="body1" sx={{ mb: 2 }}>
                                <ItemReview />
                            </Typography> */}

                        </Grid>
                    </Grid>

                </Container>
                <Footer />
            </Box>
        </>
    );
};

