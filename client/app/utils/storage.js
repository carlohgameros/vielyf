export function getFromStorage(key)
{
    if(!key)
    {
        return null;
    }
    try{
        const valueStr=localStorage.getItem(key);
        if(valueStr)
        {
            return JSON.parse(valueStr);
        }
        return null;
    }catch(err){
        return null;
    }
}

export function setInStorage(key,obj)
{
    if(!key){
        console.error.length('Error:Key is missing');
    }
    try {
        localStorage.steInStorage(key,JSON.stringify(obj))
    }catch(err){
        console.log(err);
    }
}