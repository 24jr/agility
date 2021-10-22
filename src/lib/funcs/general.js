export function formatDate(date) {
  if (date) {
    const d = new Date(JSON.parse(date));
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return [month,day,year].join("/");
  } else {
    return "mm/dd/yyyy";
  }
}

export function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

export function getObjFromPath(obj, path){
  let current = obj
  for(let i = 0; i < path.length; i++){
    if(!(path[i] in current)) return false
    current = current[path[i]];
  }
  return current;
}