declare module "gray-matter" {
  interface GrayMatterFile {
    data: { [key: string]: any };
    content: string;
    excerpt?: string;
  }

  function matter(input: string | Buffer, options?: unknown): GrayMatterFile;

  export = matter;
}
