import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

let toastId = 0;
const toasts: Toast[] = [];
const listeners: ((toasts: Toast[]) => void)[] = [];

const notify = listeners => listeners.forEach(listener => listener(toasts));

export const toast = {
  success: (title: string, message?: string, duration = 4000) => {
    const id = (++toastId).toString();
    toasts.push({ id, type: 'success', title, message, duration });
    notify(listeners);
    setTimeout(() => toast.dismiss(id), duration);
  },
  error: (title: string, message?: string, duration = 5000) => {
    const id = (++toastId).toString();
    toasts.push({ id, type: 'error', title, message, duration });
    notify(listeners);
    setTimeout(() => toast.dismiss(id), duration);
  },
  warning: (title: string, message?: string, duration = 4000) => {
    const id = (++toastId).toString();
    toasts.push({ id, type: 'warning', title, message, duration });
    notify(listeners);
    setTimeout(() => toast.dismiss(id), duration);
  },
  info: (title: string, message?: string, duration = 4000) => {
    const id = (++toastId).toString();
    toasts.push({ id, type: 'info', title, message, duration });
    notify(listeners);
    setTimeout(() => toast.dismiss(id), duration);
  },
  dismiss: (id: string) => {
    const index = toasts.findIndex(t => t.id === id);
    if (index > -1) {
      toasts.splice(index, 1);
      notify(listeners);
    }
  }
};

const ToastItem: React.FC<{ toast: Toast }> = ({ toast: toastItem }) => {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const iconColors = {
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600'
  };

  const Icon = icons[toastItem.type];

  return (
    <div className={`max-w-sm w-full ${colors[toastItem.type]} border rounded-lg shadow-lg p-4 pointer-events-auto`}>
      <div className="flex items-start">
        <Icon className={`h-5 w-5 ${iconColors[toastItem.type]} mr-3 mt-0.5`} />
        <div className="flex-1">
          <h4 className="text-sm font-medium">{toastItem.title}</h4>
          {toastItem.message && (
            <p className="text-sm mt-1 opacity-90">{toastItem.message}</p>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(toastItem.id)}
          className="ml-4 inline-flex text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export const Toaster: React.FC = () => {
  const [toastList, setToastList] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (newToasts: Toast[]) => {
      setToastList([...newToasts]);
    };
    
    listeners.push(listener);
    
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
      {toastList.map(toast => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};