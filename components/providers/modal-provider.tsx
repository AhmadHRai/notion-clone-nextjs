"use client";

import { useEffect, useState } from "react";
import CoverImageModal from "../modals/cover-image-modal";
import { SettingsModal } from "../modals/settings-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
}
