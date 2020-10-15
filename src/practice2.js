const inject = (items, sections) => {
  sections.sort((a, b) => b.index - a.index);
  sections.forEach((cur) => {
    items.splice(cur.index, 0, cur.content);
  });
  return items;
};
export { inject };
