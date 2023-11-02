import { StructureBuilder } from 'sanity/desk';
import schemas from '../schemas'
import { sanity } from '@/config'

export default function listItems(schemaNames: string[], S: StructureBuilder) {
    return schemaNames.map((schemaName: string) => {
        const schema = schemas.find(schema => schema.name === schemaName);

        if (!schema) {
            return null
        }

        return S.listItem()
            .title(schema.title ? schema.title : schema.name)
            .id(`item-${schema.name}`)
            .icon(schema.icon ? schema.icon : '')
            .schemaType(schema.name)
            .child(
                S.documentList()
                .id(`list-${schema.name}`)
                .title(schema.title ? schema.title : schema.name)
                .filter(`_type == "${schema.name}"`)
                .apiVersion(sanity.apiVersion)
            )
    }).filter( result => result !== null)
}