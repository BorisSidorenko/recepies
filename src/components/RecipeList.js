import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './RecipeList.css';
import { projectFirestore } from '../firebase/config';
import Trashcan from '../assets/trashcan.svg';

export default function RecipeList({ recipes }) {
    const { mode } = useTheme();

    if (recipes.length === 0) {
        return <div className="error">No recipes to load...</div>
    }

    const handleDeleteClick = (id) => {
        try {            
            projectFirestore.collection('recipies').doc(id).delete();
        } catch(err) {
            console.log(err.message);
        }
    }
    
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3 >{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img src={Trashcan} className="delete" onClick={() => handleDeleteClick(recipe.id)} alt="Trashcan icon"/>
                </div>                
            ))}
        </div>
    )
}
