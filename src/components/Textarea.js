import React,{useState} from 'react'

export default function Textarea(props) {
    const handleUpclick=()=>{
        // console.log("Uppercase invoked")
        setText(text.toUpperCase())
    }
    const handleLoclick=()=>{
        // console.log("Lowercase invoked")
        setText(text.toLowerCase())
    }
    const handleChange=(e)=>{
        // console.log("onchange invoked")
        setText(e.target.value)
        
    }
    const clearText=()=>{
        setText("")
    }
    const copyText=()=>{
        let copy= document.getElementById("copytext")
        copy.select()
        navigator.clipboard.writeText(copy.value)
    }
    const removeSpace=()=>{
        let removeSpace=text.split(/[ ]+/)
        setText(removeSpace.join(" "))
    }
    const [text,setText]=useState("")
    
  return (
    <>
    <h2 className='my-2'>{props.heading}</h2>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleChange} id="copytext" rows={8} defaultValue={""} />
    <button className='btn btn-primary my-3' onClick={handleUpclick}>Transform to UpperCase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={handleLoclick}>Transform to LowerCase</button>    
    <button className='btn btn-primary my-3 ' onClick={clearText}>Clear All Text</button>    
    <button className='btn btn-primary my-3 mx-2' onClick={copyText}>Copy Text</button>    
    <button className='btn btn-primary my-3 ' onClick={removeSpace}>Remove Extra Spaces</button>    

  </div>

    <div className='my-3'>
        <h2>Your Text Summary</h2>
        <p>Your text contains {text.split(" ").length-1} words, {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
