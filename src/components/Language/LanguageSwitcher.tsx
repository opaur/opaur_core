import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { SingleValue } from 'react-select';
import Image from 'next/image';

// Define the shape of a language option
interface LanguageOption {
  value: string;
  label: JSX.Element;
  shortLabel: JSX.Element; // Short label for display when closed
}

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [defaultLanguage, setDefaultLanguage] = useState<LanguageOption | undefined>();

  const languageOptions: LanguageOption[] = [
    {
      value: 'en',
      label: (
        <div className="flex items-center gap-2">
          <Image src="/images/flags/bandera_en.png" alt="English flag" width={20} height={12} />
          English
        </div>
      ),
      shortLabel: (
        <div className="flex items-center gap-1">
          <Image src="/images/flags/bandera_en.png" alt="English flag" width={16} height={10} />
          EN
        </div>
      ),
    },
    {
      value: 'es',
      label: (
        <div className="flex items-center gap-2">
          <Image src="/images/flags/bandera_es.png" alt="Spanish flag" width={20} height={12} />
          Español
        </div>
      ),
      shortLabel: (
        <div className="flex items-center gap-1">
          <Image src="/images/flags/bandera_es.png" alt="Spanish flag" width={16} height={10} />
          ES
        </div>
      ),
    },
    {
      value: 'br',
      label: (
        <div className="flex items-center gap-2">
          <Image src="/images/flags/bandera_br.png" alt="Brazilian flag" width={20} height={12} />
          Português
        </div>
      ),
      shortLabel: (
        <div className="flex items-center gap-1">
          <Image src="/images/flags/bandera_br.png" alt="Brazilian flag" width={16} height={10} />
          PT
        </div>
      ),
    },
  ];

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0]; // Extract primary language (e.g., "en-US" -> "en")
    const matchedLang = languageOptions.find(option => option.value === browserLang);
    
    if (matchedLang) {
      setDefaultLanguage(matchedLang);
      i18n.changeLanguage(matchedLang.value);
    } else {
      // Fallback to default language if no match
      setDefaultLanguage(languageOptions[0]);
      i18n.changeLanguage(languageOptions[0].value);
    }
  }, [i18n]);

  const handleChange = (selectedOption: SingleValue<LanguageOption>) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
      setDefaultLanguage(selectedOption);
    }
  };

  return (
    <div className="text-black dark:text-white w-16">
      <Select
        options={languageOptions}
        onChange={handleChange}
        isSearchable={false}
        value={defaultLanguage}
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        formatOptionLabel={(option, { context }) =>
          context === 'value' ? option.shortLabel : option.label
        }
        classNamePrefix="react-select"
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            width: isFocused ? 'auto' : '4rem',
            padding: '0',
            minWidth: '0',
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
            margin: '0px',
            color: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
              ? '#f2f2f2'
              : '#1c2434',
          }),
          menu: (base) => ({
            ...base,
            minWidth: '10rem',
            borderRadius: '6px',
            backgroundColor: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'rgb(36, 48, 63)'
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
