import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0])); // Create URL for the selected image
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(
        'http://localhost:3001/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
      // Handle success, display a success message, or update the UI
    } catch (error) {
      console.error(error);
      // Handle error, display an error message, etc.
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #304352, #d7d2cc)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>Upload Image</h2>
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          id='upload-file'
          onChange={handleFileChange}
        />
        <label htmlFor='upload-file'>
          <div
            style={{
              padding: '10px',
              background: '#3498db',
              borderRadius: '5px',
              cursor: 'pointer',
              color: 'white',
              display: 'inline-block',
            }}
          >
            Choose File
          </div>
        </label>
        {file && (
          <div>
            <p style={{ marginTop: '10px' }}>Selected File: {file.name}</p>
            <img
              src={imageUrl}
              alt='Selected Image'
              style={{ marginTop: '10px', maxWidth: '100%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
