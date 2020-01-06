import React, {Fragment} from 'react';

// import {Typeahead} from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';

export const AsyncPlayerSearchBar = (allowNew, isLoading, multiple, options) => {
    return (
        <div style={{width: '400px', margin: 'auto'}}>
            <AsyncTypeahead
                labelKey='playerSearch' 
                minLength={3} 
                onSearch={() => {return "searching"}}
                placeholder="Search for a player..."
                renderMenuItemChildren={() => {return "searching"}}
            />
        </div>
    );
};