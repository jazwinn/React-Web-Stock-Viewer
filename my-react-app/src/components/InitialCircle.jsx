export default function InitialCircle({initial, bgColor = "#facc15", textColor = "#000000"}) {
  return (
    <div 
    className="w-10 h-10 rounded-full flex items-center justify-center" 
    style={{backgroundColor: bgColor}}>
      <span 
      className="text-2xl font-bold"
      style={{color: textColor}}>{initial}
      </span>
    </div>
  );
}
