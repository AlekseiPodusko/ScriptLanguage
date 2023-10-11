import React from 'react';

import PostListItem from '../post-list-iteam';
import './post-list.css';

const PostList= ({posts,onDelete,onToggleImportant,onToggleLiked})=>{
    const elements = posts.map((iteam)=>{
        const{id,...iteamProps}= item;
        return(
            <li key={id} className='list-group-iteam'>
                <PostListItem
                    {...iteamProps}
                    onDelete={()=>onDelete(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                    onToggleLiked={()=> onToggleLiked(id)}/>
            </li>
        )
    });

    return(
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}
export default PostList;