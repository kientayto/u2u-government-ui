import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useCallback } from 'react'
import { classNames } from '../../utils';

export const modalScale = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl"
}
export type ModalScale = typeof modalScale[keyof typeof modalScale];


interface ModalProps {
  children: ReactNode
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  scale?: ModalScale
  className?: string
}

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  scale = modalScale.md,
  className = ""
}: ModalProps) => {

  const panelClass = useCallback(() => {
    const modalBase = "transform overflow-hidden rounded-xl text-left align-middle shadow-xl transition-all"
    const modalWidth = () => {
      switch (scale) {
        case modalScale.sm:
          return "w-[300px]"
        case modalScale.md:
          return "w-[600px]"
        case modalScale.lg:
          return "w-[800px]"
        case modalScale.xl:
          return "w-[1140px]"
        default:
          return "w-[600px]"
      }
    }
    const padding = () => {
      return "p-10"
    }
    const bg = () => {
      return "bg-gradient-to-br from-cyan to-[#EBFCFB]"
    }
    return classNames(modalBase, modalWidth(), padding(), bg(), className)
  }, [scale, className])


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={panelClass()}>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}