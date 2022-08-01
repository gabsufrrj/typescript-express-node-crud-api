const generateObject = (array: any, output: any) => {
  const result = array.map((row: any, index: any) => {
    if (typeof output[index] === 'number') { 
      return {
        id: row.id,
        userId: row.userId,        
        productsIds: [output[index]],
      };
    }
    return {
      id: row.id,
      userId: row.userId,        
      productsIds: output[index],
    };
  });
  return result;  
};

export default generateObject;