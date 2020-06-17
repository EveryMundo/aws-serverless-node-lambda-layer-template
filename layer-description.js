module.exports = () => Object.entries(require("./nodejs/package.json").dependencies).map(([k,v])=>`${k}@${v}`).join("\n")
