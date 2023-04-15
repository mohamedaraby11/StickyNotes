import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Home() {
    const BaseUrl = 'https://sticky-note-fe.vercel.app/'
    let token = localStorage.getItem('token');
    const [allNotes, setallNotes] = useState([]);
    
    if(token){
        var decoded = jwtDecode(token)
    }
    const [note,setNote] = useState({title:'',desc:'',citizenID:decoded._id,token})
    console.log(note);

    async function getNote({target}){
        setNote({...note,[target.name]:target.value})
        
    }
    async function addNote(e){
        e.preventDefault();

        let {data} = await axios.post(BaseUrl+'addNote',note)
        if(data.message==='success'){
            getAllNotes()
        }

    }

    async function getAllNotes(){
        let {data} = await axios.post(BaseUrl+'getUserNotes',{
            token,
            userID:decoded._id
        })
        console.log(data.Notes);
        setallNotes(data.Notes)
    }

    useEffect(()=>{
        getAllNotes();
    },[])

    async function deleteNote(_id){
        console.log(_id);
        let {data} = await axios.delete(BaseUrl+'deleteNote',{
            data:{
                NoteID:_id,
                token

            }
        })
        if(data.message==='deleted'){
            getAllNotes()
        }
        console.log(data);
        

    }


    return (
        <div>
              <div className="container my-5">
                <div className="col-md-12 text-end">
                    <a className="add p-2 btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus-circle"></i> Add New</a>
                </div>
            </div>


            {/* <!-- Add Modal --> */}
            <div onSubmit={addNote} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form id="add-form">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input onChange={getNote} placeholder="Type Title" name="title" className="form-control" type="text" />
                                <textarea onChange={getNote} className="form-control my-2" placeholder="Type your note" name="desc" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-info"><i className="fas fa-plus-circle"></i> Add Note</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* <!-- Edit Modal --> */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form id="edit-form">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input placeholder="Type Title" name="title" className="form-control" type="text" />
                                <textarea className="form-control my-2" placeholder="Type your note" name="desc" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" data-dismiss="modal">Close</button>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-info">Update Note</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>



            {/* <!-- ==========================Notes=============================== --> */}

            <div className="container">
                <div className="row">
                    {allNotes.map((value,index)=>{
                        return (
                            
                    <div key={value._id} className="col-md-4 my-4">
                    <div className="note p-4">
                        <h3 className="float-start">{value.title}</h3>
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal1" ><i className="fas fa-edit float-end edit"></i></a>
                        <a > <i onClick={()=>deleteNote(value._id)} className="fas fa-trash-alt float-end px-3 del"></i></a>
                        <span className="clearfix"></span>
                        <p>{value.desc}</p>
                    </div>




                </div>
                        )
                    })}



                    <h2 className='text-white text-center '>No notes found</h2>
                </div>
                </div>
        </div>
    )
}            
