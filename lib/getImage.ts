import { getPlaiceholder } from "plaiceholder";

export async function getImage(src: string, fill: boolean = false) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: fill
      ? {
          src,
          fill: true,
        }
      : {
          src,
          width,
          height,
        },
  };
}
