import React from "react";

import Lang from "@bit/wasedatime.core.ts.constants.langs";

import { tokenize } from "@app/utils/course-search";

export const Highlight = function (
  searchTerm: string | string[],
  searchLang: string | string[],
  text: string
): string | any[] {
  if (searchTerm.length > 0) {
    const termUnion = tokenize(searchTerm).join("|");
    // Capturing parentheses () allows matched results to be included in the array.
    let regex;
    switch (searchLang) {
      case Lang.JA:
        regex = new RegExp(`(${termUnion})`, "i");
        break;
      case Lang.EN:
        regex = new RegExp(`\\b(${termUnion})`, "i");
        break;
      default:
        alert(`Unsupported language: ${searchLang}`);
    }
    const textParts = text.split(regex);

    return textParts.map((part, i) => {
      if (i % 2 === 0) {
        return part;
      }

      return <mark key={i}>{part}</mark>;
    });
  }

  return text;
};

export default Highlight;
