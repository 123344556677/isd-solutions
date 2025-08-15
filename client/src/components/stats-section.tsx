import React from "react";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support" },
];

export default function StatsSection() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className="bg-card/80 backdrop-blur-sm rounded-lg p-4 text-center border border-border animate-scale-in"
            style={{ animationDelay: `${index * 0.2}s` }}
            data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="text-2xl md:text-3xl font-bold text-gradient-red">{stat.number}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
