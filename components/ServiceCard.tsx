interface ServiceCardProps {
  number: string;
  title: string;
  accentColor: string;
  headlineColor: string;
  services: string[];
}

export function ServiceCard({
  number,
  title,
  accentColor,
  headlineColor,
  services,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b from-${accentColor}/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />
      <div className="relative p-8 border-b md:border-r border-white/10 hover:bg-white/5 transition-all duration-300">
        <div className="flex flex-col h-full">
          <span className={`text-xs font-mono text-${accentColor}/60 mb-2`}>
            {number}/
          </span>
          <h3 className={`text-xl font-bold mb-4 text-${headlineColor}`}>
            {title}
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
