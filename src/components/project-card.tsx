import Image, { StaticImageData } from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  benefits,
  results,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  benefits: string[];
  results: string[];
}) {
  return (
    <div className="w-full flex flex-col h-[600px] bg-white/5 overflow-hidden shadow-lg flex-1 md:min-w-96 rounded-lg border">
      <Image
        className="w-full"
        src={image}
        width={400}
        height={400}
        alt="Project image"
      />

      <div className="flex flex-col gap-4 overflow-y-auto flex-1 py-2">
        <div className="px-6 py-4">
          <div className="font-bold text-white text-xl mb-2">{title}</div>
          <p className="text-white text-base">{description}</p>
        </div>

        <div className="flex flex-col px-6">
          <span className="text-lg uppercase font-semibold">Beneficios</span>

          <ol className="flex flex-col gap-2">
            {benefits.map((benefit, idx) => (
              <li className=" text-sm" key={idx}>
                {benefit}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col px-6">
          <span className="text-lg uppercase font-semibold">Resultados</span>

          <ol className="flex flex-col gap-2">
            {results.map((result, idx) => (
              <li className=" text-sm" key={idx}>
                {result}
              </li>
            ))}
          </ol>
        </div>

        <div className="px-6 pt-4 pb-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
