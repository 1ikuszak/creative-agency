import Image from "next/image";
import { cn } from "@/lib/utils";
import { getImage } from "@/lib/getImage";

export default async function DynamicImage({
  url,
  alt,
  containerClass,
  imageClass,
  fill = true,
}: {
  url: string;
  alt: string;
  containerClass?: string;
  imageClass?: string;
  fill?: boolean;
}) {
  const { base64, img } = await getImage(url, fill);

  return (
    <div className={cn("relative", containerClass)}>
      <Image
        {...img}
        alt={alt || ""}
        placeholder="blur"
        blurDataURL={base64}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(fill ? "object-cover" : "", imageClass)}
      />
    </div>
  );
}