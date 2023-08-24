"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/model";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    // Return the JSX content
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Modal
    </Modal>
  );
};
