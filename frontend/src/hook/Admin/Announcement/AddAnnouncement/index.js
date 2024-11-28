import { useState } from "react";

export const UseAddAnnouncement = () => {
  const [addAnnouncement, setAddAnnouncement] = useState(false);
  return { addAnnouncement, setAddAnnouncement };
};
