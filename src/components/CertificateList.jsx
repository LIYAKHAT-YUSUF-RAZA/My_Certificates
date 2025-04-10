import React from 'react';

const CertificateList = ({ certificates }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', fontFamily: 'Roboto, Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50', fontSize: '32px', fontWeight: 'bold' }}>
                My Certificates
            </h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                }}
            >
                {certificates.map((certificate, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            backgroundColor: '#ffffff',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <a
                            href={certificate.image}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                }}
                            />
                        </a>
                        <div style={{ padding: '15px' }}>
                            <h2 style={{ fontSize: '20px', margin: '10px 0', color: '#34495e', fontWeight: '600' }}>
                                {certificate.title}
                            </h2>
                            <p style={{ fontSize: '14px', color: '#7f8c8d', lineHeight: '1.6' }}>
                                {certificate.description}
                            </p>
                            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#2c3e50', marginTop: '10px' }}>
                                Date: {certificate.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateList;