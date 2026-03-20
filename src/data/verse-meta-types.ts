import type { Category } from "@/types/verse";

/** Row shape from the eBook tables (KJV text supplied separately). */
export interface VerseMeta {
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
  verseKr?: string;
  explanation: string;
}
