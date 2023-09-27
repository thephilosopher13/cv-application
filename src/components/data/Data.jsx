export const Data = () => {
    let data = []
  
    const updateData = (newData) => {
      data = newData;
    };
  
    return {
      data,
      updateData,
    };
};