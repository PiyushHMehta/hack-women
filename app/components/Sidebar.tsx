//@ts-nocheck
'use client'

import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-lg font-bold">Sidebar Title</h2>
                    <Button onClick={onClose} className="text-red-500">Close</Button>
                </div>
                <div className="p-4">
                    {/* Add your sidebar links or content here */}
                    <ul>
                        <li><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">Link 1</a></li>
                        <li><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">Link 2</a></li>
                        <li><a href="#" className="block p-2 text-gray-700 hover:bg-gray-200">Link 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
