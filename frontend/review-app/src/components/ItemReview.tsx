import React, { useState } from 'react';
import { Box, Typography, Paper, IconButton, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const reviews = [
    {
        id: 1,
        reviewer: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 4,
    },
    {
        id: 2,
        reviewer: 'Jane Smith',
        description: 'Vestibulum efficitur placerat mauris, id dignissim sapien aliquam a.',
        rating: 5,
    },
    {
        id: 1,
        reviewer: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 4,
    },
    {
        id: 2,
        reviewer: 'Jane Smith',
        description: 'Vestibulum efficitur placerat mauris, id dignissim sapien aliquam a.',
        rating: 5,
    },
    {
        id: 1,
        reviewer: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 4,
    },
    {
        id: 2,
        reviewer: 'Jane Smith',
        description: 'Vestibulum efficitur placerat mauris, id dignissim sapien aliquam a.',
        rating: 5,
    },
    {
        id: 1,
        reviewer: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 4,
    },
    {
        id: 2,
        reviewer: 'Jane Smith',
        description: 'Vestibulum efficitur placerat mauris, id dignissim sapien aliquam a.',
        rating: 5,
    },
    // Add more reviews here...
];

const ReviewItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#4caf50',
        cursor: 'pointer',
    },
}));

const ReviewList = styled(Box)({
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '& > *': {
        flex: '0 0 auto',
        minWidth: '25%',
        marginRight: '1rem',
    },
});

export default function ReviewComponent() {
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleScroll = (scrollOffset: number) => {
        const container = document.getElementById('reviewListContainer');
        if (container) {
            const newScrollLeft = scrollLeft + scrollOffset;
            container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
            setScrollLeft(newScrollLeft);
        }
    };

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Product Reviews
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
                <IconButton onClick={() => handleScroll(-200)}>
                    <ArrowBackIcon />
                </IconButton>
                <ReviewList id="reviewListContainer">
                    {reviews.map((review) => (
                        <ReviewItem key={review.id}>
                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                {review.reviewer}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                {review.description}
                            </Typography>
                            <Rating value={review.rating} precision={0.5} readOnly />
                        </ReviewItem>
                    ))}
                </ReviewList>
                <IconButton onClick={() => handleScroll(200)}>
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
