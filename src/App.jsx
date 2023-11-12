
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
import SearchBar from './component/SearchBar';
import { useState } from 'react';


function App() {

  //Inputla filtreleme işlemi için state oluşturuldu. Bu state Input için oluşturulan componente ve diğer Categories ve Home componentlerine props olarak geçirilecek.
  //Bu state SearchBar componentindeki input alanının değerini ve değişimini tutacak
  const [searchValue, setSearchValue] = useState('');

  return (

    <div>

      <header className='max-w-6xl px-10 sm:px-20 xl:px-0 mx-auto pt-14'>

        <div className='flex items-center'>
          <h1 className='text-2xl font-semibold tracking-wide'>YAKUP MANCAR</h1>

          {/* Oluşturduğumuz Input componentini çağırıldı ve oluşturduğumuz props geçildi */}
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        {/* Sayfadaki geçişleri sağlamak için Linkler oluşturuldu */}
        <nav className='flex mt-12 gap-x-10 text-sm tracking-wider text-gray-800'>
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/categories"}>CATEGORIES</NavLink>
          <NavLink to={"/about"}>ABOUT ME</NavLink>
        </nav>


      </header>

      <div className='border border-gray-100 my-4'></div>

      <div className='mx-auto'>
        {/* Link geçişleri için rotalar belirlendi. Yukarıda oluşturduğumuz searchValue state'i Home alanı ve Categories alanları için props olarak geçirildi. */}
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='/categories' element={<Categories searchValue={searchValue} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      
      <footer className='lg:text-lg text-sm py-4 lg:py-6 w-full bg-gray-900 text-gray-100 flex justify-around px-4 lg:px-10 gap-x-7'>

        <h1>Designed and Developed by Yakup Mancar</h1>
        <h1>Copyright © 2023 SB</h1>

        <div className='flex gap-x-3 md:gap-x-4 lg:gap-x-8'>
          <a target='blank' href="https://github.com/yakupmancar"><i class="fa-brands fa-github"></i></a>
          <a target='blank' href="https://www.linkedin.com/in/yakup-mancar-5458a4268/"><i class="fa-brands fa-linkedin"></i></a>
          <a target='blank' href="https://www.instagram.com/yakupp.m/"><i class="fa-brands fa-instagram"></i></a>
        </div>

      </footer>

      

    </div>
  )
}

export default App