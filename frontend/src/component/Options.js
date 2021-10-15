import {useState,useEffect }  from 'react';
import { sendMessage, subscribeToNewMessages } from '../socketApi';




export default function Options() {

const[selectedOption,setSelectedOption]=useState('js');
const handleSelect=({target})=>setSelectedOption(target.value);
const handleSubmit= ()=>{
    //e.preventDefault()
    sendMessage('new-vote',{vote:selectedOption})};

    useEffect(()=>{
        subscribeToNewMessages((data)=>{console.log(data)
        });
    },[]);
    return (
        <div id="options">
            <h1>{selectedOption }</h1>
            <label htmlFor=""> 
            <input name="option" type="radio" value="js" onChange={handleSelect} checked={selectedOption==='js'} />
            JS
            </label>
            <progress id="file" value="32" max="100"> 32% </progress>

            <label htmlFor=""> 
            <input name="option" type="radio" value="go" onChange={handleSelect} checked={selectedOption==='go'} />
            GO
            </label>
            <progress id="file" value="32" max="100"> 32% </progress>

            <label htmlFor=""> 
            <input name="option" type="radio" value="c#" onChange={handleSelect} checked={selectedOption==='c' }/>
            C
            </label>
            <progress id="file" value="32" max="100"> 32% </progress>

            <label htmlFor=""> 
            <input name="option" type="radio" value="java" onChange={handleSelect} checked={selectedOption==='java'} />
            Java
            </label>
            <progress id="file" value="32" max="100"> 32% </progress>
           

           <div><button onClick="handleSubmit">Vote</button>
 </div>
           
        </div>
    )
}
