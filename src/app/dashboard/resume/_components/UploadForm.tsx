"use client"

import React, { useState, useRef } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/firebase';
import { convertPdfToText } from '@/lib/extractTextFromPdf'; // Assuming you have this function defined

const UploadForm: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState<string>('');
    const [uploading, setUploading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.error('Error uploading file:', error);
                setUploading(false);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setFileUrl(downloadURL);
                setUploading(false);

            }
        );
    };

    return (
        <div>
            <input type="file" accept="application/pdf" onChange={handleFileChange} ref={fileInputRef} />
            <button disabled={!file || uploading}>
                {uploading ? 'Uploading...' : 'Upload PDF'}
            </button>
            {fileUrl && (
                <p>
                    File uploaded successfully: <a href={fileUrl} target="_blank" rel="noopener noreferrer">View PDF</a>
                </p>
            )}
        </div>
    );
};

export default UploadForm;
