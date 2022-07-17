exports.setCurrentItem = (state, action) => {
  const currentItem = action.payload;
  state.currentItem = currentItem;
};

exports.setShowCodeCard = (state, action) => {
  const showCodeCard = action.payload;
  state.showCodeCard = showCodeCard;
};
exports.setData = (state, action) => {
  const data = action.payload;
  state.data = data;
};
exports.setActiveCard = (state, action) => {
  const activeCard = action.payload;
  state.activeCard = activeCard;
};

exports.setCode = (state, action) => {
  const { text, lang, title } = action.payload;
  state.code.text = text;
  state.code.lang = lang;
  state.code.title = title;
};
