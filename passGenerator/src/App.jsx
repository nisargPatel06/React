import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, numAllowed, charAllowed, passGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 text-sky-500 bg-gray-700 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0'
          onClick={copyPassToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6} max={50}
            value={length} 
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        	</div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numInput">Numbers</label>
        	</div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="charInput">Characters</label>
        	</div>
        </div>
      </div>
    </>
  )
}

export default App