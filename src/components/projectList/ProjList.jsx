import React from 'react';
import './projList.scss';

export default function ProjList({ id, title, active, setSelected }) {
    return (
        <li className={active ? 'projList active' : 'projList'} onClick={() => setSelected(id)}>
            {title}
            
        </li>
    )
}
