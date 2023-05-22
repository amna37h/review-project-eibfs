import { useState } from "react";
import axios from "axios";

export default function AddReview() {

    const [username, setUsername] = useState("");
    const [reviewContent, setReviewContent] = useState("");
    const [reviewProduct, setReviewProduct] = useState("");
    const [rating, setRating] = useState("");

    return (
        <section>
            <form onSubmit={(e) => { e.preventDefault(); axios.post("http://localhost:8020/addReview", { username, reviewContent, reviewProduct, rating }) }}>
                <div>
                    <label htmlFor="username">Name: </label>
                    <input value={username} onChange={(e) => { setUsername(e.target.value); console.log(username) }} id="username" type="text" placeholder="your name here" />
                </div>
                <div>
                    <label htmlFor="ReviewContent">Review: </label>
                    <input value={reviewContent} onChange={(e) => { setReviewContent(e.target.value); console.log(reviewContent) }} id="review" type="text" placeholder="your review here" />
                </div>
                <div>
                    <label htmlFor="ReviewProduct">Product: </label>
                    <input value={reviewProduct} onChange={(e) => { setReviewProduct(e.target.value); console.log(reviewProduct) }} id="product" type="text" placeholder="your product here" />
                </div>
                <div>
                    <label htmlFor="ReviewRate">Rating: </label>
                    <input value={rating} onChange={(e) => { setRating(e.target.value); console.log(rating) }} id="rating" type="text" placeholder="your product here" />
                </div>
                <button>Submit Review</button>

            </form>
        </section>
    )



}