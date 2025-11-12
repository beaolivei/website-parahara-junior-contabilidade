
import React, { useEffect } from 'react';
import { BlogPost } from '../types';

interface ModalProps {
  post: BlogPost;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-700 hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <div className="mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
            {post.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
