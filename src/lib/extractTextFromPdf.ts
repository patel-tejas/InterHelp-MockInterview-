// pdfUtils.ts
"use server"
import axios from 'axios';
import PDFParser from 'pdf-parse';

export async function convertPdfToText(pdfUrl: string): Promise<string> {
    try {
        const response = await axios.get(pdfUrl, {
            responseType: 'arraybuffer'
        });

        console.log(response.data);
        

        const buffer = Buffer.from(response.data, 'binary');
        const pdf = await PDFParser(buffer);

        return pdf.text;
    } catch (error) {
        console.error('Error fetching or parsing PDF:', error);
        throw new Error('Failed to parse PDF');
    }
}
