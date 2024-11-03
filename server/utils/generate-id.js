import prisma from "../config/prisma.js";

let referenceNumber = 0; // Initialize reference number

const generateDonorId = async () => {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (01-12)
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

  let donorId;
  let isUnique = false;

  while (!isUnique) {
    const ref = String(referenceNumber++).padStart(2, "0"); // Increment reference number
    donorId = `DX${month}${year}${ref}`;

    // Check if this donorId already exists in the database
    const existingDonor = await prisma.donar.findUnique({
      where: { donorId },
    });

    if (!existingDonor) {
      isUnique = true;
    }
  }

  console.log("from generate" ,donorId);

  return donorId;
};

export default generateDonorId;
