import { School } from "@app/constants/syllabus-data"

export const schoolCodeMap: Readonly<{ [k: string]: string }> = {
  "11": School.PSE,
  "12": School.LAW,
  "15": School.EDU,
  "16": School.SOC,
  "18": School.SSS,
  "19": School.HUM,
  "20": School.SPS,
  "21": School.SILS,
  "23": School.CMS,
  "24": School.HSS,
  "26": School.FSE,
  "27": School.CSE,
  "28": School.ASE,
  "31": School.G_PS,
  "32": School.G_E,
  "33": School.G_LAW,
  "34": School.G_LAS,
  "37": School.G_EDU,
  "38": School.G_HUM,
  "39": School.G_SSS,
  "40": School.G_SAPS,
  "42": School.G_ITS,
  "43": School.G_SJAL,
  "44": School.G_IPS,
  "47": School.G_WLS,
  "48": School.G_SA,
  "50": School.G_SPS,
  "51": School.G_FSE,
  "52": School.G_CSE,
  "53": School.G_ASE,
  "54": School.G_SEEE,
  "56": School.G_SICCS,
  "57": School.G_WBS,
  "71": School.ART,
  "92": School.CJL,
  "98": School.CIE,
  "9S": School.GEC,
}

export default schoolCodeMap
