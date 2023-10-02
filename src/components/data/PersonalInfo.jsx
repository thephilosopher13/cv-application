export const PersonalInfo = {
    name: null,
    email: null,
    address: null,
    number: null,
    updateInfo: function (newName, newEmail, newAddress, newNumber) {
        // Create a new object with updated values
        return {
          ...this,
          name: newName,
          email: newEmail,
          address: newAddress,
          number: newNumber,
        };
      },
}