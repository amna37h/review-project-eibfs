import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import bookImage from './images/cursedchild.jpg'
import Footer from './Footer';
import NavBar from './NavBar';
import ItemReview from './ItemReview';

const ProductPhoto = styled('img')({
    maxWidth: '100%',
    height: 'auto',
});


export default function ProductPage() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <NavBar />
                <Container sx={{ py: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2 }}>
                                <ProductPhoto src={bookImage} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="h4" sx={{ mb: 2 }}>
                                    Harry Potter And The Cursed Child
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Being Harry Potter has never been easy. And it isnt much easier now, as we catch up with him nineteen years after the Battle of Hogwarts.
                                    These days, Harry is a husband, father of three school-age children, and an overworked employee at the Ministry of Magic.
                                    While he struggles with a personal history that refuses to stay in the past, his youngest son Albus must grapple with the weight of the family legacy he never asked for.
                                    As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.
                                    Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage.
                                    Based on an original new story by J.K. Rowling, John Tiffany and Jack Thorne, the play was scripted by Jack and directed by John.



                                </Typography>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    $99.99
                                </Typography>
                                <Button color='error' variant="contained" sx={{ mr: 2 }} >
                                    Buy Now
                                </Button>
                                <Button color='error' variant="outlined">Add Review</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Product Reviews
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <ItemReview />
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>
    );
};

