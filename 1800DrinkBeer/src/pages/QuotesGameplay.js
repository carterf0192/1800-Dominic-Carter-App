import React, { useState, useEffect } from "react";
import { Box, Grid, Button, Typography, Paper } from "@mui/material";
import axios from "axios";

export default function QuoteDisplay() {
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = async () => {
        const csvUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR0-x2-4z8hBEFwK6HJok2ymA-oWYNN3CRe1MZiUbPeGZ4Sh5UA6JvHS-E4cSjGYAhnb5CLu20YNPtc/pub?output=csv";
        try {
            const response = await axios.get(csvUrl);
            const data = parseCSV(response.data);
            generateQuizQuestion(data);
        } catch (error) {
            console.error("Error fetching CSV data:", error);
        }
    };

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(",");
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(",");
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    };

    const generateQuizQuestion = (data) => {
        if (data.length === 0) return;

        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedQuote = data[randomIndex];

        const correctAnswer = selectedQuote["Who Said It"];
        const allNames = data.map((item) => item["Who Said It"]);
        const incorrectNames = allNames.filter((name) => name !== correctAnswer);
        const shuffledIncorrectNames = incorrectNames.sort(() => 0.5 - Math.random());
        const selectedIncorrectNames = shuffledIncorrectNames.slice(0, 3);
        const options = [...selectedIncorrectNames, correctAnswer].sort(() => 0.5 - Math.random());

        setSelectedQuote(selectedQuote);
        setOptions(options);
    };

    if (!selectedQuote) return null;

    return (
        <Box sx={{ padding: 4 }}>
            <Box elevation={3} 
                           sx={{
                            width: "90%",
                            height: "30vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f5f5f5",
                            boxShadow: 3,
                            padding: 1,
                            borderRadius: 2,
                            margin: "60px auto",
                            mb: 4,
                            border: "1px solid #ddd",
                        }}>
                <Typography variant="h4" align="center" sx={{color:'black'}}>
                    {selectedQuote.Quote}
                </Typography>
            </Box>
            <Grid container spacing={5}>
                {options.map((option, index) => (
                    <Grid item xs={6} key={index}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{

                              height: '100px', 
                              fontSize: '35px',//TODO: Change font size
                              fontFamily: '"Bebas Neue", sans-serif', 
                            }}
                            onClick={() => console.log("Selected Option:", option)}
                        >
                            {option}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
