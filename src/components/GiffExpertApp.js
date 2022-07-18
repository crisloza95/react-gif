import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GiffGrid from "./GiffGrid";

const GiffExpertApp = props => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2>Giff Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {categories.map(category => <GiffGrid
                    category={category}
                    key={category}/>)}
            </ol>
        </>
    );
};


export default GiffExpertApp;
