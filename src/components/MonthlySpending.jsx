import React, { useEffect, useRef, useState } from 'react';

const InnerRadiusGraph = ({ data }) => {
  const canvasRef = useRef(null);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [outerRadius, setOuterRadius] = useState(100);
  const [innerRadius, setInnerRadius] = useState(85);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    setCenterX(canvas.width / 2);
    setCenterY(canvas.height / 2);

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw inner radius doughnut graph
    drawInnerRadiusDoughnutGraph(context, data, centerX, centerY, outerRadius, innerRadius);


    // Display a paragraph within the inner radius
    displayParagraph(context, centerX, centerY, innerRadius, "$4.573.89");
    }, [data, centerX, centerY, outerRadius, innerRadius]);

  const drawInnerRadiusDoughnutGraph = (context, data, x, y, outerR, innerR) => {
    const total = data.reduce((acc, value) => acc + value.value, 0);
    let startAngle = 0;

    data.forEach((category) => {
      const angle = (category.value / total) * (2 * Math.PI);
      const endAngle = startAngle + angle;

      context.beginPath();
      context.arc(x, y, outerR, startAngle, endAngle);
      context.arc(x, y, innerR, endAngle, startAngle, true);
      context.fillStyle = category.color;
      context.fill();

      // Update startAngle for the next segment
      startAngle = endAngle;
    });
  };

  const displayParagraph = (context, x, y, r, text) => {
    context.fillStyle = '#000000';
    context.font = 'bold 16px Work Sans';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, x, y);
  };

  return (
    <div className='flex items-center gap-4 md:gap-6'>
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        InnerRadiusGraph={200}
      />
      <div>
        <div>
          {data.map((category) => (
            <div key={category.label} className=''>
              <div className='flex items-center'>
                <div
                  style={{
                    display: 'block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '100%',
                    backgroundColor: category.color,
                    marginRight: '5px',
                  }}>
                </div>
                <span className='text-xs font-medium text-black opacity-60'>{category.label}</span>
              </div>
              <span className='text-sm font-semibold text-black ml-4'>${category.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MonthlySpending = () => {
  const data = [
    { value: 148.40, color: '#449EFF', label: 'Subscriptions' },
    { value: 824.28, color: '#FFB95E', label: 'Mortgage' },
    { value: 290.00, color: '#17B26A', label: 'Investing' },
    { value: 642.48, color: '#FF7B7B', label: 'Groceries' },
    { value: 614.16, color: '#FF6BD3', label: 'Food and dining' },
    { value: 48.44, color: '#D8F468', label: 'Other' },
  ];

  return (
    <div className='rounded-xl bg-color11 border border-color10 shadow shadow-shadow-color p-5'>
      <h1 className='text-dark-blue text-base font-semibold mb-10'>Companies Monthly spending</h1>
      <InnerRadiusGraph data={data} />
    </div>
  );
};

export default MonthlySpending;
