import type { SkillType } from "@/sanity/schemas/skill";
import { readClient } from "@/sanity/client";

const client = readClient();


export async function getSkill(id: string): Promise<SkillType> {
    const query = `*[_id=="${id}"][0]`;
    return await client.fetch(query);
}