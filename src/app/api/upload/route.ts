import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { bucket } from '../../lib/firebaseAdmin';
import path from 'path';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};

const readFile = (req: NextApiRequest): Promise<{ fields: formidable.Fields, files: formidable.Files }> => {
    const form = new formidable.IncomingForm({
        uploadDir: path.join(process.cwd(), '/uploads'),
        keepExtensions: true,
    });

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { files } = await readFile(req);

            const file = files.file as formidable.File;
            const filePath = file.filepath;

            const uploadPath = `uploads/${file.newFilename}`; // Define the path in Firebase Storage

            await bucket.upload(filePath, {
                destination: uploadPath,
                metadata: {
                    contentType: 'application/pdf',
                },
            });

            const fileUrl = `https://storage.googleapis.com/${bucket.name}/${uploadPath}`;

            // Clean up the temporary file
            fs.unlinkSync(filePath);

            res.status(200).json({ url: fileUrl });
        } catch (error) {
            res.status(500).json({ error: 'Error uploading the file' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
