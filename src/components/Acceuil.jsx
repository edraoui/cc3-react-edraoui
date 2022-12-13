import React from 'react'
import '../App.css'
import { Routes, Route ,BrowserRouter} from 'react-router-dom'
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import ListPosts from './ListPosts';
export default function Accueil() {
    return (
        <div>
            <BrowserRouter>
                <div className='Header'>Gestion des taches</div>
                <Routes>
                    <h1>Liste des Utilisateurs :</h1>
                    <Route exact path="/" element={<ListUser />} />
                    <Route path='/DetailUser/:id' element={<DetailUser />} />
                    <Route path='/ListPosts/:id' element={<ListPosts/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
