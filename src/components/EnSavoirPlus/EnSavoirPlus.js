import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EnSavoirPlus = () => {
    const { id } = useParams();
    const [urbex, setUrbex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:7265/urbex/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setUrbex(result);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <h1>En Savoir Plus</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Erreur : {error.message}</p>
            ) : urbex ? (
                <div>
                    <p><strong>Accès :</strong> {urbex.accès}</p>
                    <p><strong>Histoire :</strong> {urbex.histoire}</p>
                    <p><strong>Exploration :</strong> {urbex.exploration}</p>
                </div>
            ) : (
                <p>Aucune donnée trouvée pour l'ID {id}.</p>
            )}
        </div>
    );
};

export default EnSavoirPlus;
