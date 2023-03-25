import React from 'react'
import Image from "next/image";

function Header() {
  return <header>
    <div>
        <Image
            src="https://links.papareact.com/4t3"
            alt="logo"
            height={30}
            width={30}
            />
       <div>
        <h1>
            <span className='text-violet-500'> AI</span> Image Generator
        </h1>
        <h2>

        </h2>
       </div>
    </div>

  </header>;
}

export default Header