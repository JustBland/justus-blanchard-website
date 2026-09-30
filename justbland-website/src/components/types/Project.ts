export type Project = {
    slug: string;
    img: {
        src: string;
        alt: string;
    }
    title: string;
    snippet?: string;
    skills: string;
    problem?: string;
    description?: string;
}