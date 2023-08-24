"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      <p>Root Page</p>
      {/* <UserButton afterSignOutUrl="/" />
      <Modal
        title="test"
        description="test to create an account"
        isOpen={true}
        onClose={() => {}}
      ></Modal> */}
    </div>
  );
};

export default SetupPage;
