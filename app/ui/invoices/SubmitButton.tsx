'use client';
import { useFormStatus } from 'react-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`relative flex items-center justify-center rounded-md border p-2 transition hover:bg-gray-100 ${
        pending ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <span className="sr-only">Delete</span>

      {pending ? (
        <svg
          className="h-5 w-5 animate-spin text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        <TrashIcon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
