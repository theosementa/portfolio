import { useEffect, useState } from 'react';
import i18n from '../../../resources/localization/i18n';

export const LanguagePicker = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const flagFR = "/assets/images/flags/fr.svg"
  const flagEN = "/assets/images/flags/uk.svg"

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng)
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <div className='font-sans'>
      <button
        onClick={toggleDropdownVisibility}
        className="flex flex-row items-center text-lg text-white font-semibold bg-background-200 py-2 px-4 rounded-lg"
      >
        <img src={i18n.language === "fr" ? flagFR : flagEN} alt="French flag" className="h-5 w-5 mr-2" />
        {i18n.language === "fr" ? "Français" : "English"}
      </button>

      {isDropdownVisible && (
        <div className="absolute right-2 mt-2 w-32 md:w-40 bg-background-200 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => changeLanguage("fr")}
            className="flex items-center w-full px-4 py-2 font-sans font-semibold text-white hover:bg-background-300 hover:rounded-t-lg"
          >
            <img src={flagFR} alt="French flag" className="h-5 w-5 mr-2" />
            Français
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center w-full px-4 py-2 font-sans font-semibold text-white hover:bg-background-300 hover:rounded-b-lg"
          >
            <img src={flagEN} alt="English flag" className="h-5 w-5 mr-2" />
            English
          </button>
        </div>
      )}
      
    </div>
  )
}