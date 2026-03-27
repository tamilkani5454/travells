
const SectionHeading = ({ subtitle, title, description }) => (
  <div className="text-center max-w-2xl mx-auto mb-12">
    <span className="text-sm font-semibold tracking-widest uppercase text-tropical-coral">
      {subtitle}
    </span>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">{title}</h2>
    {description && (
      <p className="text-muted-foreground mt-4 leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
