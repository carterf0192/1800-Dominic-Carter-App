import { useEffect, useRef } from "react";
import axios from "axios";

export default function QuotesQuestionPicker({ onQuoteFetch }) {
    const csvDataRef = useRef([]); // Store CSV data
    const usedQuotes = useRef([]); // Track used quotes

    console.log("Rendering QuotesQuestionPicker");

    useEffect(() => {
        console.log("Fetching CSV data");
        fetchCSVData();
    }, []);

    const fetchCSVData = async () => {
        const csvUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR0-x2-4z8hBEFwK6HJok2ymA-oWYNN3CRe1MZiUbPeGZ4Sh5UA6JvHS-E4cSjGYAhnb5CLu20YNPtc/pub?output=csv";

        try {
            const response = await axios.get(csvUrl);
            const parsedCsvData = parseCSV(response.data);
            console.log("Fetched and parsed CSV data:", parsedCsvData);
            csvDataRef.current = parsedCsvData; // Store in ref
            provideNextQuote();
        } catch (error) {
            console.error("Error fetching CSV data:", error);
        }
    };

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(",");
        return rows.slice(1).map((row) => {
            const values = row.split(",");
            return headers.reduce((acc, header, idx) => {
                acc[header] = values[idx];
                return acc;
            }, {});
        });
    };

    const provideNextQuote = () => {
        const data = csvDataRef.current;
        if (data.length === 0) {
            console.log("No data available for quotes.");
            return;
        }

        const unusedQuotes = data.filter(
            (_, index) => !usedQuotes.current.includes(index)
        );

        if (unusedQuotes.length === 0) {
            console.log("All quotes used. Resetting tracker.");
            usedQuotes.current = [];
            return provideNextQuote();
        }

        const randomIndex = Math.floor(Math.random() * unusedQuotes.length);
        const selectedQuoteIndex = data.indexOf(unusedQuotes[randomIndex]);
        const selectedQuote = data[selectedQuoteIndex];
        usedQuotes.current.push(selectedQuoteIndex);

        console.log("Providing next quote:", selectedQuote);

        const correspondingName = selectedQuote.Name;

        const allNames = data
            .map((item) => item.Name)
            .filter((name) => name !== correspondingName);
        const otherNames = getUniqueRandomElements(allNames, 3);

        const quoteData = {
            quote: selectedQuote.Quote,
            correspondingName,
            otherNames,
        };

        console.log("Sending data to onQuoteFetch:", quoteData);

        if (onQuoteFetch) {
            onQuoteFetch(quoteData);
        }
    };

    const getUniqueRandomElements = (array, count) => {
        const result = [];
        const usedIndexes = new Set();

        while (result.length < count) {
            const randomIndex = Math.floor(Math.random() * array.length);

            // Ensure no duplicates
            if (!usedIndexes.has(randomIndex)) {
                result.push(array[randomIndex]);
                usedIndexes.add(randomIndex);
            }
        }

        return result;
    };

    return null;
}
