import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import QuotesQuestionPicker from "../components/QuoteQuestionPicker";

export default function QuotesQuestion() {
    const [quoteData, setQuoteData] = useState(null);

    console.log("Rendering QuotesQuestion. Current quote data:", quoteData);

    return (
        <div>
            <QuotesQuestionPicker
                onQuoteFetch={(data) => {
                    console.log("onQuoteFetch called with:", data);
                    setQuoteData(data); // Set state when data is fetched
                }}
            />
            {quoteData ? (
                <>
                    <Box
                        sx={{
                            width: "90%",
                            height: "30vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f5f5f5",
                            boxShadow: 3,
                            padding: 2,
                            borderRadius: 2,
                            margin: "120px auto",
                            border: "1px solid #ddd",
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            align="center"
                            sx={{ color: "#10375C" }}
                        >
                            {quoteData.quote}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 2,
                            marginTop: 4,
                        }}
                    >
                        {quoteData.otherNames
                            .concat(quoteData.correspondingName) // Include correct name
                            .sort(() => Math.random() - 0.5) // Shuffle
                            .map((name, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#F3C623",
                                        color: "#10375C",
                                        fontWeight: "bold",
                                        width: "50%",
                                    }}
                                >
                                    {name}
                                </Button>
                            ))}
                    </Box>
                </>
            ) : (
                <Box
                    sx={{
                        width: "90%",
                        height: "30vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#f5f5f5",
                        boxShadow: 3,
                        padding: 2,
                        borderRadius: 2,
                        margin: "120px auto",
                        border: "1px solid #ddd",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        align="center"
                        sx={{ color: "#10375C" }}
                    >
                        Loading...
                    </Typography>
                </Box>
            )}
        </div>
    );
}
