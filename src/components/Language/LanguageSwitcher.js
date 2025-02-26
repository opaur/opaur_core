import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import Image from 'next/image';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    {
      value: 'en',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/flags/bandera_en.png"
            alt="English flag" 
            width={20} 
            height={12} 
            style={{ marginRight: 10 }} 
          />
          EN
        </div>
      ),
    },
    {
      value: 'es',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/flags/bandera_es.png"
            alt="Spanish flag"
            width={20}
            height={12}
            style={{ marginRight: 10 }}
          />
          ES
        </div>
      ),
    },
    // {
    //   value: 'br',
    //   label: (
    //     <div style={{ display: 'flex', alignItems: 'center' }}>
    //       <Image
    //         src="/images/flags/bandera_br.png"
    //         alt="Brazilian flag"
    //         width={20}
    //         height={12}
    //         style={{ marginRight: 10 }}
    //       />
    //       BR
    //     </div>
    //   ),
    // },
  ];

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <div>
      <Select
        options={languageOptions}
        onChange={handleChange}
        defaultValue={languageOptions.find(option => option.value === i18n.language)}
      />
    </div>
  );
};

export default LanguageSelector;
