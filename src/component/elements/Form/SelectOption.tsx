/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

interface SelectOptionProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: any;
}
const SelectOption = ({ options, value, onChange }: SelectOptionProps) => {
  const [selectedOption, setSelectedOption] = useState<any | undefined>(
    options.find((option) => option.value === value)
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full text-gray-500">
      <div id="scrollContainer" className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          className=" flex h-[40px] w-full cursor-pointer items-center justify-between rounded-lg  border-[1px] border-gray-500 pl-6 pr-2 text-sm  text-black transition-all  duration-150 dark:text-white"
        >
          {/* flex w-full h-[40px] text-xs text-black cursor-pointer items-center justify-between rounded-md border-[1px] border-gray-CD pl-6 pr-2 transition-all duration-150 */}
          {selectedOption?.label || 'Select'}
        </div>
        {isOpen && (
          <div className="absolute z-50 mt-2 h-[10rem] w-full overflow-auto rounded-b-lg bg-white shadow-lg">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer select-none px-4 py-2 text-[#437e60] hover:bg-[#437e60] hover:text-white"
                role="button"
                tabIndex={0}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        <div
          className={`${
            isOpen ? 'rotate-180' : ''
          } pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 transition duration-150`}
        >
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
