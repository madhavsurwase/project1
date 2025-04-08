"use client";

interface IHeading {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<IHeading> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      {subtitle && (
        <div className="font-light mt-2 text-neutral-500">{subtitle}</div>
      )}
    </div>
  );
};

export default Heading;
