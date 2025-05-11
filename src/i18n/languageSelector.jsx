import { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition"
        title="Select Language"
      >
        <LanguageIcon />
        <span className="text-sm font-medium capitalize">{i18n.language}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-50">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                i18n.language === code ? "font-semibold text-blue-600" : "text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
