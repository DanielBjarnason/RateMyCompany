import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.navn.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className="">
      <div className="flex flex-row justify-center mt-32">
        <input
          value={wordEntered}
          onChange={handleFilter}
          type="text"
          placeholder={placeholder}
          className="h-12 p-5 text-lg text-black rounded rounded-r-none cursor-pointer w-96"
        />
        <div className="grid p-2 bg-white rounded rounded-l-none place-items-center">
          {filteredData.length === 0 ? (
            <SearchIcon className="text-black" />
          ) : (
            <CloseIcon
              className="text-black cursor-pointer"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {filteredData.length != 0 && (
          <div className="h-64 overflow-hidden overflow-y-auto bg-white rounded w-96 scroll-invisible">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link className="" to={`/firmaprofil/${value._id}`}>
                  <p className="mt-5 font-black text-black">{value.navn}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
