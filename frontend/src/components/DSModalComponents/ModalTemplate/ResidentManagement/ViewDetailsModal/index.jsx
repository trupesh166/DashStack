import React, { useState } from "react";
import { Avatar, Card, Col, Drawer, Row, Image, Button } from "antd";
import Icons from "@/constants/Icons";
import { DSButton, DSCard } from "../../../..";
import style from "./ViewDetailsModal.module.css";

import { Document, Page } from "react-pdf";
import clsx from "clsx";

export const ViewDetailsModal = ({
  title,
  open,
  handleClose,
  ImgSrc,
  name,
  email,
  Wing,
  Unit,
  Age,
  Gender,
  memberCount,
  documentType,
  OwnerDetails,
}) => {
  const [visible, setVisible] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentPdfUrl, setCurrentPdfUrl] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleImagePreview = (url) => {
    if (url.endsWith(".pdf")) {
      setCurrentPdfUrl(url);
    } else {
      setCurrentImageUrl(url);
    }
    setVisible(true);
  };

  return (
    <div>
      <Drawer
        className={style.drawer}
        title={<h3>{title}</h3>}
        onClose={handleClose}
        open={open}
        style={{ backgroundColor: "#f0f2f5" }}
        width={470}
      >
        <Row justify="center" className="mb-5">
          <Col span={24} className="text-center mb-1">
            <Avatar size={100} src={ImgSrc} />
          </Col>
          <Col span={24} className="text-center mb-1">
            <h3 className="fw-semibold">{name}</h3>
          </Col>
          <Col span={24} className="text-center mb-1">
            <h5>{email}</h5>
          </Col>
        </Row>

        <DSCard rootClass={"mb-4"}>
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Wing
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {Wing}
            </Col>
          </Row>
          <hr className={style.hr} />
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Unit
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {Unit}
            </Col>
          </Row>
          <hr className={style.hr} />
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Age
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {Age}
            </Col>
          </Row>
          <hr className={style.hr} />
          <Row>
            <Col span={12} style={{ fontWeight: "600" }}>
              Gender
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {Gender}
            </Col>
          </Row>
        </DSCard>

        <DSCard title={"Document"} rootClass={"mb-4"}>
          {documentType?.map((content) => (
            <Row
              justify={"space-between"}
              align={"middle"}
              className={style.document}
              key={content.label}
            >
              <Col>
                <Row align={"middle"} gutter={12}>
                  <Col>
                    <h3 className="d-flex">
                      {content.url.endsWith(".png") ||
                      content.url.endsWith(".jpg")
                        ? Icons.Jpg
                        : Icons.Pdf}
                    </h3>
                  </Col>
                  <Col>
                    <h6>{content.label}</h6>
                    <p className="clr-silver">{content.size}</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <DSButton
                  icon={Icons.EyeShow}
                  onClick={() => handleImagePreview(content.url)}
                  correct
                  URL
                />
                {/* Conditionally render the image or PDF */}
                {content.url.endsWith(".png") ||
                content.url.endsWith(".jpg") ? (
                  <Image
                    style={{ display: "none" }}
                    src={content.url}
                    preview={{
                      visible,
                      src: currentImageUrl,
                      onVisibleChange: (value) => setVisible(value),
                    }}
                  />
                ) : content.url.endsWith(".pdf") ? (
                  <Button
                    onClick={() => setVisible(true)}
                    icon={<Icons.EyeShow />}
                  >
                    View PDF
                  </Button>
                ) : null}
              </Col>
            </Row>
          ))}
        </DSCard>

        {/* PDF Viewer Modal */}
        {currentPdfUrl && visible && (
          <div className="pdf-viewer">
            <Document file={currentPdfUrl}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        )}

        {OwnerDetails && (
          <Card title="Owner Details" className="mb-4">
            {OwnerDetails?.map((content) => (
              <DSCard key={content.key}>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Full Name</h6>
                  <h6>{content.fullName}</h6>
                </div>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Phone No</h6>
                  <h6>{content.add}</h6>
                </div>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Address</h6>
                  <h6>{content.address}</h6>
                </div>
              </DSCard>
            ))}
          </Card>
        )}

        {memberCount && (
          <Card
            title="Member Counting"
            extra={<h5 className="clr-white ms-4">{memberCount?.length}</h5>}
          >
            {memberCount?.map((content) => (
              <DSCard
                rootClass={clsx(memberCount?.length > 1 ? "mb-4" : "mb-0")}
                key={content.key}
              >
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Full Name</h6>
                  <h6>{content.fullName}</h6>
                </div>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Phone No</h6>
                  <h6>{content.phoneNumber}</h6>
                </div>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Age</h6>
                  <h6>{content.age}</h6>
                </div>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Gender</h6>
                  <h6>{content.gender}</h6>
                </div>
                <div className={"card-grid"}>
                  <h6 className="fw-semibold">Relation</h6>
                  <h6>{content.relation}</h6>
                </div>
              </DSCard>
            ))}
          </Card>
        )}
      </Drawer>
    </div>
  );
};
