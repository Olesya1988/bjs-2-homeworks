function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);
    if(objectInCache) {      
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({hash, result});
    
    if (cache.length > 5) {
      cache.shift(); 
    }
    return "Вычисляем: " + result;
  }
  return wrapper;
}



function debounceDecoratorNew(func) {
  let timeout = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++; 
    
    if(timeout === null) {
      func(...args);
        wrapper.count++;
      }
      
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }

  return wrapper;
}