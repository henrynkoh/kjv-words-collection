export type Category =
  | "Prophecy (1st Coming)"
  | "Prophecy (2nd Coming)"
  | "Fulfillment"
  | "Mystery Revealed to Paul"
  | "Rapture";

export interface VerseEntry {
  number: number;
  category: Category;
  theme: string;
  title: string;
  subTitle: string;
  who: string;
  whom: string;
  why: string;
  when: string;
  where: string;
  verseRef: string;
  verseKjv: string;
  verseKr?: string;
  explanation: string;
}

export interface Section {
  id: string;
  label: string;
  category: Category;
  theme?: string;
  verseNumbers: number[];
}

export interface NavSection {
  id: string;
  label: string;
  themeId?: string;
  children: { id: string; label: string; verseCount: number }[];
}
