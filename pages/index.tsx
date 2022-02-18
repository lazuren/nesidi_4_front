import type { NextPage } from "next";
import Head from "next/head";
import { Button, H, Icons, List } from "../components";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import {  withLayout } from "../Layouts/Layout";

const Home: NextPage = () => {
    const [rating, setRating] = useState<number>(0); // initial rating value

    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log("Counter " + counter);
    });

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate);
        console.log(rate / 10);
    };

    return (
        <>
            <H tag="3">Welcome to counter {counter}</H>
            <Button
                appearance="primary"
                size="l"
                onClick={() => setCounter((num) => num + 1)}
            >
                Кнопка
            </Button>
            <br />
            <br />
            <Button appearance="ghostYellow" color="orange">
                Кнопка
            </Button>
            <br />
            <br />
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                fillColor={"#01CE96"}
            />
            <br />
            <br />

            <Icons icon="shopping-cart" color="var(--primary)" />
            <Icons
                icon="map-marker-alt"
                size="16px"
                color="var(--accent-orange)"
            />
            <Icons icon="heart" size="20px" color="var(--accent-yellow)" />

            <br />
            <br />

           
        </>
    );
};

export default withLayout(Home);
