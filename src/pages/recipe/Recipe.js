import { useParams } from 'react-router';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import './Recipe.css';

export default function Recipe() {
    const { id } = useParams();
    const { mode } = useTheme();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);

        const unsub = projectFirestore.collection('recipies').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false);
                setRecipe(doc.data());                
            } else {
                setIsPending(false);
                setError('Could not find that recipe');
            }
        })

        return () => unsub();
    }, [id])

    const handleUpdateClick = () => {
        projectFirestore.collection('recipies').doc(id).update({
            title: 'Default title'            
        });
    }

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                    {recipe.title.toLowerCase().includes('test') && <button onClick={handleUpdateClick}>Update me</button>}                    
                </>
            )}
        </div>
    )
}
