import mitt from "mitt";
import { Language } from "./i18n/types";

type Events = {
  "language-updated": Language;
};

const eventBus = mitt<Events>();

export default eventBus;
