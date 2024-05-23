export default function SkillCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg bg-white/5 p-4 flex flex-col gap-2 md:flex-1 md:min-w-96">
      <h6 className=" text-3xl font-medium uppercase">{name}</h6>

      <p className=" text-base">{description}</p>
    </div>
  );
}
