import { getWorks } from "./queries";
import Grid from "../Grid";
import GridItem, { GridItemType } from "../Grid/GridItem";

export default async function Works() {
    const works: GridItemType[] = await getWorks();

    return (
        <Grid>
            {works.map((work: GridItemType) => (
                <GridItem key={work.slug} item={work}></GridItem>
            ))}
        </Grid>
    );
}
