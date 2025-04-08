import React, { useState } from 'react'
import StudentList from './StudentList'
import ReactPaginate from 'react-paginate';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

let itemsPerPage = 1;

const Students = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <div className='filters w-full'>
        <div className="search-bar m-3 mx-5 flex justify-end gap-5">
          <input type="search" placeholder='Search' className='w-60 text-xs p-2 h-10 border-2 border-primary rounded-lg' />
          <div className='flex'>
            <input type="date" className=' p-2 border-2 border-primary rounded-lg h-10' />
          </div>
          <select name="year" id="" className='p-2 px-4 border-2 border-primary rounded-lg h-10'>
            <option value="">--Select Year-- </option>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
          </select>
        </div>
      </div>

      <div className='m-8 '>
        <StudentList />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<MdKeyboardDoubleArrowRight color='white' />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={<MdKeyboardDoubleArrowLeft color='white' />}
          renderOnZeroPageCount={null}
          className='flex gap-2 justify-end items-center select-none'
          previousClassName='border border-black p-1 bg-black rounded-sm hover:bg-slate-600'
          nextClassName='border border-black p-1 bg-black rounded-sm hover:bg-slate-600'
          activeClassName='bg-primary px-2 text-sm py-1 text-white'
          pageClassName=''
          
        />
      </div>
    </>
  )
}

export default Students