type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight">{title}</h2>
      <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
