'use client';
import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { LocaleSelectInputProps } from '../index';

export function Input(props: { data: LocaleSelectInputProps, state: [boolean, React.Dispatch<React.SetStateAction<boolean>>], children: JSX.Element }): JSX.Element {
  const [isOpen, setIsOpen] = props.state;

  return(
    <button
      onClick={() => setIsOpen((old) => !old)}
      className='flex items-center relative bg-secondary-300 hover:bg-secondary-400 rounded-[10px] border-[2px] border-[#303030] border-solid hover:border-primary-200 duration-150 cursor-pointer px-[15px]'
      style={{ 
        width: props.data.width === 'full'? '100%' : `${props.data.width}px`,
        height: props.data.height === 'default'? '45px' : `${props.data.height}px`
      }}
    >
      <div className='flex items-center gap-[10px]'>
        <FaGlobeAmericas className='text-primary-200' size={19}/>
        <p className='text-[14px] text-primary-200'>{props.children}</p>
      </div>
      <AiFillCaretDown className={`text-primary-400 absolute right-[10px] top-[50%] translate-y-[-50%] duration-150 ${isOpen? 'rotate-[180deg]' : 'rotate-0'}`} size={16}/>
    </button>
  );
}