import { useState } from 'react';
import Business from './Business';
import Entertainment from './Entertainment';
import General from './General';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';


const Categories = ({searchValue}) => {

    //Categories alanındaki kategoriler arası geçişlerin tutulması ve değişimi için bir state oluşturuldu.
    const [selectedFilter, setSelectedFilter] = useState('option1');

    //Kategori geçişlerinin ayarlanması için bir fonksiyon oluşturuldu
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    return (



        <div className='mx-auto max-w-7xl'>

            <div className='flex xl:gap-x-12 px-8 md:px-20 xl:px-0'>
                <div className='flex flex-col items-start gap-y-4 md:gap-y-5 md:text-xl font-semibold pt-4 border-gray-200 border-r pr-10 md:pr-12 '>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option1')}>Business</button>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option2')}>Entertainment</button>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option3')}>General</button>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option4')}>Health</button>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option5')}>Science</button>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option6')}>Sports</button>
                    <button className='hover:text-gray-500' onClick={() => handleFilterClick('option7')}>Technology</button>
                </div>

                {/* Kategorilerin belirlenmesi ve kategorilerdeki input filtrelemesi için oluşturulan props kullanıldı. */}
                <div className='md:ml-8'>
                    {selectedFilter === 'option1' && <Business searchValue={searchValue}/>}
                    {selectedFilter === 'option2' && <Entertainment searchValue={searchValue}/>}
                    {selectedFilter === 'option3' && <General searchValue={searchValue}/>}
                    {selectedFilter === 'option4' && <Health searchValue={searchValue}/>}
                    {selectedFilter === 'option5' && <Science searchValue={searchValue}/>}
                    {selectedFilter === 'option6' && <Sports searchValue={searchValue}/>}
                    {selectedFilter === 'option7' && <Technology searchValue={searchValue}/>}

                </div>
            </div>

        </div>

    );
}

export default Categories;
