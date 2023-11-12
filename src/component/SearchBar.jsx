
//App.jsx kısmında oluşturulan props
const SearchBar = ({ searchValue, setSearchValue }) => {

  return (
    <div className='ml-auto'>
      <form className='flex items-center gap-x-4 w-full'>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='search' type="text" className='pl-3 outline-none rounded-2xl shadow py-2 w-[200px] lg:w-[270px] border'/>
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </form>
    </div>
  );
};

export default SearchBar;