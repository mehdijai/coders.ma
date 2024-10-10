declare type TOCItem = {
  title: string;
  href: string;
};

declare type TOCObject = TOCItem & {
  subItems: TOCItem[];
};
