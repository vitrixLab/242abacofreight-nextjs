export default function SectionHeading({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>

      {text ? <p>{text}</p> : null}
    </div>
  );
}
