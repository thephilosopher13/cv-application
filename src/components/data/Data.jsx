export const Data = () => {
    let data = []
  
    function updateData(newData) {
      data = [...newData]
    };
  
    return {
      data,
      updateData,
    };
};