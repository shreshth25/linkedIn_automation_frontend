import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti';
const CreatePost = () => {
    const [text, setText] = useState('')
    const data = JSON.parse(localStorage.getItem("automation_linkedin"))
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setError] = useState(false)

    useEffect(() => {
        let timer;
        if (isSuccess) {
          timer = setTimeout(() => {
            setIsSuccess(false);
          }, 3000); // 1 seconds
        }
        return () => clearTimeout(timer); 
      }, [isSuccess]);
    
    const handlePost = async(e)=>{
        e.preventDefault()
        const main_data = {
            'access_token': data['accessToken'],
            'user_id': data['sub'],
            'text': text
        }
        const response = await fetch('http://localhost:3000/api/auth/linkedin/createPost',{
            method: "POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(main_data)
        })

        const res = await response.json()
        if (res.status)
        {
            setIsSuccess(true)
            setText("")
        }
        else{
            setText("")
            setError(true)
        }

    }
    return (
        <div className='card'>
        <div className='card-header'>
            Create a LinkedIn Post
        </div>
        <div className='card-body'>
            <form onSubmit={handlePost}>
            <div className='form-group'>
            <input className='form-control' placeholder='Enter the post' type='text' onChange={(e)=>setText(e.target.value)} value={text}></input>
            </div>
            <button className='btn btn-info' type="submit">POST</button>
            </form>
            {isError && <div className='mt-2 alert alert-danger'>Something went wrong please try again</div>}
        </div>
        {isSuccess && <Confetti />} 
        </div>
    )
}

export default CreatePost
