// src/components/Sheet.js
import React, { useState } from 'react';

export const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { isOpen, toggleSheet });
      })}
    </div>
  );
};

export const SheetTrigger = ({ children, asChild, toggleSheet }) => {
  const Element = asChild ? 'div' : 'button';
  return (
    <Element onClick={toggleSheet}>
      {children}
    </Element>
  );
};

export const SheetContent = ({ children, side = 'left', isOpen, toggleSheet }) => {
  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 z-40 flex ${side === 'left' ? 'justify-start' : 'justify-end'}`}>
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSheet}></div>
          <div className="relative z-50 w-64 bg-white p-4 shadow-lg">
            {children}
          </div>
        </div>
      )}
    </>
  );
};
