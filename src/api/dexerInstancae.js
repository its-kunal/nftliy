"https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

import axios from "axios";

export default axios.create({
  baseURL: "https://api.dexscreener.com/",
});
