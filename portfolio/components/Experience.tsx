import Image from "next/image";

export interface ExperienceProps {
  imageRef: string;
  role: string;
  organization: string;
  orgUrl: string;
  misc?: string;
}

export default function Experience({ imageRef, role, organization, orgUrl, misc }: ExperienceProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-zinc-400 select-none">&gt;</span>
      <span className="flex items-center gap-1.5">
        {role} @
        <span className="inline-flex items-center gap-1 font-semibold text-zinc-600">
          <Image
            src={imageRef}
            alt={`${organization} Logo`}
            width={16}
            height={16}
            className="rounded-sm object-contain"
          />
          <a
            href={orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            {organization}
          </a>
        </span>
        {misc && ` (${misc})`}
      </span>
    </li>
  );
}
