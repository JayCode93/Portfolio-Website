import React from 'react';
import ProjList from '../projectList/ProjList';
import { useEffect, useState } from 'react';
import './proj.scss'
import {featuredProjects, webProjects, mobileProjects, otherProjects} from '../../data';

export default function Proj() {

    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'featured', 
            title: 'Featured',
        }, 
        {
            id: 'web', 
            title: 'Web Apps',
        }, 
        {
            id: 'mobile', 
            title: 'Mobile Apps',
        },
        {
            id: 'others', 
            title: 'Others',
        },
    ];

    useEffect(() => {
        switch(selected){
            case 'featured':
                setData(featuredProjects);
                break;
            case 'web':
                setData(webProjects);
                break;
            case 'mobile':
                setData(mobileProjects);
                break;
            case 'others':
                setData(otherProjects);
                break;
            default:
                setData(featuredProjects);

        }

    }, [selected])

    return (
        <div className='proj' id='proj'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(items => (
                <ProjList 
                    title={items.title} 
                    id={items.id}
                    active={selected === items.id} 
                    setSelected={setSelected} 
                />))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
