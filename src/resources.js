/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

// This resource file is separated from the file of the options UI screen,
// in order to make the main feature lighter and faster.

const ja = {
  doesntSupportFrame: "Mouse Dictionaryは、フレームのあるページで使用することはできません。"
};

export default key => {
  return ja[key] || null;
};
