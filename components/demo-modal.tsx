"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[90vh] rounded-lg bg-white p-6 shadow-xl overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Request a Demo</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyyfShoLnzpG5VRM0S7931YIsgQ7iE_71MXUI-x3-uWEr3GQ/viewform?embedded=true"
            className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </DialogPanel>
      </div>
    </Dialog>
  );
}