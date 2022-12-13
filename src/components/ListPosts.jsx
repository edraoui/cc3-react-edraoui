import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListPosts() {
    const { id } = useParams()
    const userListe = useSelector(state => state.user.data)
    const posts = useSelector(state => state.posts.data)
    const selectedPosts = posts.posts.filter(posts => posts.id == id)
    return (
        <div>
            <div className='listpost'>
                <div className='div'>
                {selectedPosts.map(posts =>
                <div>
                    < div key={posts.id}>
                    {posts.title}
                    </div>
                <div>
                    {posts.body}
                    <span>Tags:{posts.tags[0]} {" "} {posts.tags[1]} {" "}{posts.tags[2]}</span>
                </div> 
                
                        
                </div>)}
                </div>
        
            
            </div>
        </div>
    )
}