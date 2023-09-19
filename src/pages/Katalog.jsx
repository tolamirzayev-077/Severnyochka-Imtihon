import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
    
const Katalog = () => {
  return (
    <section>
      <div className="container">

      <Breadcrumbs className='space-x-4 py-6'>
        <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
          Главная
        </Link>

        <Link className='mr-4 text-xs hover:text-yellow-600' to='/about'>
          О компании
        </Link>
      </Breadcrumbs>

      </div>
    </section>
  )
}

export default Katalog