const set = require("set-value");
/*
convert a bunch of

 A > B > C
 A > B > D
 A > B > D > E

 to

 {
  title: "A",
  children: [{
    title: "B",
    children: [{
      title: "C",
      children: []
    },{
      title: "D",
      children: [{
        title: "E",
        children:[]
      }]
    }]
  }]
 }

*/
const trimmed = str => str.trim();
const isSomething = thing => trimmed(thing).length;

// make it a full object (title, children)
const enhanceTree = tree =>
  Object.keys(tree)
    .filter(isSomething)
    .reduce((a, k) => [...a, { title: k, children: enhanceTree(tree[k]) }], []);

// build the basic tree
const parseThemes = textContent => {
  const rows = textContent.split("\n").filter(isSomething);

  const rowsParts = rows.map(row =>
    row
      .split(">")
      .map(trimmed)
      .filter(isSomething)
  );

  const tree = rowsParts.reduce(
    (tree, parts) => set(tree, parts.join("."), {}),
    {}
  );
  return {
    title: "root",
    children: enhanceTree(tree)
  };
};

//const debug = obj => console.log(JSON.stringify(obj, null, 2));

export default parseThemes;
