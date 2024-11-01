let referenceNumber = 0; // Initialize reference number

const generateDonorId = () => {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (01-12)
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
  const ref = String(referenceNumber++).padStart(2, "0"); // Increment reference number

  // console.log(date,ref, year, month);

  return `DX${month}${year}${ref}`; // Create ID
};

export default generateDonorId;
