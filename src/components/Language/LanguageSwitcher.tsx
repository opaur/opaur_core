import React from 'react';
import { useTranslation } from 'react-i18next';
import Select, { SingleValue } from 'react-select';
import Image from 'next/image';

// Define the shape of a language option
interface LanguageOption {
  value: string;
  label: JSX.Element;
  shortLabel: string; // Short label for display when closed
}

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languageOptions: LanguageOption[] = [
    {
      value: 'en',
      label: (
        <div className="flex items-center gap-2">
          <Image src="/images/flags/bandera_en.png" alt="English flag" width={20} height={12} />
          English
        </div>
      ),
      shortLabel: 'English',
    },
    {
      value: 'es',
      label: (
        <div className="flex items-center gap-2">
          <Image src="/images/flags/bandera_es.png" alt="Spanish flag" width={20} height={12} />
          Español
        </div>
      ),
      shortLabel: 'Español',
    },
    {
      value: 'br',
      label: (
        <div className="flex items-center gap-2">
          <Image src="/images/flags/bandera_br.png" alt="Brazilian flag" width={20} height={12} />
          Português
        </div>
      ),
      shortLabel: 'Português',
    },
  ];

  const handleChange = (selectedOption: SingleValue<LanguageOption>) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  return (
    <div className="text-black dark:text-white w-16"> {/* Small width for closed state */}
      <Select
        options={languageOptions}
        onChange={handleChange}
        isSearchable={false}
        defaultValue={languageOptions.find(option => option.value === i18n.language)}
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        formatOptionLabel={(option, { context }) =>
          context === 'value' ? option.shortLabel : option.label
        }
        classNamePrefix="react-select"
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            width: isFocused ? 'auto' : '4rem', // Expands when focused
            minWidth: '6rem',
            padding: '0px',
            cursor: 'pointer',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent',
      
          }),
          singleValue: (base) => ({
            ...base,
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'left',
            color: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
              ? '#f2f2f2'
              : '#1c2434',
        
          }),
          menu: (base) => ({
            ...base,
            minWidth: '10rem', // Ensures menu expands
            borderRadius: '6px',
            backgroundColor: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'rgb(36, 48, 63)' // Dark mode bg-gray-700
              : '#f2f2f2',
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? '#695cff'
              : isFocused
                ? 'rgba(79, 70, 229, 0.1)'
                : 'transparent',
            color: isSelected
              ? '#f2f2f2'
              : typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? '#f2f2f2'
                : '#1c2434',
            padding: '10px',
            borderRadius: '6px',
            cursor: 'pointer',
          }),
        }}
        
      />
    </div>
  );
};

export default LanguageSelector;
