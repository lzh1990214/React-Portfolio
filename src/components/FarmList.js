import React, { useState } from 'react';
import FarmCard from './FarmCard';

const farms = [
    {
        name: 'Farm A',
        location: 'Washington DC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
        name: 'Farm B',
        location: 'Arlington VA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
        name: 'Farm C',
        location: 'College Park Maryland',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
];

const FarmList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setSearchError('');
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() === '') {
            setSearchError('Please enter a valid city.');
            setSearchResults([]);
        } else {
            const filteredFarms = farms.filter((farm) =>
                farm.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredFarms);
            setSearchError(filteredFarms.length === 0 ? 'No results found, please try again.' : '');
        }
    };


    return (
        <div >
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="input-group mb-3 w-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter location..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleSearchSubmit}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div>
                {searchResults.length > 0
                    ? (
                        searchResults.map((farm) => <FarmCard key={farm.id} farm={farm} />)
                    )
                    : (
                        // Wrap the error message and the farm cards together in one parent element 'React.Fragment'. Conditionally display the search error message with the farm cards. //
                        <>
                            {searchError && (
                                <p className="text-danger">{searchError}</p>
                            )}
                            {farms.map((farm) => (
                                <FarmCard key={farm.id} farm={farm} />
                            ))}
                        </>
                    )}
            </div>

        </div>
    );
};

export default FarmList;
