import React from 'react';

interface IconListItem {
  icon: string;
  label: string;
  description?: string;
}

interface IconListProps {
  items: IconListItem[];
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

const IconList: React.FC<IconListProps> = ({
  items,
  layout = 'vertical',
  className = '',
}) => {
  const layoutStyles = layout === 'horizontal' ? 'flex gap-4' : 'space-y-3';

  return (
    <div className={`${layoutStyles} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{item.icon}</span>
          <div>
            <p className="font-semibold text-text-primary">{item.label}</p>
            {item.description && (
              <p className="text-text-secondary text-sm mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconList;
