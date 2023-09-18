import { useState } from 'react';

export default function ShowMoreButton() {
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} 
        </button>
    )
}