import { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { toast } from "sonner";
import { publicRequest } from "../requestMethod";

const ModalComponent = ({ isOpen, onOpenChange, updateDonar, donorData }) => {
  const modal = useRef(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    age: "",
    weight: "",
    address: "",
    motherNumber: "",
    bloodType: "",
  });

  const clearText = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      age: "",
      weight: "",
      address: "",
      motherNumber: "",
      bloodType: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await publicRequest.post("/donar/", formData);
      console.log(response.data);

      toast.success(response.data.message);
      clearText();
      handleModalClose();

      updateDonar();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalClose = () => {
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            {donorData ? (
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Donor Details</h2>
                <p className="text-sm text-gray-500">Details of the donor</p>
              </ModalHeader>
            ) : (
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Donate Blood</h2>
                <p className="text-sm text-gray-500">
                  Please fill the form below to donate blood
                </p>
              </ModalHeader>
            )}
            {donorData ? (
              <ModalBody>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong>Name:</strong> {donorData.fullname}
                  </p>
                  <p>
                    <strong>Email:</strong> {donorData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {donorData.phone}
                  </p>
                  <p>
                    <strong>Age:</strong> {donorData.age}
                  </p>
                  <p>
                    <strong>Weight:</strong> {donorData.weight}
                  </p>
                  <p>
                    <strong>Address:</strong> {donorData.address}
                  </p>
                  <p>
                    <strong>Mother Number:</strong> {donorData.motherNumber}
                  </p>
                  <p>
                    <strong>Blood Type:</strong> {donorData.bloodType}
                  </p>
                  <p>
                    <strong>Status: </strong>{" "}
                    {donorData.status === "finished" ? (
                      <span className="text-white bg-green-500 py-1 px-2 rounded-full font-semibold">
                        {donorData.status}
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-white bg-red-700 font-semibold">
                        {donorData.status}
                      </span>
                    )}
                  </p>
                </div>
              </ModalBody>
            ) : (
              <ModalBody>
                <form action="">
                  <div className="flex gap-2">
                    <div>
                      <label forHtml="">Full Name</label>
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label forHtml="">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label forHtml="">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label forHtml="">Age</label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label forHtml="">Weight</label>
                      <input
                        type="text"
                        name="weight"
                        id="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label forHtml="">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label forHtml="">Mother Number</label>
                      <input
                        type="text"
                        name="motherNumber"
                        id="motherNumber"
                        value={formData.motherNumber}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label forHtml="">BloodType</label>
                      <select
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        id=""
                      >
                        <option disabled>Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>
                </form>
              </ModalBody>
            )}
            {donorData ? (
              <Button className="m-5 bg-green-600 " color="" variant="light">
                Print
              </Button>
            ) : (
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={handleModalClose}
                >
                  Close
                </Button>
                <Button onClick={handleSubmit} color="primary">
                  Submit
                </Button>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
