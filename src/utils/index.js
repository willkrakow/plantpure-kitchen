export const string_to_slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}


export const flattenObject = (obj) => {
  let flattened = {}
  for (let property in obj){
    if (property.hasOwnProperty(property)) continue
    if ((typeof obj[property]) == "object"){
      let flatObject = flattenObject(obj[property])
      for (let nestedProp in flatObject) {
        if (!flatObject.hasOwnProperty(nestedProp)) continue
        flattened[`${property}${nestedProp}`] = flatObject[nestedProp]
      }
    }
    else {
      flattened[property] = obj[property]
    }
  }
  return flattened
}


export const searchObjects = (arr, textQuery) => {
  const loweredQuery = textQuery.toLowerCase()
  const results = arr.filter((item) => {
    const flattened = flattenObject(item)
    const matchesQuery = Object.entries(flattened).map((entry) => {
      let loweredValue = entry[1].toString().toLowerCase();
      return loweredValue.includes(loweredQuery)
    })
    if (matchesQuery.includes(true)) {
      return true
    }
    return false
  })
  return results
}

export const getNodes = (arr, nodeType) => {
  const nodes = arr.map((edge) => {
    let temp = { ...edge.node }
    temp['nodetype'] = nodeType
    return temp
  })
  return nodes
}

