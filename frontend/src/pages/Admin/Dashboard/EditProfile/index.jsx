import React, { useRef, useState } from "react";
import styles from "./EditProfile.module.css";
import { DSButton, DSCard, DSInput, DSSelect } from "../../../../components";
import { Avatar, Col, Row } from "antd";

export const EditProfile = () => {
  const [userdetail, setUserDetail] = useState({
    firstName: "Arlene",
    lastName: "McCoy",
    phoneNumber: "9913044537",
    email: "you@example.com",
    societyName: "Shantigram Residency",
    country: "India",
    state: "Gujarat",
    city: "Baroda",
    profileImage:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  });

  const fileUpload = useRef(null);

  const handleEditImage = () => {
    fileUpload.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserDetail((prev) => ({
          ...prev,
          profileImage: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log(userdetail);
  };

  return (
    <div className={styles.editProfile}>
      <div className={styles.profileCard}>
        <div className={styles.profile}>
          <form action="" onSubmit={handleSubmitData}>
            <h3 className="mb-5">Edit Profile</h3>

            <DSCard>
              <Row className="mt-3">
                <Col span={6} className={styles.userImage}>
                  <input
                    type="file"
                    className="d-none"
                    ref={fileUpload}
                    onChange={handleFileChange}
                  />
                  <Avatar
                    size={100}
                    src={userdetail.profileImage}
                    onClick={handleEditImage}
                    style={{ cursor: "pointer" }}
                  />
                  <h4>{`${userdetail.firstName} ${userdetail.lastName}`}</h4>
                </Col>

                <Col span={18}>
                  <Row gutter={16} className="mb-4">
                    <Col span={12}>
                      <DSInput
                        label={"First Name"}
                        name="firstName"
                        value={userdetail.firstName}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col span={12}>
                      <DSInput
                        label={"Last Name"}
                        name="lastName"
                        value={userdetail.lastName}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16} className="mb-4">
                    <Col span={12}>
                      <DSInput
                        label={"Phone Number"}
                        name="phoneNumber"
                        value={userdetail.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col span={12}>
                      <DSInput
                        label={"Email Address"}
                        name="email"
                        value={userdetail.email}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16} className="mb-4">
                    <Col span={12}>
                      <DSSelect
                        label={"Select Society"}
                        name="societyName"
                        value={userdetail.societyName}
                        onChange={(value) =>
                          setUserDetail((prev) => ({
                            ...prev,
                            societyName: value,
                          }))
                        }
                      />
                    </Col>
                    <Col span={12}>
                      <DSInput
                        label={"Country"}
                        name="country"
                        value={userdetail.country}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16} className="mb-4">
                    <Col span={12}>
                      <DSInput
                        label={"State"}
                        name="state"
                        value={userdetail.state}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col span={12}>
                      <DSInput
                        label={"City"}
                        name="city"
                        value={userdetail.city}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="d-flex justify-content-end mt-4">
                <DSButton variant={"primary"} type="submit">
                  Update Profile
                </DSButton>
              </div>
            </DSCard>
          </form>
        </div>
      </div>
    </div>
  );
};
