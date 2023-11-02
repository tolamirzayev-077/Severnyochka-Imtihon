import React from 'react'
import { Link } from 'react-router-dom'
import '../language/language'
import Logo from '../../public/assets/logox.svg'
import LogoIns from '../../public/assets/instagram.svg'
import LogoFacke from '../../public/assets/facebook.svg'
import LogoOk from '../../public/assets/ok.svg'
import LogoWk from '../../public/assets/vkontakte.svg'
import Telephone from '../../public/assets/phone.svg'
import Zasoviskiy from '../../public/assets/logo-zasovskiy-small-black.svg'
import Heart from '../../public/assets/heart.png'
import Shop from '../../public/assets/shopping-cart.png'

const Footer = () => {


    return (
        <>
            <footer className='bg-footerbg bg-[#f9f4e2] py-6'>
                <div className="container ">
                    <div className=" flex justify-between mb-7 md:mb-0">
                        <Link to="/">
                            <img src={Logo} width={64} height={44} alt="Logo" />
                        </Link>
                        <nav className='hidden md:block'>
                            <div className='lg:flex text-xs block'>
                                <div className='mb-10 space-x-5 mr-5'>
                                    <Link className='hover:text-[#f63]' to='/about'> О компании</Link>
                                    <Link className='hover:text-[#f63]' to='/kontakt'>Контакты</Link>
                                    <Link className='hover:text-[#f63]' to="/vakansi">Вакансии</Link>
                                </div>
                                <div className="space-x-5">
                        
                                        <a href='#stati' className='hover:text-[#f63]' >Статьи</a>
                        
                                        <Link className='hover:text-[#f63]' to='/'>Политика обработки персональных данных</Link>
                                </div>
                            </div>
                        </nav>
                        
                        <div className='grid grid-cols-1 items-start flex-col  md:grid-cols-2'>
                            <ul className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 '>
                                <li className=' mb-4 lg:mr-0:mb-0'>
                                    <a target='_blank' href="https://www.instagram.com/tolamirzayev_077/">
                                        <img src={LogoIns} width={24} height={24} alt="Instagram logo" />
                                    </a>
                                </li>
                                <li className=' mb-4 lg:mr-0:mb-0'>
                                    <a target='_blank' href="https://m.vk.com/">
                                        <img src={LogoWk} alt="wk logo" />
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100089886710192">
                                        <img src={LogoFacke} alt="Fackebok logo" />
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://www.instagram.com/tolamirzayev_077/">
                                        <img src={LogoOk} alt="Ok logo" />
                                    </a>
                                </li>
                            </ul>
                            <div className='font-normal  not-italic flex flex-col '>
                                <div className='flex items-center mb-0 md:mb-7'>
                                    <img className='mr-2' src={Telephone} alt="Phone" />
                                    <a className='cursor-pointer underline underline-offset-4' href='tel:+998887808882'>8 800 777 33 33</a>
                                </div>
                                <div className='md:flex items-center hidden'>
                                    <span className='mr-2'>Дизайн</span>
                                    <img src={Zasoviskiy} alt="Dizayn" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <nav className='block md:hidden'>
                        <div className='  text-xs block'>
                            <div className='mb-7 space-x-5 mr-5'>
                                <Link className='hover:text-[#f63]' to='/about'> О компании</Link>

                                <Link className='hover:text-[#f63]' to='/kontakt'>Контакты</Link>

                                <Link className='hover:text-[#f63]' to="/vakansi">Вакансии</Link>
                            </div>
                            <div className="space-x-5">

                                <Link className='hover:text-[#f63]' to='/'>Статьи</Link>

                                <Link className='hover:text-[#f63]' to='/'>Политика обработки персональных данных</Link>
                            </div>
                        </div>
                    </nav>

                </div>
            </footer>

        </>
    )
}

export default Footer