import { useEffect, useState } from "react";
import axios from "axios"; 

export default function FetchCSVData() {
    const [csvData, setCsvData] = useState([]);
    const [usedQuotes, setUsedQuotes] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, []); 

    const fetchCSVData = () => {
        const csvUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR0-x2-4z8hBEFwK6HJok2ymA-oWYNN3CRe1MZiUbPeGZ4Sh5UA6JvHS-E4cSjGYAhnb5CLu20YNPtc/pub?output=csv"; 
        axios
            .get(csvUrl) 
            .then((response) => {
                const parsedCsvData = parseCSV(response.data); 
                setCsvData(parsedCsvData); 
                console.log("Fetched and parsed CSV data:", parsedCsvData);
                generateQuizQuestion(parsedCsvData); 
            })
            .catch((error) => {
                console.error("Error fetching CSV data:", error);
            });
    };

    function parseCSV(csvText) {
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
    }

    function generateQuizQuestion(data) {
        if (data.length === 0) return console.log("No data available for quiz.");

        const unusedQuotes = data.filter((_, index) => !usedQuotes.includes(index));

        if (unusedQuotes.length === 0) {
            setUsedQuotes([]);
            console.log("All quotes used. Resetting tracker.");
            return generateQuizQuestion(data);
        }

        const randomIndex = Math.floor(Math.random() * unusedQuotes.length);
        const selectedQuoteIndex = data.indexOf(unusedQuotes[randomIndex]);
        const selectedQuote = data[selectedQuoteIndex];
        setUsedQuotes((prev) => {
            const updatedQuotes = [...prev, selectedQuoteIndex];
            console.log("Used quotes indices:", updatedQuotes);
            return updatedQuotes;
        });

        const correctAnswer = selectedQuote["Who Said It"];
        const allNames = data.map((item) => item["Who Said It"]);
        const incorrectNames = allNames.filter((name) => name !== correctAnswer);
        const shuffledIncorrectNames = incorrectNames.sort(() => 0.5 - Math.random());
        const selectedIncorrectNames = shuffledIncorrectNames.slice(0, 3);
        const options = [...selectedIncorrectNames, correctAnswer].sort(() => 0.5 - Math.random());

        console.log("Quote:", selectedQuote.Quote);
        console.log("Options:", options);
        console.log("Correct Answer:", correctAnswer);
    }

    return null; 
}
