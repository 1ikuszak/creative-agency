type ServiceCardVariant = "purple" | "blue" | "emerald" | "rose";

interface ServiceCardProps {
  number: string;
  title: string;
  variant: ServiceCardVariant;
  services: string[];
}

const variantStyles: Record<
  ServiceCardVariant,
  { accent: string; headline: string }
> = {
  purple: {
    accent: "text-purple-400/60",
    headline: "text-purple-200",
  },
  blue: {
    accent: "text-blue-400/60",
    headline: "text-blue-200",
  },
  emerald: {
    accent: "text-emerald-400/60",
    headline: "text-emerald-200",
  },
  rose: {
    accent: "text-rose-400/60",
    headline: "text-rose-200",
  },
};

export function ServiceCard({
  number,
  title,
  variant,
  services,
}: ServiceCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className="group h-full relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${styles.accent} opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />
      <div className="relative h-full p-8 border-b md:border-r border-white/10 hover:bg-white/5 transition-all duration-300">
        <div className="flex flex-col h-full">
          <span className={styles.accent}>{number}/</span>
          <h3 className={`text-xl font-bold mb-4 ${styles.headline}`}>
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
